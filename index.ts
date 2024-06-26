import inquirer from 'inquirer';

// Define the questions
const teaOrder = await inquirer.prompt([
  {
    type: 'list',
    name: 'teaType',
    message: 'What type of tea would you like?',
    choices: ['Green Tea', 'Black Tea', 'Herbal Tea', 'Oolong Tea']
  },
  {
    type: 'list',
    name: 'sweetnessLevel',
    message: 'How sweet do you want your tea?',
    choices: ['No Sugar', '1 Spoon of Sugar', '2 Spoons of Sugar', 'Honey']
  },
  {
    type: 'checkbox',
    name: 'extras?',
    message: 'Any extras',
    choices: ['Lemon', 'Mint', 'Ginger', 'Milk']
  }
]);
console.log('\nYour Tea Order:');
console.log(`type of tea: ${teaOrder.teaType}`)
console.log(`sweetness Level: ${teaOrder.sweetnessLevel}`)
if (teaOrder.extras && teaOrder.extras.length > 0) {
  console.log(`Extras: ${teaOrder.extras.join(', ')}`);
} else {
  console.log('Extras: None');
}