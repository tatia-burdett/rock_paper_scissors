let choices = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let compPoints = 0;
let round = 0;

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
		round = round + 1;
		console.log(`You win this round, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`);
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		compPoints = compPoints + 1;
		round = round + 1;
		console.log(`You lose this round, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`);
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		round = round + 1;
		console.log(`It is a tie, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`)
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		userPoints = userPoints + 1;
		round = round + 1;
		console.log(`You win this round, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`);
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		compPoints = compPoints + 1;
		round = round + 1;
		console.log(`You lose this round, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`);
	} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
		round = round + 1;
		console.log(`It is a tie, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`);
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		userPoints = userPoints + 1;
		round = round + 1;
		console.log(`You win this round, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`);
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		compPoints = compPoints + 1;
		round = round + 1;
		console.log(`You lose this round, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`);
	} else {
		round = round + 1;
		console.log(`It is a tie, you have ${userPoints} and the computer has ${compPoints}. Round ${round}/5`);
	};
};


// Round is played 5 times. Once played 5 times, output user and computer points, declare winner.
function game() {
	if (round === 5 && userPoints > compPoints) {
		console.log(`Congratulations! You win! You have ${userPoints} points and the computer has ${compPoints} points!`)
	} else if (round === 5 && userPoints < compPoints) {
		console.log(`You lose this time! You have ${userPoints} points and the computer has ${compPoints} points.`)
	} else {
		console.log(`Keep playing, you have played ${round} of 5 rounds.`)
	}
}
