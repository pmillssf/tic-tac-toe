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
  this.boardMove = ['top left', 'top', 'top right', 'middle left', 'middle', 'middle right', 'bottom left', 'bottom', 'bottom right'];
  this.totalMoves = 0;
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
      this.

      rl.on('line', function (input) {

      });

    });
  });
};

TicTacToe.prototype.moves = function() {

};
