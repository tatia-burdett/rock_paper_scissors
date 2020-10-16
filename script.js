let choices = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let compPoints = 0;

// User prompted to make a choice: Rock, Paper, Scissors and user choice recorded in a variable.

let userChoice = prompt('Rock, paper, scissors?').toLowerCase();

// Computer makes a random choice

function computerChoice() {
	let choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
}

// Computer choice recorded in a variable.

let compChoice = computerChoice();

console.log(`Your choice is: ${userChoice}`);
console.log(`The computer's choice is: ${compChoice}`);


/* If user choice is ____
 	and computer choice is ____
 		+1 point for user
 		"You win this round"
 	and computer choice is ___
 		+1 point for computer
 		"You lose this round"
 	and computer choice is ___
 		0 points given
 		"It's a tie" */

if (userChoice === 'rock' && compChoice === 'scissors') {
	userPoints = userPoints + 1;
	console.log(`You win this round`);
} else if (userChoice === 'rock' && compChoice === 'paper') {
	console.log(`You lose this round`);
} else if (userChoice === 'rock' && compChoice === 'rock') {
	console.log(`It is a tie!`)
} else if (userChoice === 'scissors' && compChoice === 'paper') {
	console.log(`You win this round`);
} else if (userChoice === 'scissors' && compChoice === 'rock') {
	console.log(`You lose this round`);
} else if (userChoice === 'scissors' && compChoice === 'scissors') {
	console.log(`It is a tie!`);
} else if (userChoice === 'paper' && compChoice === 'rock') {
	console.log(`You win this round`);
} else if (userChoice == 'paper' && compChoice == 'scissors') {
	console.log(`You lose this round`);
} else {
	console.log(`It is a tie!`);
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
