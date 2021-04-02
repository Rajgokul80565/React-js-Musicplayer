import React from 'react'
import '../App.css';
import song1 from '../images/spidey.jpeg';
import Player from './Player';

export default function Songcontainer(props) {
    return (
            <div className = "main-container">
             <div>
                <img className = "songimage" src={song1} alt="songImage"/>
              </div>
              <div>
                 <h1>Song name here ...</h1>
                      <p>{props.nextSong.title}</p>
                      <progress value="32" max="100" ></progress>
              </div>
              <Player/>
              </div>
      
    )
}
