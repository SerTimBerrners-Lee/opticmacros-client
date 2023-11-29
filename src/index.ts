#!/usr/bin/env node

import { program } from 'commander';
import readline from 'readline';
import Sendler from './methods';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

program
  .version('1.0.0')
  .description('Opticmacros Client');

program
  .command('auth <login> <password>')
  .description('User Authorization')
  .action(Sendler.fetchAuth);

program
  .command('get-cars')
  .description('Get list of cars')
  .action(Sendler.fetchGetCars);

program
  .command('add-car')
  .description('Add a new car -b <brand> -m <model> -y <year> -p <price>')
  .usage('<options> --brand <brand> --model <model> --year <year> --price <price>')
  .requiredOption('-b, --brand <brand>', 'Brand of the car')
  .requiredOption('-m, --model <model>', 'Model of the car')
  .requiredOption('-y, --year <year>', 'Year of the car')
  .requiredOption('-p, --price <price>', 'Price of the car')
  .action(Sendler.fetchAddCar);

program
  .command('update-car <carId>')
  .description('Update a car -b <brand> -m <model> -y <year> -p <price>') 
  .requiredOption('-b, --brand <brand>', 'Brand of the car')
  .requiredOption('-m, --model <model>', 'Model of the car')
  .requiredOption('-y, --year <year>', 'Year of the car')
  .requiredOption('-p, --price <price>', 'Price of the car')
  .action(Sendler.fetchUpdateCar);

program
  .command('delete-car <carId>')
  .description('Delete a car')
  .action(Sendler.fetchDeleteCar);


const prompt = () => {
  rl.question(`Please input a command: `, (answer) => {

    if (answer.trim() === '') {
      console.log(program.helpInformation());
      prompt();
      return;
    }

    try {
      program.parseAsync(['', '', ...answer.split(' ')]).then(() => {
        prompt();
      });
    } catch (err) {
      console.error('catch prompt error: ', err);
      console.log(program.helpInformation());
      prompt();
    }
  });
}

program.on('command:*', (operands) => {
  console.error(`error: unknown command '${operands[0]}'`);
  console.log(program.helpInformation());
  prompt();
});

if (process.argv.length <= 2) {
  console.log(program.helpInformation());
  prompt();
} else {
  program.parseAsync(process.argv);
}