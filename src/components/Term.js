import React, { useState, useEffect, useCallback } from "react";

const Term = ({ clickedLetters, selectedCategory, movieNames, handleCorrectGuess }) => {
  const [currentTerm, setCurrentTerm] = useState('');

  // Function to select a random movie title from movieNames array
  const selectRandomMovie = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * movieNames.length);
    return movieNames[randomIndex];
  }, [movieNames]);

  // Function to update the current term
  const updateTerm = useCallback(() => {
    const newTerm = selectRandomMovie();
    setCurrentTerm(newTerm);
  }, [selectRandomMovie]);

  // useEffect to update the term when movieNames changes
  useEffect(() => {
    if (movieNames.length > 0) {
      updateTerm();
    }
  }, [movieNames, updateTerm]);

  // Function to check if a letter is clicked
  const isLetterClicked = (letter) => {
    return clickedLetters.includes(letter);
  };

  // Function to update the classname of divs based on correct guesses
  const getClassName = (letter) => {
    return isLetterClicked(letter) ? 'guess correct' : 'guess';
  };

  return (
    <div className="term">
      <div className="subject">
        {currentTerm && typeof currentTerm === 'string' && (
          currentTerm.split('').map((letter, index) => (
            <div className={getClassName(letter)} key={index}>{letter}</div>
          ))
        )}
      </div>
      <button className="button-30" onClick={updateTerm}>
        Change Term
      </button>
    </div>
  );
};

export default Term;
