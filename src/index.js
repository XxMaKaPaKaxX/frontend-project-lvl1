import readlineSync from 'readline-sync';
import brainEvenGame from './games/brain-even';
import brainCalcGame from './games/brain-calc';
import brainGcdGame from './games/brain-gcd';
import brainIsPrimeGame from './games/brain-prime';
import brainProgressionGame from './games/brain-progresiion';

const answersForWin = 3;
let playerName;


export const giveRandomNuber = (minimalRandomNumber, maximalRandomNumber) => {
  const minInteger = Math.ceil(minimalRandomNumber);
  const maxInteger = Math.floor(maximalRandomNumber);
  return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
};

export const giveRandomOperatorInString = () => {
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

export const calculation = (firstNumber, secondNumber, operator) => {
  let result;
  if (operator === '+') {
    result = firstNumber + secondNumber;
  }
  if (operator === '-') {
    result = firstNumber - secondNumber;
  }
  if (operator === '*') {
    result = firstNumber * secondNumber;
  }
  return result;
};


export const playerGreeting = () => {
  playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
};

export const giveNOD = (x, y) => {
  if (y > x) return giveNOD(y, x);
  if (!y) return x;
  return giveNOD(y, x % y);
};

export const giveRandomProgression = (commonDiference, progressionLength) => {
  const progressionArr = [giveRandomNuber(1, 10)];
  let newElement;
  while (progressionArr.length < progressionLength) {
    newElement = progressionArr[progressionArr.length - 1] + commonDiference;
    progressionArr.push(newElement);
  }
  return progressionArr;
};

export const giveRandomIndexOfArr = (arr) => giveRandomNuber(0, arr.length - 1);


export const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');

export const isPrime = (numb) => {
  for (let i = 2; i < numb; i += 1) {
    if (numb % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};


// make the choice of game function >>>>>>

export const chooseTheGame = () => {
  console.log('Welcome to the Brain Games!');

  const listOfGames = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];
  const indexOFGame = readlineSync.keyInSelect(listOfGames, 'Which game would you like to play?');
  const gameForPlay = listOfGames[indexOFGame];

  if (gameForPlay === 'brain-even') {
    return brainEvenGame(playerName, answersForWin);
  }
  if (gameForPlay === 'brain-gcd') {
    return brainGcdGame();
  }
  if (gameForPlay === 'brain-progression') {
    return brainProgressionGame();
  }
  if (gameForPlay === 'brain-prime') {
    return brainIsPrimeGame();
  }
  return brainCalcGame();
};
