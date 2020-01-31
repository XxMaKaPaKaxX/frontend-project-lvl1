import { giveRandomNuber, calculation, giveRandomOperatorInString } from '../index';

import engine from '../engine';

const brainCalcGame = () => {
  const getQuestion = () => {
    const firstRandomeNumber = giveRandomNuber(1, 100);
    const secondRandomNumber = giveRandomNuber(1, 100);
    const randomOperatorInString = giveRandomOperatorInString();
    const forQuestion = `${firstRandomeNumber} ${randomOperatorInString} ${secondRandomNumber}`;
    return forQuestion;
  };

  const getResultForThisRoundInString = (forQuestion) => {
    const arrFromArgumentForCalc = forQuestion.split(' ');
    const result = calculation(arrFromArgumentForCalc);
    return result;
  };

  const gameRules = 'What is the result of the expression?';
  engine(getQuestion, getResultForThisRoundInString, gameRules);
};

export default brainCalcGame;
