import readlineSync from 'readline-sync';

export const playerGreeting = () => {
  const playerName = readlineSync.question('May I have your name?: ');
  console.log('Hello, ' + playerName + '!');
};
