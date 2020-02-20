import giveRandomNuber from '../utils';

import engine from '../index';

const gameRules = 'What is the result of the expression?';

const giveRandomOperatorInString = () => {
  const operatorsList = ['+', '-', '*'];
  const randomNumber = giveRandomNuber(1, operatorsList.length);
  return operatorsList[randomNumber - 1];
};

const calculation = (firstNumber, operator, secondNumber) => {
  let result;

  switch (operator) {
    case '+':
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case '*':
      result = Number(firstNumber) * Number(secondNumber);
      break;
    default:
      console.log('Unknow operator');
  }
  return String(result);
};

const gamePreparing = () => {
  const randomeNumber1 = giveRandomNuber(1, 100);
  const randomNumber2 = giveRandomNuber(1, 100);
  const randomOperatorInString = giveRandomOperatorInString();
  const forQuestion = `${randomeNumber1} ${randomOperatorInString} ${randomNumber2}`;
  const rigthAnswere = calculation(randomeNumber1, randomOperatorInString, randomNumber2);
  const result = [forQuestion, rigthAnswere];
  return result;
};

const brainCalcGame = () => {
  engine(gamePreparing, gameRules);
};

export default brainCalcGame;
