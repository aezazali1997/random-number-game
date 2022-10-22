import inquirer from "inquirer"
import { Answers } from "inquirer"
const number:number = Math.floor(Math.random()*10);
let score =0;
inquirer.prompt([
  {
    type:'number',
    name:'Number',
    message:'(Round 1) Enter the number?'
    
  }
]).then((answers:Answers)=>{
  if(answers.Number===number){
    console.log('you win');
    score+=1;
  }
  else{
    console.log('you lose');
  }
  console.log('The number was :'+number);
  console.log("Score:" + score);
  
  inquirer.prompt([
  {
    type:'number',
    name:'Number',
    message:'(Round 2) Enter the number?'
    
  }
]).then((answers:Answers)=>{
  if(answers.Number===number){
    console.log('you win');
    score+=1;
  }
  else{
    console.log('you lose');
  }
  console.log('The number was :'+number);
    console.log("Score:" + score);
    inquirer
      .prompt([
        {
          type: "number",
          name: "Number",
          message: "(Round 3) Enter the number?",
        },
      ])
      .then((answers: Answers) => {
        if (answers.Number === number) {
          console.log("you win");
          score += 1;
        } else {
          console.log("you lose");
        }
        console.log("The number was :" + number);
          console.log("Score:" + score);
      });
})
})