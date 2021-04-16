import React,{useState, useEffect} from 'react';
import Songcontainer from './Songcontainer';
import songList from './songsList';

export default function Main() {

    const [songs] = useState(songList);

  const [currentSong,setCurrentSong] = useState(0);
  const [nextSong, setNextSong] = useState(currentSong + 1);

    useEffect( () =>{
       setNextSong( ()=>{
         if(currentSong + 1 > songs.length - 1){
          return 0;
         }
         else{
           return currentSong + 1;
         }
       } );
    }, [currentSong])


    return (
        <div className = "Main">
        
        <Songcontainer
            currentSongIndex = {currentSong}
            setCurrentSongIndex = {setCurrentSong}
            nextSongIndex = {nextSong}
            songs={songs}
        />
            
        </div>
    )
}
