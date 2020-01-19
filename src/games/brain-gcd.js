import {
  giveRandomNuber, playerGreeting, giveNOD,
} from '../index';

import engine from '../engine';

const answersForWin = 3;


let question;
let resultForThisRoundInString;
let countOfCorrectAnswers = 0;
let playerName;


const brainGcdGame = () => {
  let firstRandomeNumber;
  let secondRandomNumber;

  playerGreeting();

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
