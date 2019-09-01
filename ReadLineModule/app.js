const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output: process.stdout});

let num1 = Math.floor((Math.random() *10) +1);
let num2 = Math.floor((Math.random() *10) +1);
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`, (userInput)=>{
  //console.log(userInput);
  if(userInput.trim() == answer){
    rl.close();
  }
  else{
    rl.setPrompt('Incorrect response. Please try again\n');
    rl.prompt();
    rl.on('line', (userInput)=>{  //line is a listener event of the readline class
      if(userInput.trim() == answer)
        rl.close();
        else{
          rl.setPrompt(`Your answer of ${userInput} is incorrect. Try again.\n`);
          rl.prompt();
          //when the user inputs an answer, the rl.on('line') listener is triggered,
          //creating a loop that is only broken when rl.close() is called,
          //when the user input is correct
        }

    })
  }
});

rl.on('close', ()=>{
  console.log('Correct!!!');
});
