
import readlineSync from 'readline-sync';
import engine from '../engine';
import { isEven, giveRandomNuber} from '../index';




const brainEvenGame = (answersForWin) => {
  let numForGame;
  let question;
  let resultForThisRoundInString;
  let countOfCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  while (countOfCorrectAnswers < answersForWin) {
    numForGame = giveRandomNuber(1, 100);
    resultForThisRoundInString = String(isEven(numForGame));
    question = `Question: ${numForGame}`;

    if (engine(question, resultForThisRoundInString, playerName) === true) {
      countOfCorrectAnswers += 1;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default brainEvenGame;
