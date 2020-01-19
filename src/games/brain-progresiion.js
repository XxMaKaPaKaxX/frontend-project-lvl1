
import {
  giveRandomNuber, playerGreeting, giveRandomProgression, giveRandomIndexOfArr,
} from '../index';
import engine from '../engine';

const answersForWin = 3;


let question;
let resultForThisRoundInString;
let countOfCorrectAnswers = 0;
let playerName;

const brainProgressionGame = () => {
  let randomProgression;
  let randomIndexOfArr;

  playerGreeting();

  console.log('What number is missing in the progression?');

  while (countOfCorrectAnswers < answersForWin) {
    randomProgression = giveRandomProgression(giveRandomNuber(5, 15), 10);
    randomIndexOfArr = giveRandomIndexOfArr(randomProgression);
    resultForThisRoundInString = String(randomProgression[randomIndexOfArr]);
    randomProgression[randomIndexOfArr] = '..';
    question = `Question: ${randomProgression}`;

    if (engine(question, resultForThisRoundInString, playerName) === true) {
      countOfCorrectAnswers += 1;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default brainProgressionGame;
