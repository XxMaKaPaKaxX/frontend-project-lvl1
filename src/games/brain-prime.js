import { giveRandomNuber, isPrime } from '../index';
import engine from '../engine';

const brainIsPrimeGame = () => {
  const getQuestion = () => {
    const randomeNumber = giveRandomNuber(1, 100);
    const forQuestion = `${randomeNumber}`;
    return forQuestion;
  };

  const getResultForThisRoundInString = (forQuestion) => {
    const arg = Number(forQuestion);
    const result = isPrime(arg);
    return result;
  };

  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  engine(getQuestion, getResultForThisRoundInString, gameRules);
};

export default brainIsPrimeGame;
