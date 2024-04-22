#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.94,
    GBP: 0.81,
    INR: 83.38,
    PKR: 278.54,
    QAT: 3.64,
    JAP: 154.78
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: " Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "QAT", "JAP"]
    },
    {
        name: "To",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "QAT", "JAP"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
