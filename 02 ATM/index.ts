#!/usr/bin/env node


import inquirer from 'inquirer';

interface users {
    id: string;
    pin: string;
    balance: number;
}

function atm(): users {
    const id = `user${Math.floor(Math.random() * 1000)}`;
    const pin = `${Math.floor(Math.random() * 9000) + 1000}`;
    const balance = Math.floor(Math.random() * 10000);
    return { id, pin, balance };
}

const costomer: users[] = Array.from({ length: 10 }, atm);

async function main() {
    const { userId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'userId',
            message: 'Enter your ATM ID:',
        },
    ]);

    const costomers = costomer.find((v) => v.id === userId);

    if (!costomers) {
        console.log('Invalid user ID');
        return;
    }

    const { pin } = await inquirer.prompt([
        {
            type: 'password',
            name: 'pin',
            message: 'Enter your secret PIN:',
            mask: '*',
        },
    ]);

    if (pin !== costomers.pin) {
        console.log('Invalid PIN');
        return;
    }

    console.log(`Welcome, ${costomers.id}! Your current balance is $${costomers.balance}.`);
}

main();
