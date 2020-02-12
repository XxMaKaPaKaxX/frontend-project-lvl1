import giveRandomNuber from '../index';
import engine from '../engine';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
  for (let i = 2; i < numb; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};

const brainIsPrimeGame = () => {
  const gamePreparing = () => {
    const randomeNumber = giveRandomNuber(1, 100);
    const forQuestion = `${randomeNumber}`;
    const rigthAnswer = isPrime(randomeNumber) ? 'yes' : 'no';
    const result = [forQuestion, rigthAnswer];
    return result;
  };

  engine(gamePreparing, gameRules);
};

export default brainIsPrimeGame;
