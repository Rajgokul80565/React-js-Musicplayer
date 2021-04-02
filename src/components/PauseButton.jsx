import React, {useState} from 'react'
import '../css/player.css';

export default function Player() {
    
    
    const [buttonState, switchState] = useState(false);

    const pause = "https://img.icons8.com/android/48/ffffff/pause.png";
    const play = "https://img.icons8.com/android/48/ffffff/play.png";

    const changeButtonState = () =>{
        switchState(prevState => !prevState );
    }

    return (
            <button onClick={changeButtonState}  className="pauseButton"> 
            <img src={buttonState ? pause : play}/>

            </button> 
          
       
    )
}
