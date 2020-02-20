import giveRandomNuber from '../utils';

import engine from '../index';

const gameRules = 'Find the greatest common divisor of given numbers.';

const giveNOD = (x, y) => {
  if (y > x) return giveNOD(y, x);
  if (!y) return x;
  return giveNOD(y, x % y);
};

const gamePreparing = () => {
  const firstRandomeNumber = giveRandomNuber(1, 100);
  const secondRandomNumber = giveRandomNuber(1, 100);

  const forQuestion = `${firstRandomeNumber} ${secondRandomNumber}`;
  const rigthAnswer = String(giveNOD(firstRandomeNumber, secondRandomNumber));
  const result = [forQuestion, rigthAnswer];
  return result;
};

const brainGcdGame = () => {
  engine(gamePreparing, gameRules);
};

export default brainGcdGame;
