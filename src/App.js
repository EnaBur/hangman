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
      // Check if the click target is outside the sidebar
      if (isSidebarOpen && !event.target.closest('.sidebar')) {
        // Check if the click target is the menu icon
        const menuIcon = document.querySelector('.menu');
        if (menuIcon && !event.target.closest('.menu')) {
          setIsSidebarOpen(false);
        }
      }
    };
  
    // Add event listener to the document body
    document.body.addEventListener('click', closeSidebar);
  
    // Cleanup function to remove event listener
    return () => {
      document.body.removeEventListener('click', closeSidebar);
    };
  }, [isSidebarOpen]);

  const categories = ['Movies', 'Countries', 'Books']; // Example categories

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
      />
      <Abc 
        handleLetterClick={handleLetterClick} 
        clickedLetters={clickedLetters} 
      />
    </div>
  );
}

export default App;
