#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const wake = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
};
async function rainbow() {
    let rain = chalkAnimation.rainbow("Hello Worlds!");
    await wake();
    rain.stop();
    console.log(`
    |  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
    `);
}
(async () => {
    await rainbow();
})();
async function cal() {
    const ans = await inquirer.prompt([
        {
            name: 'operator',
            type: 'list',
            message: 'Which operation do you wants?',
            choices: ['Addition', 'Multiplication', 'Subtration', 'Division'],
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number: ',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number: ',
        },
    ]);
    if (ans.operator === 'Addition') {
        console.log(chalk.blueBright(ans.num1 + ans.num2));
    }
    else if (ans.operator === 'Subtration') {
        console.log(chalk.blueBright(ans.num1 - ans.num2));
    }
    else if (ans.operator === 'Multiplication') {
        console.log(chalk.blueBright(ans.num1 * ans.num2));
    }
    else if (ans.operator === 'Division') {
        console.log(chalk.bgYellow(ans.num1 / ans.num2));
    }
    else {
        console.log('Invalid Input');
    }
}
async function againStart() {
    let again;
    do {
        await cal();
        again = await inquirer.prompt({
            type: 'input',
            name: 'restart',
            message: 'Would you like to restart the calculator?',
        });
    } while (again.restart === 'y' || again.restart === 'Y');
}
againStart();
