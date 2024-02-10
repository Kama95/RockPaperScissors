//0 is Rock
//1 is Paper
//2 is Scissors

let userInput = parseInt(prompt ("Pick a number: 0 for Rock, 1 is Paper, 2 is Scisors",'' ));

let comChoice = Math.floor(Math.random()*3);

function winner (userInput, comChoice ){
    if ( userInput === comChoice){
        return "draw";
    }
    else if (( userInput === 0 && comChoice === 1 )|| 
    (userInput === 1 && comChoice === 2) ||
    (userInput=== 2 && comChoice ===0))
    
    {
        return "You lose";
    }

    else {return "You Win"};
}

function result (){
   return winner(userInput,comChoice);
}

console.log (result());
