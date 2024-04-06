#! /usr/bin/env node
import inquirer from "inquirer";
// ----Explanation of Math.random + Math.floor----
//Math.random has a range of 0 to 0.9
//Math.floor will convert the decimal into exact number down eg 1.9 is 1
//Math.random() * 5 will guess the number b/w 0 to 4
//Math.random() * 5 + 1 will guess the number b/w 1 to 5
const randomNumber = Math.floor(Math.random() * 5 + 1); //Computer Generated Random Number
let userGuessedNumber = await inquirer.prompt([
    {
        name: "guess",
        type: "number",
        message: "Enter Your Guess Number B/w 1 to 5:",
    },
]);
// Now Comparing both conditions:
if (userGuessedNumber.guess === randomNumber) {
    console.log("Congratulations! You Have Guessed a Correct Number :)");
}
else {
    console.log("Bad Luck! Wrong Guess :(");
}
