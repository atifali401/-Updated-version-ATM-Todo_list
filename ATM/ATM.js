#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
//tsk 1 if else use ho ga agr withdraw 50000se ziada ho ga tu wo message de ga insufficient balance
//task 2  use template literals
let myBalance = 12000; //dollar
let myPin = 4321;
console.log(chalk.bgRed.bold.underline("\n'ATM MACHINE'"));
//Enter your pin 
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.greenBright("\n Enter your pin(4 digits)?"),
        type: "number",
    },
]);
// Pin code is correct 
if (pinAns.pin === myPin) {
    console.log(chalk.bgGreen("Correct pincode!"));
    console.log(chalk.gray("\n*-------------------------------*"));
    //Choose option 
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellow("\n Choose an option"),
            type: "list",
            choices: ["withdraw", "Check balance"],
        },
    ]);
    // if we select withdraw option 
    if (operationAns.operation === "withdraw") {
        //amount select 
        let withdrawNumber = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow("\n Choose your amount:"),
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000", "20000"]
            },
        ]);
        //amount <=5000
        if (withdrawNumber.amount <= 5000) {
            myBalance -= withdrawNumber.amount;
            console.log(chalk.green(`You withdraw ${withdrawNumber.amount}`));
            console.log(chalk.green(`The remaining amount is:  ${myBalance}`));
            console.log(chalk.gray("\n *---------------------------------------*"));
        } //amount > 5000
        else if (withdrawNumber.amount > 12000) {
            console.log(chalk.red("Insufficient balance!/ Teri maa chora k gaie ti ya Baap!"));
            console.log(chalk.gray("\n **==================================**"));
        }
    }
    //if we select check balance 
    else if (operationAns.operation === "check balance") {
        console.log(chalk.green(`Total amount is:  ${myBalance}`));
        console.log(chalk.gray("\n *-----------------------------------*"));
    }
}
//if pin code is incorrect 
else {
    console.log(chalk.red("Oops! Incorrect pincode"));
    console.log(chalk.gray("\n **=======================================**"));
}
