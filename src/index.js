import readlineSync from 'readline-sync';

const answersForWin = 3;

// engine
let question;
let resultForThisRoundInString;
let countOfCorrectAnswers = 0;
let playerName;

const engine = () => {
  console.log(question);
  const playerAnswered = readlineSync.question('Your answer: ');
  if (playerAnswered === resultForThisRoundInString) {
    console.log('Correct!');
    countOfCorrectAnswers += 1;
  } else {
    console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${resultForThisRoundInString}'.`);
    console.log(`Let's try again, ${playerName}!`);
  }
};

// end of engine


const giveRandomNuber = (minimal, maximal) => {
  const minInteger = Math.ceil(minimal);
  const maxInteger = Math.floor(maximal);
  return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
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


const playerGreeting = () => {
  playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
};

const giveNOD = (x, y) => {
  if (y > x) return giveNOD(y, x);
  if (!y) return x;
  return giveNOD(y, x % y);
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


const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');

// brain-even

export const brainEvenGame = () => {
  let numForGame;


  playerGreeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  while (countOfCorrectAnswers < answersForWin) {
    numForGame = giveRandomNuber(1, 100);
    resultForThisRoundInString = String(isEven(numForGame));
    question = `Question: ${numForGame}`;

    engine(question, countOfCorrectAnswers, playerName);
  }
  console.log(`Congratulations, ${playerName}!`);
};

// brain-calc

export const brainCalcGame = () => {
  let firstRandomeNumber;
  let secondRandomNumber;
  let randomOperatorInString;

  playerGreeting();

  console.log('What is the result of the expression?');

  while (countOfCorrectAnswers < answersForWin) {
    firstRandomeNumber = giveRandomNuber(1, 100);
    secondRandomNumber = giveRandomNuber(1, 100);
    randomOperatorInString = giveRandomOperatorInString();
    // eslint-disable-next-line max-len
    resultForThisRoundInString = String(calculation(firstRandomeNumber, secondRandomNumber, randomOperatorInString));
    question = `Question: ${firstRandomeNumber} ${randomOperatorInString} ${secondRandomNumber}`;

    engine();
  }
  console.log(`Congratulations, ${playerName}!`);
};

// brain-gcd

export const brainGcdGame = () => {
  let firstRandomeNumber;
  let secondRandomNumber;

  playerGreeting();
  console.log('Find the greatest common divisor of given numbers.');

  while (countOfCorrectAnswers < answersForWin) {
    firstRandomeNumber = giveRandomNuber(1, 100);
    secondRandomNumber = giveRandomNuber(1, 100);
    resultForThisRoundInString = String(giveNOD(firstRandomeNumber, secondRandomNumber));
    question = `Question: ${firstRandomeNumber} ${secondRandomNumber}`;

    engine();
  }
  console.log(`Congratulations, ${playerName}!`);
};

// brain-progression

export const brainProgressionGame = () => {
  let randomProgression;
  let randomIndexOfArr;

  playerGreeting();
  console.log('What number is missing in the progression?');

  while (countOfCorrectAnswers < answersForWin) {
    randomProgression = giveRandomProgression(giveRandomNuber(5, 15), 10);
    randomIndexOfArr = giveRandomIndexOfArr(randomProgression);
    resultForThisRoundInString = String(randomProgression[randomIndexOfArr]);
    randomProgression[randomIndexOfArr] = '..';
    question = `Question: ${randomProgression}`;

    engine();
  }
  console.log(`Congratulations, ${playerName}!`);
};

// brain-prime

export const brainIsPrimeGame = () => {
  let randomNumber;

  playerGreeting();
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
    question = `Question: ${randomNumber}`;

    engine();
  }
  console.log(`Congratulations, ${playerName}!`);
};

// make the choice function >>>>>>

export const chooseTheGame = () => {
  const listOfGames = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];
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
