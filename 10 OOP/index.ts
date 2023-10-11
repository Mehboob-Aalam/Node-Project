#!/usr/bin/env node
import  inquirer from 'inquirer';

class animal {
    protected personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    askQuestion(answer: number): void {
        if (answer === 1)
            this.personality = "Dangerous.";
        else
            this.personality = "Not Dangerous.";
    }

    Personality(): string {
        return this.personality;
    }
}

class dog extends animal {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class charactics {
    static async main(): Promise<void> {
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
