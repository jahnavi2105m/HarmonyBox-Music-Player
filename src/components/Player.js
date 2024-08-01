import React from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'


function Player(props) {
  return (
    <div className='comp-player'>
      <audio></audio>
      <h4>Playing now</h4>
        <PlayerDetails song={props.song} />
        <PlayerControls />
      <p><strong>Next up: </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default Player
