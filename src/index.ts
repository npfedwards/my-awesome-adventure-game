import * as readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Hello World!');

const input = await rl.question('What is your name? ');
console.log('Hello ' + input + '!');

rl.close();
console.log('Thanks for playing!');
