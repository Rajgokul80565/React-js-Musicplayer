import React from 'react'
import PauseButton from  './PauseButton';
import ForwardButton from './ForwardBtn';
import BackButton from './BackwardBtn';
import '../css/player.css';

export default function Player() {
    return (
        <div className = 'player-Container' >
            <BackButton />
            <PauseButton/>
            <ForwardButton />
        </div>
    )
}
