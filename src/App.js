import {useState, useEffect} from 'react';
import Player from './components/Player'

function App() {
  const [songs] = useState([
    {
      title: "I Was Made For Lovin' You",
      artist: "KISS",
      img_src: "./images/kiwmfly-img.png",
      src: "./music/Kiss-IWasMadeForLovinYou.mp3"
    },
    {
      title: "Dancing Queen",
      artist: "ABBA",
      img_src: "./images/dancingqueen-img.png",
      src: "./music/Abba - Dancing Queen.m4a"
    },
    {
      title: "Too Sweet",
      artist: "Hozier",
      img_src: "./images/toosweet-img.png",
      src: "./music/Hozier - Too Sweet.m4a"
    },
    {
      title: "Forever Young",
      artist: "Alphaville",
      img_src: "./images/foreveryoung-img.jpg",
      src: "./music/Alphaville - Forever Young.m4a"
    },
    {
      title: "That's Life",
      artist: "Frank Sinatra",
      img_src: "./images/thatslife-img.png",
      src: "./music/Frank Sinatra-That's life.m4a"
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
      <h1></h1>
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
