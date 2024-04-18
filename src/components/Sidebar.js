import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark as solidXmark} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isSidebarOpen, categories, handleCategoryChange }) => {
    const sidebarClassName = isSidebarOpen ? "list open" : "list";
    
    // Function to handle category click
    const handleClick = (category) => {
        handleCategoryChange(category); // Call the callback function with the selected category
    };

    return(
        <div className={sidebarClassName}>
            <ul>
                <li>
                    <FontAwesomeIcon icon={solidXmark} style={{ color: '#36395A !important', backgroundColor: '#FCFCFD !important' }} />
                </li>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href="#" onClick={() => handleClick(category)}>{category}</a> {/* Attach click event handler */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
