import {useState} from 'react';

function App() {
  const [song, setSong] = useState([
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
  ])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
