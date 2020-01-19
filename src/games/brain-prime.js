import {
  giveRandomNuber, playerGreeting, isPrime,
} from '../index';
import engine from '../engine';

const answersForWin = 3;


let question;
let resultForThisRoundInString;
let countOfCorrectAnswers = 0;
let playerName;


const brainIsPrimeGame = () => {
  let randomNumber;

  playerGreeting();

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
