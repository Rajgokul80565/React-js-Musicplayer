import React, {useState, useRef, useEffect} from 'react'
import '../App.css';
import Player from './Player';

export default function Songcontainer(props) {

  const audioEl = useRef(null);
  const [isPlaying,setPlaying] = useState(false);

    useEffect( () =>{
      if(isPlaying){
        audioEl.current.play();
      }else{
        audioEl.current.pause();
      }
    });

    const skipSong = (forwards = true) =>{
      if(forwards){
        props.setCurrentSongIndex(() =>{
          let temp = props.currentSongIndex;
          temp++;
          if(temp > props.songs.length - 1){
            temp = 0;
          }
          return temp;
          
        });
      }else{
        props.setCurrentSongIndex(() =>{
          let temp = props.currentSongIndex;
          temp--;
          if(temp < 0){
            temp = props.songs.length - 1;
          }
          return temp;
      });
      }
    }
    return (
            <div className = "main-container">
            <audio 
                  src={props.songs[props.currentSongIndex].src} ref={audioEl}>
                  </audio>
             <div>
                <img className = "songimage" src={props.songs[props.currentSongIndex].img_src} alt="songImage"/>
              </div>
              <div>
                 <h1>
                 {props.songs[props.currentSongIndex].title}</h1>
                  <p>
                  {props.songs[props.currentSongIndex].artist}
                  </p>  
                  
              </div>
              <Player 
              isPlaying={isPlaying} 
              setPlaying={setPlaying} 
              skipSong ={skipSong}
 
              />
              </div>
      
    )
}
