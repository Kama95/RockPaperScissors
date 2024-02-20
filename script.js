const buttons = document.querySelectorAll ('button');
const score = document.querySelector ('div');
const body = document.querySelector('body');

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

function winner (){
    if (playerScore === 5 ){
        return "You, Player is the winner";
    }else if(comScore === 5) {
        return "Computer has won this game"
}
}

buttons.forEach(button => { 
    button.addEventListener('click', ()=>{
        const playerSelection = button.textContent;
        console.log (playerSelection);
        const computerSelection = computerPlay();
        console.log (computerSelection); 
        score.textContent = playRound(playerSelection, computerSelection);
        updateScore();
        winner();
    }

    )
    
});
