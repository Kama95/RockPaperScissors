//0 is Rock
//1 is Paper
//2 is Scissors


const comOptions = ['Rock','Paper','Scissors'];
let playerScore = 0;
let comScore = 0;



//const comSelection = comOptions[comChoice];


function rockChoice (comOptions) {
    const comChoice = Math.floor(Math.random() *comOptions.length);

    if (comOptions[comChoice] === 'Rock'){
         let result = 'draw';
        return result;
    }
    else if (comOptions[comChoice] === 'Paper'){
        let result = 'You Lose'
        return result;
    }
    else if (comOptions[comChoice] === 'Scissors'){
        let result = 'You Win';
        return result;
    }
    else {
        return "Wrong Choice";
    }
}

function paperChoice(comOptions){
    const comChoice = Math.floor(Math.random()*comOptions.length);

    if (comOptions[comChoice] === 'Rock'){
        let result = 'You Win';
       return result;
   }
   else if (comOptions[comChoice] === 'Paper'){
       let result = 'Its a Draw'
       return result;
   }
   else if (comOptions[comChoice] === 'Scissors'){
       let result = 'You Lose';
       return result;
   }
   else {
       return "Wrong Choice";
    
   }
}

function scissorsChoice (comOptions){
    const comChoice = Math.floor(Math.random()*comOptions.length);
    return comChoice;
}
function roundPlay ( ){

    if (comOptions[comChoice] === 'Rock'){
        comScore++;
        let result = 'You Lose';
       return result;
   }
   else if (comOptions[comChoice] === 'Paper'){
       playerScore++;
       let result = 'You Win'
       return result;
   }
   else if (comOptions[comChoice] === 'Scissors'){
       let result = 'Its a Draw';
       return result;
   }
   else {
       return "Wrong Choice";
    
   }
}



const rock = document.querySelector('.rock');
const paper= document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const yourScoreDiv = document.createElement ('div');;
yourScoreDiv.style.margin ='20px';
comScoreDiv.style.margin ='20px';


rock.addEventListener('click', () => {

    yourScoreDiv.textContent = rockChoice(comOptions);
    const body = document.querySelector('body');
    body.appendChild(yourScoreDiv);
});

paper.addEventListener('click',() => {
    yourScoreDiv.textContent = rockChoice(comOptions);
    const body = document.querySelector('body');
    body.appendChild(yourScoreDiv);
});

scissors.addEventListener('click',()=> {
    yourScoreDiv.textContent = rockChoice(comOptions);
    const body = document.querySelector('body');
    body.appendChild(yourScoreDiv);
});

