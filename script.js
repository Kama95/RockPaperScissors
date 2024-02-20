const buttons = document.querySelector ('button');
const score = document.querySelector ('div');

let playerScore = 0;
let comScore = 0;

function computerPlay(){
    const options = ['Rock','Paper','Scissors'];
    let RandomChoice = Math.floor(Math.random()*options.length);
    return options(RandomChoice);
}
