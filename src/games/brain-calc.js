import {
  giveRandomNuber, calculation, playerGreeting, giveRandomOperatorInString,
} from '../index';
import engine from '../engine';

const answersForWin = 3;


let question;
let resultForThisRoundInString;
let countOfCorrectAnswers = 0;
let playerName;


const brainCalcGame = () => {
  let firstRandomeNumber;
  let secondRandomNumber;
  let randomOperatorInString;

  playerGreeting();

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
