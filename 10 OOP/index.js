#!/usr/bin/env node
import inquirer from 'inquirer';
class animal {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer === 1)
            this.personality = "Dangerous.";
        else
            this.personality = "Not Dangerous.";
    }
    Personality() {
        return this.personality;
    }
}
class dog extends animal {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class charactics {
    static async main() {
        const answers = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: "press 1 if you dog barking to others people, or press 2 if your dog not barking by other people:",
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your dog name?",
            }
        ]);
        const answer = answers.answer;
        const name = answers.name;
        const myDog = new dog(name);
        myDog.askQuestion(answer);
        console.log(`Your dog name is ${myDog.getName()} and your dog is ${myDog.Personality()}`);
    }
}
charactics.main();
