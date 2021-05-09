import React from 'react';
import playImage from '../../images/music guy.svg';
import '../../css/landing.css';
import ListenButton from '../landing/ListenButton';
import {Link} from 'react-router-dom';


export default function Landing() {
    return (
        <div id = "landing">
            <div className = "heading">
                <h1>Without music, life would not be fair.</h1>
                <ListenButton />
    
            </div>
            <div className = "music-img-div">
                <img className="playImage" src={playImage} alt="music Illustration"/>
            </div>
        </div>
    )
}
