#!/usr/bin/env node

import inquirer from 'inquirer';

class Currency {
    rates: {[key: string]: number};

    constructor(rates: {[key: string]: number}) {
        this.rates = rates;
    }

    convert(amount: number, fromCurrency: string, toCurrency: string): number {
        const Rate = this.rates[fromCurrency];
        const rate = this.rates[toCurrency];
        return amount * rate / Rate;
    }
}


const rates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.76,
    PKR: 300
};

const converter = new Currency(rates);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'amount',
            message: 'Enter the amount of money you want to convert:',
            validate: (input) => {
                const parsedInput = parseFloat(input);
                if (isNaN(parsedInput)) {
                    return 'Enter a valid number';
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'fromCurrency',
            message: 'Select the currency:',
            choices: Object.keys(rates)
        }
    ])
    .then(ans => {
        const amount = parseFloat(ans.amount);
        const fromCurrency = ans.fromCurrency;
        const toCurrency = 'PKR';

        const convertedAmount = converter.convert(amount, fromCurrency, toCurrency);

        console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
    });
