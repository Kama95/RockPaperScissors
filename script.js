//0 is Rock
//1 is Paper
//2 is Scissors


const comOptions = ['Rock','Paper','Scissors'];



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
        let result = 'You win';
       return result;
   }
   else if (comOptions[comChoice] === 'Paper'){
       let result = 'Paper'
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

const rock = document.querySelector('.rock');
const paper= document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    console.log(rockChoice(comOptions));
});

paper.addEventListener('click',() => {
    console.log(paperChoice(comOptions));
})