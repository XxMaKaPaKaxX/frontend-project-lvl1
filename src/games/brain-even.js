import engine from '../index';
import giveRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => ((num % 2) === 0);

const giveDataForGame = () => {
  const question = giveRandomNumber(1, 100);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';
  const result = [question, rigthAnswer];
  return result;
};

const brainEvenGame = () => {
  engine(giveDataForGame, gameDescription);
};

export default brainEvenGame;
