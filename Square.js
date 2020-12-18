import React from 'react';
// import Board from './component/Board.js';
// import Game from './component/Game.js';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }



export default Square;
