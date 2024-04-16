import React from "react";
import lettersExport from "../letters";

const Abc = ({ handleLetterClick, clickedLetters }) => {
    const letters = lettersExport();

    /*const [clickedLetters, setClickedLetters] = useState([]);
    const handleLetterClick = (letter) => {
        console.log("Letter clicked:", letter);
        setClickedLetters([...clickedLetters, letter]);
    };*/
    const isLetterClicked = (letter) => {
        return clickedLetters.includes(letter);
    };
    return(
        <div className="keyboard">
            {letters.map((letter, index) => (
                <div 
                    key={index}
                    
                > 
                    <button onClick={() => 
                        handleLetterClick(letter)} 
                        disabled={isLetterClicked(letter)} 
                        className="letter button-30">
                            {letter}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Abc;