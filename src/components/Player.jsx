import React from 'react'
//import PauseButton from  './PauseButton';
//import ForwardButton from './ForwardBtn';
//import BackButton from './BackwardBtn';
import '../css/player.css';

export default function Player(props) {

    const pause = "https://img.icons8.com/android/48/ffffff/pause.png";
    const play = "https://img.icons8.com/android/48/ffffff/play.png";
    return (
        <div className = 'player-Container' >
            <button onClick = {() => props.skipSong(false)}  className= "backward-btn" ></button>
            <button onClick={() => props.setPlaying(!props.isPlaying)}  className="pauseButton"> 
            <img src={props.isPlaying ? pause : play}/>
            </button> 
            <button onClick={()=> props.skipSong(true)} className = "forward-Btn">  </button>
        </div>
    )
}
