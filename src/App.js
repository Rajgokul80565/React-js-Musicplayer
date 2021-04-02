import React, {useState} from 'react';
import Songcontainer from './components/Songcontainer';
import Songs from './components/scrolling/Songs';


function App() {

  const [songs,setSong] = useState( [
    { 
      title: "Enjoy Enjami ft Arivu",
      artist:"Dhee and Arivu",
      img_src:'./images/spidey.jpeg',
      src: './../public/music/Enjoy Enjaami.mp3',

  },
  { 
      title: "Godzilla",
      artist:"Eminem and Juice wrld",
      img_src:'./images/bunny.jpg',
      src: '../public/music/godzilla.mp3',
  }
] )
    const [currentSong,setCurrentSong] = useState(0);
    const [nextSong, setNextSong] = useState(currentSong + 1);

  return (
    <div className="App">
      <Songs />
     <Songcontainer song={songs[currentSong]} nextSong = {songs[nextSong]}  />
    </div>
  );
}

export default App;
