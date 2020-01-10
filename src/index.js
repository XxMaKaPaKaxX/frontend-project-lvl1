import readlineSync from 'readline-sync';

const answersForWin = 3;

const giveRandomNuber = (minimal, maximal) => {
  const min = Math.ceil(minimal);
  const max = Math.floor(maximal);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

const calculation = (firstNumber, secondNumber, operator) => {
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
  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
};

const giveNode = (x, y) => {
  if (y > x) return giveNode(y, x);
  if (!y) return x;
  return giveNode(y, x % y);
};

const giveRandomProgression = (commonDiference, progressionLength) => {
  const progressionArr = [giveRandomNuber(1, 10)];
  let newElement;
  while (progressionArr.length < progressionLength) {
    newElement = progressionArr[progressionArr.length - 1] + commonDiference;
    progressionArr.push(newElement);
  }
  return progressionArr;
};

const giveRandomIndexOfArr = (arr) => giveRandomNuber(0, arr.length - 1);


export const brainEvenGame = () => {
  const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');
  let countOfCorrectAnswers = 0;
  let numForGame;

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  while (countOfCorrectAnswers < answersForWin) {
    numForGame = giveRandomNuber(1, 100);
    console.log(`Question: ${numForGame}`);
    const playerAnswered = readlineSync.question('Your answer: ');
    if (playerAnswered === isEven(numForGame)) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log('No, try again');
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export const brainCalcGame = () => {
  let countOfCorrectAnswers = 0;

  let firstRandomeNumber;
  let secondRandomNumber;
  let randomOperatorInString;
  let resultForThisRoundInString;

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log('What is the result of the expression?');

  while (countOfCorrectAnswers < answersForWin) {
    firstRandomeNumber = giveRandomNuber(1, 100);
    secondRandomNumber = giveRandomNuber(1, 100);
    randomOperatorInString = giveRandomOperatorInString();
    // eslint-disable-next-line max-len
    resultForThisRoundInString = String(calculation(firstRandomeNumber, secondRandomNumber, randomOperatorInString));
    console.log(`Question: ${firstRandomeNumber} ${randomOperatorInString} ${secondRandomNumber}`);
    const playerAnswered = readlineSync.question('Your answer: ');
    if (resultForThisRoundInString === playerAnswered) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${resultForThisRoundInString}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export const brainGcdGame = () => {
  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let firstRandomeNumber;
  let secondRandomNumber;
  let countOfCorrectAnswers = 0;
  let resultForThisRoundInString;

  while (countOfCorrectAnswers < answersForWin) {
    firstRandomeNumber = giveRandomNuber(1, 100);
    secondRandomNumber = giveRandomNuber(1, 100);
    resultForThisRoundInString = String(giveNode(firstRandomeNumber, secondRandomNumber));
    console.log(`Question: ${firstRandomeNumber} ${secondRandomNumber}`);
    const playerAnswered = readlineSync.question('Your answer: ');
    if (resultForThisRoundInString === playerAnswered) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${resultForThisRoundInString}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export const brainProgressionGame = () => {
  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log('What number is missing in the progression?');

  let randomProgression;
  let randomIndexOfArr;
  // let resultForThisRoundinString;
  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers < answersForWin) {
    randomProgression = giveRandomProgression(giveRandomNuber(5, 15), 10);
    randomIndexOfArr = giveRandomIndexOfArr(randomProgression);
    const resultForThisRoundInString = String(randomProgression[randomIndexOfArr]);
    randomProgression[randomIndexOfArr] = '..';


    console.log(`Question: ${randomProgression}`);
    const playerAnswered = readlineSync.question('Your answer: ');
    if (resultForThisRoundInString === playerAnswered) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${resultForThisRoundInString}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export const brainIsPrimeGame = () => {
  let countOfCorrectAnswers = 0;

  let randomNumber;
  let resultForThisRoundInString;

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const isPrime = (numb) => {
    for (let i = 2; i < numb; i += 1) {
      if (numb % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  while (countOfCorrectAnswers < answersForWin) {
    randomNumber = giveRandomNuber(1, 100);
    resultForThisRoundInString = isPrime(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const playerAnswered = readlineSync.question('Your answer: ');
    if (resultForThisRoundInString === playerAnswered) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${resultForThisRoundInString}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

// make the choice function >>>>>>

const listOfGames = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];

export const chooseTheGame = () => {
  const indexOFGame = readlineSync.keyInSelect(listOfGames, 'Which game would you like to play?');
  const gameForPlay = listOfGames[indexOFGame];
  if (gameForPlay === 'brain-even') {
    return brainEvenGame();
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
