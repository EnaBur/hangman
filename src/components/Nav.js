import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/fontawesome-free-regular';
import { faHeart as solidHeart, faBurger as solidBurger } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    
    return(
        <div className="navbar">
            <div className="menu">
                {/*bira kategoriju iz apija, npr filmovi, države etc.*/}
                <FontAwesomeIcon icon={solidBurger} />
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