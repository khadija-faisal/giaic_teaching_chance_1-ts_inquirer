//// Import the inquirer package,
import inquirer from "inquirer";
//build a prompt to collect user information for signing in.
const signIn = await inquirer.prompt([
    // Prompt the user to enter their email.
    {
        type: "input",
        name: "email",
        message: "enter your email",
    },
    // Prompt the user to enter their password.
    {
        type: "number",
        name: "password",
        message: "enter your password",
    },
    // Prompt the user to select their profession from a list of options.
    {
        type: "checkbox",
        name: "profession",
        message: "select your profession",
        choices: ["Admin", "Teacher", "student"],
    },
]);
// //simply Log the user's input to the console
console.log(signIn);
