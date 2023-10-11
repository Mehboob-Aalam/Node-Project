#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';

interface Student {
    name: string;
    id: string;
    courses: string[];
    fees: number;
}

const students: Student[] = [];

async function main() {
    console.log(chalk.yellow('Student Management System'));

    while (true) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'Choose an option:',
            choices: ['Addmission Student', 'Enroll in Course', 'View fees', 'Pay Tuition', 'Show Status', 'Exit'],
        });

        if (action === 'Addmission Student') {
            const studentName = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter student name:',
            });

            const student: Student = {
                id: generateStudentID(),
                name: studentName.name,
                courses: [],
                fees: 0,
            };

            students.push(student);
            console.log(chalk.blue(`Student ${student.name} added with ID: ${student.id}`));
        } else if (action === 'Enroll in Course') {
            console.log("/nWeb design/nWeb 2.0/nWeb 3.0/n");
            
        } else if (action === 'View fees') {
            console.log("Your balance is active ");
            
        } else if (action === 'Pay Tuition') {
            console.log("Your pay tuition is 1000");
            
        } else if (action === 'Show Status') {
           console.log("Your status is active");
           
        } else if (action === 'Exit') {
            console.log(chalk.yellow('Exiting Student Management System.'));
            break;
        }
    }
}

function generateStudentID(): string {
    const randomID = Math.floor(Math.random() * 90000) + 10000;
    return `STU${randomID}`;
}

main();
