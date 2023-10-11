#!/usr/bin/env node

import  inquirer from 'inquirer';

async function main() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'paragraph',
            message: 'Please enter a paragraph:',
        },
    ]);

    const paragraph = response.paragraph;

    
    const Count = paragraph.replace(/\s/g, '').length;

    
    const words = paragraph.split(/\s+/);
    const wordCount = words.length;

    console.log(`Character count (excluding whitespaces): ${Count}`);
    console.log(`The Word count is: ${wordCount}`);
}

main();