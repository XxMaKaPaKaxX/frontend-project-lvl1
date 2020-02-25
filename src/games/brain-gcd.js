import giveRandomNumber from '../utils';

import engine from '../index';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const giveGCD = (x, y) => {
  if (y > x) return giveGCD(y, x);
  if (!y) return x;
  return giveGCD(y, x % y);
};

const giveDataForGame = () => {
  const firstRandomNumber = giveRandomNumber(1, 100);
  const secondRandomNumber = giveRandomNumber(1, 100);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const rigthAnswer = String(giveGCD(firstRandomNumber, secondRandomNumber));
  const result = [question, rigthAnswer];
  return result;
};

const brainGcdGame = () => {
  engine(giveDataForGame, gameDescription);
};

export default brainGcdGame;
