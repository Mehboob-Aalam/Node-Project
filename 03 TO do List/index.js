#!/usr/bin/env node
import inquirer from "inquirer";
const tasks = [];
async function main() {
    while (true) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you wanna do?',
                choices: ['Add task', 'View tasks', 'finished task', 'Exit'],
            },
        ]);
        if (action === 'Add task') {
            const { title } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter the task title:',
                },
            ]);
            tasks.push({ title, finished: false });
        }
        else if (action === 'View tasks') {
            console.log('Tasks:');
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task.title} [${task.finished ? 'x' : ' '}]`);
            });
        }
        else if (action === 'finished task') {
            const { index } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'index',
                    message: 'Enter the task number to finished:',
                },
            ]);
            const task = tasks[Number(index) - 1];
            if (task) {
                task.finished = true;
            }
            else {
                console.log('Invalid task number');
            }
        }
        else if (action === 'Exit') {
            break;
        }
    }
}
main();
