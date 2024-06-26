//Example #1
import inquirer from 'inquirer';
async function orderCoffee() {
    // Ask for the user's name
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    });
    // Ask for the type of coffee
    const { coffeeType } = await inquirer.prompt({
        type: 'list',
        name: 'coffeeType',
        message: 'What type of coffee would you like?',
        choices: ['Espresso', 'Latte', 'Cappuccino', 'Americano'],
    });
    // Ask if they want milk
    const { milk } = await inquirer.prompt({
        type: 'confirm',
        name: 'milk',
        message: 'Do you want milk in your coffee?',
    });
    // Ask if they want sugar
    const { sugar } = await inquirer.prompt({
        type: 'confirm',
        name: 'sugar',
        message: 'Do you want sugar in your coffee?',
    });
    // Summarize the order
    console.log(`\nOrder Summary:`);
    console.log(`Name: ${name}`);
    console.log(`Coffee: ${coffeeType}`);
    console.log(`Milk: ${milk}`);
    console.log(`Sugar: ${sugar}`);
    console.log(`'\nThank you for your order!'`);
}
orderCoffee();
