import giveRandomNuber from '../index';

import engine from '../engine';

const gameRules = 'What is the result of the expression?';

const giveRandomOperatorInString = () => {
  const randomNumber = giveRandomNuber(1, 3);
  let operator;
  if (randomNumber === 1) {
    operator = '+';
  }
  if (randomNumber === 2) {
    operator = '-';
  }
  if (randomNumber === 3) {
    operator = '*';
  }
  return operator;
};

const calculation = (firstNumber, operator, secondNumber) => {
  let result;
  if (operator === '+') {
    result = Number(firstNumber) + Number(secondNumber);
  }
  if (operator === '-') {
    result = Number(firstNumber) - Number(secondNumber);
  }
  if (operator === '*') {
    result = Number(firstNumber) * Number(secondNumber);
  }
  return String(result);
};

const brainCalcGame = () => {
  const gamePreparing = () => {
    const randomeNumber1 = giveRandomNuber(1, 100);
    const randomNumber2 = giveRandomNuber(1, 100);
    const randomOperatorInString = giveRandomOperatorInString();
    const forQuestion = `${randomeNumber1} ${randomOperatorInString} ${randomNumber2}`;
    const rigthAnswere = calculation(randomeNumber1, randomOperatorInString, randomNumber2);
    const result = [forQuestion, rigthAnswere];
    return result;
  };

  engine(gamePreparing, gameRules);
};

export default brainCalcGame;
