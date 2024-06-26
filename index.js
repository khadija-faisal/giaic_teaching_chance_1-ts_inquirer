import inquirer from "inquirer";
const signIn = await inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "enter your username",
    },
    {
        type: "number",
        name: "password",
        message: "enter your password",
    },
    {
        type: "string",
        name: "email",
        message: "enter your email",
    },
    {
        type: "list",
        name: "profession",
        message: "select your profession",
        choices: ["software-Engineer", "student", "Developer", "UI/UX Designer"],
    },
]);
console.log(signIn);
