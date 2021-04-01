import React from 'react'
import '../App.css';
import song1 from '../images/song 1.jpg';
import PauseButton from '../components/PauseButton';
import ForwardBtn from '../components/ForwardBtn';

export default function Songcontainer() {
    return (
            <div className = "main-container">
             <div>
                <img className = "songimage" src={song1} alt="songImage"/>
              </div>
              <div>
                 <h1>Song name here ...</h1>
                      <p>artist ft.. song</p>
                      <progress value="32" max="100" ></progress>
              </div>
              <PauseButton/>
              <ForwardBtn />
              </div>
      
    )
}
