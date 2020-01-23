import readlineSync from 'readline-sync';
import {
  giveRandomNuber, calculation, giveRandomOperatorInString,
} from '../index';

import engine from '../engine';

const brainCalcGame = () => {
  const answersForWin = 3;
  let firstRandomeNumber;
  let secondRandomNumber;
  let randomOperatorInString;
  let question;
  let resultForThisRoundInString;
  let countOfCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

  console.log('What is the result of the expression?');

  while (countOfCorrectAnswers < answersForWin) {
    firstRandomeNumber = giveRandomNuber(1, 100);
    secondRandomNumber = giveRandomNuber(1, 100);
    randomOperatorInString = giveRandomOperatorInString();
    // eslint-disable-next-line max-len
    resultForThisRoundInString = String(calculation(firstRandomeNumber, secondRandomNumber, randomOperatorInString));
    question = `Question: ${firstRandomeNumber} ${randomOperatorInString} ${secondRandomNumber}`;

    if (engine(question, resultForThisRoundInString, playerName) === true) {
      countOfCorrectAnswers += 1;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default brainCalcGame;
