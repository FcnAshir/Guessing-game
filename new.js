import inquirer from "inquirer";
console.log("Welcome To Syed Ashir Game");
const random = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([{
        name: "AShir",
        type: "number",
        message: "Please guess the number between 1_9"
    }]);
if (answer.AShir === random) {
    console.log("Congratulation you guess a write number");
}
else {
    console.log("You guess a wrong number ");
}
;
