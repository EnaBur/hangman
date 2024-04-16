import React, { useState } from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/fontawesome-free-regular';
import { faHeart as solidHeart, faBurger as solidBurger } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ toggleSidebar }) => {
    return(
        <div className="navbar">
            <div className="toggleSidebar">
                <div className="menu" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={solidBurger} />
                </div>
            </div>
            
            <div className="lives">
                {/*kad pogriješi slovo, pretvori se u regularHeart*/}
                <FontAwesomeIcon icon={solidHeart} />
                <FontAwesomeIcon icon={solidHeart} />
                <FontAwesomeIcon icon={solidHeart} />
            </div>
        </div>
    );
};

export default Nav;