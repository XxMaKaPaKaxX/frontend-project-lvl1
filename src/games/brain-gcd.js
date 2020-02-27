import generateRandomNumber from '../utils';

import engine from '../index';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (y > x) return getGCD(y, x);
  if (!y) return x;
  return getGCD(y, x % y);
};

const generateDataForGame = () => {
  const firstRandomNumber = generateRandomNumber(1, 100);
  const secondRandomNumber = generateRandomNumber(1, 100);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const rigthAnswer = String(getGCD(firstRandomNumber, secondRandomNumber));
  const result = [question, rigthAnswer];
  return result;
};

const startGcdGame = () => {
  engine(generateDataForGame, gameDescription);
};

export default startGcdGame;
