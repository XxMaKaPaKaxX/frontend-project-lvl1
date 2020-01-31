import { giveRandomNuber, giveNOD } from '../index';

import engine from '../engine';


const brainGcdGame = () => {
  const getQuestion = () => {
    const firstRandomeNumber = giveRandomNuber(1, 100);
    const secondRandomNumber = giveRandomNuber(1, 100);

    const forQuestion = `${firstRandomeNumber} ${secondRandomNumber}`;
    return forQuestion;
  };

  const getResultForThisRoundInString = (forQuestion) => {
    const arrFromArgumentForCalc = forQuestion.split(' ');
    const result = String(giveNOD(arrFromArgumentForCalc));
    return result;
  };

  const gameRules = 'Find the greatest common divisor of given numbers.';

  engine(getQuestion, getResultForThisRoundInString, gameRules);
};

export default brainGcdGame;
