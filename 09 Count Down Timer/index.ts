#!/usr/bin/env node

import inquirer from 'inquirer';

const countdownTimer = async () => {
  console.log("Welcome to the Countdown Timer!\n");

  const Dat = await inquirer.prompt([
    {
      type: 'input',
      name: 'targetDateTime',
      message: 'Enter the date and time (YYYY-MM-DD HH:MM:SS):'
    }
  ]);

  let targetDateTime = new Date(Dat.targetDateTime);
  
  if (isNaN(targetDateTime.getTime())) {
    console.log("Invalid date and time format. Please correct  format is YYYY-MM-DD HH:MM:SS.");
    return;
  }

  let interval = setInterval(() => {
    let currentTime = new Date();
    let remainingTime = targetDateTime.getTime() - currentTime.getTime();

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    console.log(`The time is: ${days}d ${hours}h ${minutes}m ${seconds}s`);
 
    if (remainingTime <= 0) {
      clearInterval(interval);
      console.log("\nCountdown has ended! Time's up!");
     return;
     } });
};

countdownTimer();
