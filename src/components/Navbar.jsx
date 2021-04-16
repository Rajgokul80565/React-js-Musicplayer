import React, {useState} from 'react';
import '../css/navbar.css';
import burgerMenu from '../images/BurgerMenu.png' ;
import xMenu from '../images/xIcon.png';

export default function Navbar() {


    const [navState, setNavState] = useState(false);

    const collapse = () => {
        setNavState(navState => !navState);
    }

    return (
        <div className = "Navbar">
            <div className = "leftside">
                <a href="">Myplayees</a>
            </div>
            <div className = "rightside">
            <div className = "links" id = {navState ? "hidden" : ""}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            </div>
            <button onClick={collapse} >
                <img class="burgerMenu" src={navState ? xMenu  : burgerMenu } alt="menu"/>
            </button>
        </div>
    )
}
