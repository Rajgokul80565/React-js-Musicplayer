import React, {useState} from 'react';
import '../css/navbar.css';
import burgerMenu from '../images/BurgerMenu.png' ;
import xMenu from '../images/xIcon.png';
import {Link} from 'react-router-dom';


export default function Navbar() {


    const [navState, setNavState] = useState(false);

    const collapse = () => {
        setNavState(navState => !navState);
    }

    return (
        <div className = "Navbar">
            <div className = "leftside">
                <Link to = "/">
                    <a href="">Myplayees</a>
                </Link>
            </div>
            <div className = "rightside">
            <div className = "links" id = {navState ? "hidden" : ""}>
                <Link  to = "/">
                    <a onClick={collapse} > Home</a>
                </Link>
               
                <Link to = "/about">
                    <a onClick={collapse}  > About</a>
                </Link>
                <Link to = "/contact">
                    <a onClick={collapse}  > Contact</a>
                </Link>
            </div>
            </div>
            <button onClick={collapse} >
                <img class="burgerMenu" src={navState ? xMenu  : burgerMenu } alt="menu"/>
            </button>
        </div>
    )
}
