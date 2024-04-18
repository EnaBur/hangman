import React, { useState, useEffect } from "react";
import Abc from './components/Abc.js';
import Term from './components/Term.js';
import Nav from './components/Nav.js';
import Sidebar from "./components/Sidebar";

import './styles/app.scss';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [movieNames, setMovieNames] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Add logic to fetch random term from corresponding API
  };

  const handleLetterClick = (letter) => {
    setClickedLetters([...clickedLetters, letter]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const closeSidebar = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar')) {
        const menuIcon = document.querySelector('.menu');
        if (menuIcon && !event.target.closest('.menu')) {
          setIsSidebarOpen(false);
        }
      }
    };
    document.body.addEventListener('click', closeSidebar);
    return () => {
      document.body.removeEventListener('click', closeSidebar);
    };
  }, [isSidebarOpen]);

  const categories = ['Movies', 'Countries', 'Books']; // Example categories

  const fetchMovieNames = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'process.env.REACT_APP_API_KEY',
        'Accept': 'application/json'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch movie names');
      }
      const data = await response.json();
      const movieNames = data.results.map(movie => movie.title);
      setMovieNames(movieNames);
      console.log(movieNames);
    } catch (error) {
      console.error("Error fetching movie names:", error);
    }
  };

  useEffect(() => {
    fetchMovieNames();
  }, []);

  return (
    <div className="App">
      <Nav  
        toggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen}
      />
      {isSidebarOpen && <Sidebar 
        categories={categories}
        isSidebarOpen={isSidebarOpen} 
        handleCategoryChange={handleCategoryChange} 
      />}
      <Term 
        clickedLetters={clickedLetters} 
        selectedCategory={selectedCategory}
        movieNames={movieNames}
      />
      <Abc 
        handleLetterClick={handleLetterClick} 
        clickedLetters={clickedLetters} 
      />
    </div>
  );
}

export default App;
