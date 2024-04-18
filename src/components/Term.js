import React, { useState, useEffect, useCallback } from "react";

const Term = ({ clickedLetters, selectedCategory, movieNames }) => {
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

  return (
    <div className="term">
      <div className="subject">
        {currentTerm && typeof currentTerm === 'string' && (
            currentTerm.split('').map((letter, index) => (
            <div className="guess" key={index}>{letter}</div>
            ))
        )}
      </div>
      <button onClick={updateTerm}>Change Term</button>
    </div>
  );
};

export default Term;





{/*
return(
        <div className = "term">

{clickedLetters.map((letter, index) => (
    <div className="guess" key={index}>{letter}</div>
))}
</div>
);
};
*/}