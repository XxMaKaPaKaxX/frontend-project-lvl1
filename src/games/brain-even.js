import engine from '../engine';
import { isEven, giveRandomNuber } from '../index';

const brainEvenGame = () => {
  const getForQuetion = () => giveRandomNuber(1, 100);

  const getResultForThisRoundInString = (arg) => String(isEven(arg));

  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

  engine(getForQuetion, getResultForThisRoundInString, gameRules);
};
export default brainEvenGame;
