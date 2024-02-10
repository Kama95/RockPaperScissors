let userInput = prompt ("Pick a number: 0 for Rock, 1 is Paper, 2 is Scisors",'' );

let comChoice = Math.floor(Math.random()*3);

function winner (userInput, comChoice ){
    if ( userInput === comChoice){
        return "draw";
    }
    else if ( userInput === 0 && comChoice === 1 ){
        return "You lose";
    }
    else if (userInput === 1 && comChoice === 2){
        return "You lose";
    }
    else if (userInput=== 2 && comChoice ===0){
        return "You lose";
    }

    else {return "You Win"};
}

function result (){
    winner();
}

console.log (result());
