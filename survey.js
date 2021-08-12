const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable ?', (answer1) => {
  rl.question("What's  an activity you like doing", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              process.stdout.write(`  My name is ${answer1}.`);
              process.stdout.write(`My favourite activity is ${answer2}.`)
              process.stdout.write(`I love listening to ${answer3} when I am ${answer2}.\n`);
              process.stdout.write(`My favourite meal is ${answer4}.`);
              process.stdout.write(`I love eating ${answer5} for ${answer4}.`);
              process.stdout.write(`My favourite sport is ${answer6}.`)
              process.stdout.write(`My superpower is  ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});











