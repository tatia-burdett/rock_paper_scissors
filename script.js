let choices = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let compPoints = 0;

function playRound(playerSelection, computerSelection) {
	// User prompted to make a choice: Rock, Paper, Scissors and user choice recorded in a variable.
	playerSelection = prompt('Rock, paper, scissors?').toLowerCase();
	// Computer makes a random choice
	function computerPlay() {
	let choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
	}
	// Computer choice recorded in a variable.
	computerSelection = computerPlay();
	// Display user and computer choices
	console.log(`Your choice is: ${playerSelection}`);
	console.log(`The computer's choice is: ${computerSelection}`);
	// If user choice ____ and computer choice ____, result ____
	if (playerSelection === 'rock' && computerSelection === 'scissors') {
		userPoints = userPoints + 1;
		console.log(`You win this round`);
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		compPoints = compPoints + 1;
		console.log(`You lose this round`);
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		console.log(`It is a tie!`)
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		userPoints = userPoints + 1
		console.log(`You win this round`);
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		compPoints = compPoints + 1;
		console.log(`You lose this round`);
	} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
		console.log(`It is a tie!`);
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		userPoints = userPoints + 1
		console.log(`You win this round`);
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		compPoints = compPoints + 1;
		console.log(`You lose this round`);
	} else {
		console.log(`It is a tie!`);
	};
};



/* If the rounds played is less than 5
 		play another round
 	Else... if rounds played = 5
 		Display total user points
 		Display total computer points */

/* If user points > computer points
 		"Congratulations, you win!"
 	Else...
 		"Sorry, you lose!" */
