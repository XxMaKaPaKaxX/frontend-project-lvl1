import readlineSync from 'readline-sync';
import {
  giveRandomNuber, playerGreeting, giveNOD,
} from '../index';

import engine from '../engine';

const answersForWin = 3;


const brainGcdGame = () => {
  let firstRandomeNumber;
  let secondRandomNumber;
  let question;
  let resultForThisRoundInString;
  let countOfCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  while (countOfCorrectAnswers < answersForWin) {
    firstRandomeNumber = giveRandomNuber(1, 100);
    secondRandomNumber = giveRandomNuber(1, 100);
    resultForThisRoundInString = String(giveNOD(firstRandomeNumber, secondRandomNumber));
    question = `Question: ${firstRandomeNumber} ${secondRandomNumber}`;

    if (engine(question, resultForThisRoundInString, playerName) === true) {
      countOfCorrectAnswers += 1;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default brainGcdGame;
