var expect = require('expect');
var readline = require('readline');

var TicTacToe = function() {
	this.playerOne = '',
	this.playerTwo = '',
	this.moves = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
};

TicTacToe.prototype.printGameBoard = function() {
  console.log(this.moves.slice(0, 3).join(' | '));
  console.log('-- -- -- -');
  console.log(this.moves.slice(3, 6).join(' | '));
  console.log('-- -- -- -');
  console.log(this.moves.slice(6, 9).join(' | '));
};

// Pulled from https://nodejs.org/api/readline.html
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whose player One? ', function(answer) {

	rl.question('Whose player Two? ', function(answer) {
		gameBoard([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
	});
});


rl.on('line', function (input) {
  console.log();
});

