import React from "react";
import lettersExport from "../letters";
import numbersExport from "../numbers";

const Abc = ({ handleLetterClick, clickedLetters }) => {
    const letters = lettersExport();
    const numbers = numbersExport();

    /*const [clickedLetters, setClickedLetters] = useState([]);
    const handleLetterClick = (letter) => {
        console.log("Letter clicked:", letter);
        setClickedLetters([...clickedLetters, letter]);
    };*/
    const isLetterClicked = (letter) => {
        return clickedLetters.includes(letter);
    };
    return(
        <div>
        <div className="keyboard">
            {letters.map((letter, index) => (
                <div key={index}> 
                    <button onClick={() => 
                        handleLetterClick(letter)} 
                        disabled={isLetterClicked(letter)} 
                        className="letter button-30">
                            {letter}
                    </button>
                </div>
            ))}
        </div>
        <div className="keyboard num-keys">
        {numbers.map((number, index) => (
            <div key={index}> 
                <button onClick={() => 
                    handleLetterClick(number)} 
                    disabled={isLetterClicked(number)} 
                    className="letter button-30">
                        {number}
                </button>
            </div>
        ))}
    </div>
    </div>
    );
};

export default Abc;