import {useState, useEffect} from 'react';
import Player from './components/Player'

function App() {
  const [songs] = useState([
    {
      title: "I Was Made For Lovin You",
      artist: "KISS",
      img_src: "./images/kiwmfly-img.png",
      src: "./music/Kiss-IWasMadeForLovinYou.m4a"
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

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length-1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <h1>HarmonyBox</h1>
      <Player 
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      />
    </div>
  );
}

export default App;
