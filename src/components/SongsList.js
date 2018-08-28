import React from 'react';
import Song from './Song.js'


const SongsList = function (props, index) {
  const songComponents = props.songs.map((song) => {
    return (
      <Song
      key={index}
      name={song["im:name"].label}
      title={song["im:artist"].label}
      image={song["im:image"][0].label}
    ></Song>);
  });
  return (
    <ol>
      {songComponents}
    </ol>
  )
}













export default SongsList;
