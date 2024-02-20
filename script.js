const buttons = document.querySelector ('button');
const score = document.querySelector ('div');

let playerScore = 0;
let comScore = 0;

function computerPlay(){
    const options = ['Rock','Paper','Scissors'];
    let RandomChoice = Math.floor(Math.random()*options.length);
    return options[RandomChoice];
}

function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
    return "its a draw";}


else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors')||
    (playerSelection ==='Paper' && computerSelection==='Rock')||
    (playerSelection==='Scissors'&& computerSelection==='Paper')
){

    playerScore++;
    return 'You win this round';
}

else {
    comScore++;
    return 'COmputer wins this round';
}
}


function updateScore (){
 score.textContent = `Player Score : ${playerScore}. Computer Score : ${comScore}`;
 //const body = document.querySelector('body')
 //body.appendChild(score);
}

