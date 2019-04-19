import React from 'react';
import Tap from './Tap';
import stewie from '../assets/images/stewie.png';

const masterTapList = [
  {
    song: 'Thato and Haley',
    album: '3A',
    artist: 'e',
    albumCover: ''
  }
];

function TapList(){
  return (
    <div>
      <img src={stewie}></img>
      <hr/>
      {masterTapList.map((album, index) =>
        <Tap song={album.song}
          album={album.album}
          artist={album.artist}
          albumCover={album.albumCover}
          key={index}/>
      )}
    </div>
  );
}

export default TapList;
