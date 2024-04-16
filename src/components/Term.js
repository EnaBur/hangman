import React from "react";

const Term = ({ clickedLetters, selectedCategory }) => {
    
    return(
        <div className = "term">
{/*kad dohvati termin neki random, prikaže broj kućica = broj slova te riječi*/}
{clickedLetters.map((letter, index) => (
                <div className="guess" key={index}>{letter}</div>
            ))}
        </div>
    );
};

export default Term;