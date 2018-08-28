import React from 'react';

const Song = function (props) {
  return (
    <li>
      <h3>{props.name}</h3>
      <img src={props.image}/>
      <h4>{props.title}</h4>
      <p>{props.children}</p>
    </li>
  );
}


export default Song;
