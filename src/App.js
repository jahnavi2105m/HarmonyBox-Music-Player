import {useState} from 'react';
import Player from './components/Player'

function App() {
  const [songs, setSongs] = useState([
    {
      title: "I Was Made For Loving You",
      artist: "KISS",
      img_src: "./images/kiwmfly-img.png",
      src: "./music/Kiss - I Was Made For Lovin You.m4a"
    },
    {
      title: "Dancing Queen",
      artist: "ABBA",
      img_src: "./images/dancingqueen-img.png",
      src: "./music/Abba - Dancing Queen.m4a"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <h1>HarmonyBox</h1>
      <Player song={songs[currentSongIndex]} 
      nextSong={songs[nextSongIndex]}/>
    </div>
  );
}

export default App;
