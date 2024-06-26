import inquirer from 'inquirer';
console.log('Wellcome to GIAIC');
let result = inquirer.prompt({
    name: 'topic',
    message: 'Which Topic you want to learn?',
    type: 'list',
    choices: ['types', 'enums', 'inquirer']
});
console.log(result);
