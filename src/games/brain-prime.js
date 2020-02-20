import giveRandomNuber from '../utils';
import engine from '../index';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const gamePreparing = () => {
  const randomeNumber = giveRandomNuber(1, 100);
  const forQuestion = `${randomeNumber}`;
  const rigthAnswer = isPrime(randomeNumber) ? 'yes' : 'no';
  const result = [forQuestion, rigthAnswer];
  return result;
};

const brainIsPrimeGame = () => {
  engine(gamePreparing, gameRules);
};

export default brainIsPrimeGame;
