import engine from '../index';
import generateRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => ((num % 2) === 0);

const generateDataForGame = () => {
  const question = generateRandomNumber(1, 100);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';
  const result = [question, rigthAnswer];
  return result;
};

const startEvenGame = () => {
  engine(generateDataForGame, gameDescription);
};

export default startEvenGame;
