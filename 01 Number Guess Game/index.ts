#!/usr/bin/env node
import inquirer from "inquirer";

const guess = 10;
const RandomNumber = ()=> Math.floor(Math.random() * 150);

const runGame = async ()=>{
  const randomNumber = RandomNumber();
  let guesses = guess;
  while(guesses > 0){
    const Ques = inquirer.prompt({
      type:"input",
      name:"guess",
      message:"Guess a number between 1 and 150: ",
    })
    const guess = parseInt((await Ques).guess);

    if(guess === randomNumber){
      console.log(`You gusses the right number number was ${randomNumber} `)
      break;
    }else if(guess<randomNumber){
      console.log("Your guess is too low")
    }else{
      console.log("Your guess is too high")

    }
    guesses--;
    
  }
  if(guesses === 0){
    console.log(`You ran out of guesses. The correct number was ${randomNumber}`)

  }
}
runGame()