const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === "scissors"){
     return userInput; 		
     } else {
    console.log("error message on userInput");
    
  }
}

const getComputerChoice = () => {
  let wholeNum = Math.floor(Math.random()*3)
  var computerChoices = ['rock', 'paper', 'scissors']
  return computerChoices[wholeNum]
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'the game was a tie'
  }
  
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
       return "the computer won"
       } else { 
         return "the user won"      
    }
  }
  
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
       return "the computer won"
       } else { 
         return "the user won"      
    }
  }
  
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
       return "the computer won"
       } else { 
         return "the user won"      
    }
  }
  
  
}

const playGame = () => {
  var userChoice = getUserChoice('scissors');
  var computerChoice = getComputerChoice();
  console.log(userChoice, ":user choice"+"/n",computerChoice,"computer choice");
	console.log(determineWinner(userChoice, computerChoice));
}

playGame()
