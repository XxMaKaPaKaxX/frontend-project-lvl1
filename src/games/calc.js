import generateRandomNumber from '../utils';

import engine from '../index';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomNumber = generateRandomNumber(1, operators.length);
  return operators[randomNumber - 1];
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

const generateGameData = () => {
  const randomNumber1 = generateRandomNumber(1, 100);
  const randomNumber2 = generateRandomNumber(1, 100);
  const randomOperator = getRandomOperator();
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const rigthAnswer = String(calculate(randomNumber1, randomOperator, randomNumber2));
  const result = [question, rigthAnswer];
  return result;
};

const startCalcGame = () => {
  engine(generateGameData, gameDescription);
};

export default startCalcGame;
