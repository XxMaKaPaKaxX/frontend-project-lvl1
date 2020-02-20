import engine from '../index';
import giveRandomNuber from '../utils';


const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => ((num % 2) === 0);


const gamePreparing = () => {
  const forQuetion = giveRandomNuber(1, 100);
  const rigthAnswere = isEven(forQuetion) ? 'yes' : 'no';
  const result = [forQuetion, rigthAnswere];
  return result;
};

const brainEvenGame = () => {
  engine(gamePreparing, gameRules);
};

export default brainEvenGame;
