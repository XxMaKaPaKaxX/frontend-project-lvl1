import readlineSync from 'readline-sync';

import {
  giveRandomNuber, playerGreeting, isPrime,
} from '../index';
import engine from '../engine';

const answersForWin = 3;

const brainIsPrimeGame = () => {
  let randomNumber;
  let question;
  let resultForThisRoundInString;
  let countOfCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (countOfCorrectAnswers < answersForWin) {
    randomNumber = giveRandomNuber(1, 100);
    resultForThisRoundInString = isPrime(randomNumber);
    question = `Question: ${randomNumber}`;

    if (engine(question, resultForThisRoundInString, playerName) === true) {
      countOfCorrectAnswers += 1;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default brainIsPrimeGame;
