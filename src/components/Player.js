import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'


function Player(props) {
    const audioElm = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying){
            audioElm.current.play();
        } else {
            audioElm.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if(forwards){
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length -1){
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
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
    <div className='comp-player'>
      <audio src={props.songs[props.currentSongIndex].src} ref={audioElm}></audio>
      <h4>Playing now</h4>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />
        <PlayerControls 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            SkipSong={SkipSong}
        />
      <p><strong>Next up: </strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
    </div>
  )
}

export default Player
