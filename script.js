let choices = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let compPoints = 0;

function playGame() {
	// User prompted to make a choice: Rock, Paper, Scissors and user choice recorded in a variable.
	let userChoice = prompt('Rock, paper, scissors?').toLowerCase();
	// Computer makes a random choice
	function computerPlay() {
	let choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
	}
	// Computer choice recorded in a variable.
	let compChoice = computerPlay();
	// Display user and computer choices
	console.log(`Your choice is: ${userChoice}`);
	console.log(`The computer's choice is: ${compChoice}`);
	// If user choice ____ and computer choice ____, result ____
	if (userChoice === 'rock' && compChoice === 'scissors') {
		userPoints = userPoints + 1;
		console.log(`You win this round`);
	} else if (userChoice === 'rock' && compChoice === 'paper') {
		compPoints = compPoints + 1;
		console.log(`You lose this round`);
	} else if (userChoice === 'rock' && compChoice === 'rock') {
		console.log(`It is a tie!`)
	} else if (userChoice === 'scissors' && compChoice === 'paper') {
		userPoints = userPoints + 1
		console.log(`You win this round`);
	} else if (userChoice === 'scissors' && compChoice === 'rock') {
		compPoints = compPoints + 1;
		console.log(`You lose this round`);
	} else if (userChoice === 'scissors' && compChoice === 'scissors') {
		console.log(`It is a tie!`);
	} else if (userChoice === 'paper' && compChoice === 'rock') {
		userPoints = userPoints + 1
		console.log(`You win this round`);
	} else if (userChoice == 'paper' && compChoice == 'scissors') {
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
