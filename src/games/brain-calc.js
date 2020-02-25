import giveRandomNumber from '../utils';

import engine from '../index';

const gameDescription = 'What is the result of the expression?';

const giveRandomOperator = () => {
  const operatorsList = ['+', '-', '*'];
  const randomNumber = giveRandomNumber(1, operatorsList.length);
  return operatorsList[randomNumber - 1];
};

const calculate = (firstNumber, operator, secondNumber) => {
  let result;

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      return null;
  }
  return result;
};

const giveDataForGame = () => {
  const randomNumber1 = giveRandomNumber(1, 100);
  const randomNumber2 = giveRandomNumber(1, 100);
  const randomOperator = giveRandomOperator();
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const rigthAnswer = String(calculate(randomNumber1, randomOperator, randomNumber2));
  const result = [question, rigthAnswer];
  return result;
};

const brainCalcGame = () => {
  engine(giveDataForGame, gameDescription);
};

export default brainCalcGame;
