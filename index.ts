//// Import the inquirer package,
import inquirer from "inquirer";

//build a prompt to collect user information for signing in.

const signIn = await inquirer.prompt([
  // Prompt the user to enter their username.
  {
    type: "input",
    name: "username",
    message: "enter your username",
  },
  // Prompt the user to enter their password.
  {
    type: "number",
    name: "password",
    message: "enter your password",
  },
  // Prompt the user to enter their email
  {
    type: "string",
    name: "email",
    message: "enter your email",
  },
  // Prompt the user to select their profession from a list of options.
  {
    type: "list",
    name: "profession",
    message: "select your profession",
    choices: ["software-Engineer", "student", "Developer", "UI/UX Designer"],
  },
]);

//simply Log the user's input to the console
console.log(signIn);
