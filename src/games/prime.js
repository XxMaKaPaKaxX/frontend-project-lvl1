import generateRandomNumber from '../utils';
import engine from '../index';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
  if (numb <= 2) {
    return false;
  }
  for (let i = 2; i < numb / 2; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = randomNumber.toString();
  const rigthAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const result = [question, rigthAnswer];
  return result;
};

const startPrimeGame = () => {
  engine(generateGameData, gameDescription);
};

export default startPrimeGame;
