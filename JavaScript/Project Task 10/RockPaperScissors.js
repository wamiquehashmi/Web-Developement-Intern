const getUserchoice = (userInput) => {
	userInput = userInput.toLowerCase();
	if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userChoice==='bomb'){
		return userInput;
	} else {
		console.log("Wrong Choice!!")
	}
}

function getComputerChoice(){
	var x = Math.floor(Math.random() * 3);
	var computerChoice="";
	switch(x){
		case 0:
			computerChoice = 'rock';
			break;
		case 1:
			computerChoice = 'paper';
			break;
		case 2:
			computerChoice = 'scissors';
			break;
	}
	return computerChoice;
}

function determineWinner(userChoice, computerChoice){
	if (userChoice === 'bomb'){
		return "User WON !!!"
	}
	if(userChoice===computerChoice){
		return "It's a TIE !!!"
	}
	if (userChoice==='rock'){
		if(computerChoice==='paper'){
			return "Computer WON !!!"
		} else {
			return "User WON !!!"
		}
	}
	if(userChoice==='paper'){
		if(computerChoice==='scissors'){
			return "Computer WON !!!"
		} else {
			return "User WON !!!"
		}
	}
	if(userChoice==='scissors'){
		if(computerChoice==='rok'){
			return "Computer WON !!!"
		} else {
			return "User WON !!!"
		}
	}
}
function palyGame(){
	var userChoice = getUserChoice('paper');
	console.log(`User's choice: ${userChoice}`);
	computerChoice = getComputerChoice();
	console.log(`Computer's choice: ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
}

playGame();
