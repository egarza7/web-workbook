'use strict';

//$(document).ready(function() {
  // Put app logic in here
  function startGame(){
    document.turn = "X";
  }

  function nextMove(square){
    square.innerText = document.turn;
  }

//});
