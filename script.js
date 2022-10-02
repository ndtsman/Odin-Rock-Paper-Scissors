

const pool = ["rock", "paper", "scissors"]

let result
let playerscore = 0
let computerscore = 0
let playerinput = prompt("Choose between rock, paper and scissors")
let playerSelection = playerinput.toLowerCase()


function getComputerChoice() {
    const computerchoice = pool[Math.floor(Math.random()*pool.length)]
    return computerchoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lose! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You Win! rock beats scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You Win! paper beats rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You Lose! scissors beats paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You Lose! rock beats scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You Win! scissors beats paper"
    } else { result = "Its a draw!"}
  }

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection,getComputerChoice())
        console.log(result)
        if (result[4]=="W") {
            playerscore ++
        } else if (result[4]=="L") {
            computerscore ++
        } 
     }
     if(playerscore>computerscore) {
        console.log("you win") 
     } else if (playerscore < computerscore) {
        console.log("you lose")
     } else {"Tie"}
    
}



game()






console.log(playerscore)
console.log(computerscore)