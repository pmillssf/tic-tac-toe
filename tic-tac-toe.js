var expect = require('expect');
var readline = require('readline');
// Pulled from https://nodejs.org/api/readline.html
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var TicTacToe = function() {
  this.playerOne = '',
  this.playerTwo = '',
  this.currentBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  this.boardMoves = ['top left', 'top', 'top right', 'middle left', 'middle', 'middle right', 'bottom left', 'bottom', 'bottom right'];
  this.totalMoves = 0;
  this.currentPlayer = this.playerOne;
  this.playerOneMarker = 'X';
  this.playerTwoMarker = 'O';
  this.availableMoves = ['top left', 'top', 'top right', 'middle left', 'middle', 'middle right', 'bottom left', 'bottom', 'bottom right'];
};

TicTacToe.prototype.printGameBoard = function() {
  console.log(this.moves.slice(0, 3).join(' | '));
  console.log('-- -- -- -');
  console.log(this.moves.slice(3, 6).join(' | '));
  console.log('-- -- -- -');
  console.log(this.moves.slice(6, 9).join(' | '));
};

TicTacToe.prototype.playGame = function() {
  rl.question('Whose player One? ', function(answer) {
    this.playerOne = answer;
    rl.question('Whose player Two? ', function(answer) {
      this.playerTwo = answer;
      this.printGameBoard();
      // invoke function current turn

      rl.on('line', function (input) {
        // on input of a move
          // run move function
        // on input of non-move
          // this.error()

      });

    });
  });
};

TicTacToe.prototype.move = function(move) {
  // check if move is available
    // if not, return error
  // if so, replace index of currentBoad that matches boardmove index with the marker of the current player
    // remove move from availble moves
    // check for win condition
    // update currentPlayer
    // invoke currentTurn
};

TicTacToe.prototype.currentTurn = function() {
  console.log('It is ', this.currentPlayer, '\'s turn');
  console.log('the available moves are: ', this.availableMoves);
};

TicTacToe.prototype.checkWinner = function() {
  // 
};

TicTacToe.prototype.error = function() {

};

