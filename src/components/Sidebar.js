import React from "react";

const Sidebar = ({ isSidebarOpen, categories, handleCategoryChange }) => {
    const sidebarClassName = isSidebarOpen ? "list open" : "list";
    
    return(
        <div className={sidebarClassName}>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href="#">{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
