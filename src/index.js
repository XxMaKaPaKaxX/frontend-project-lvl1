import readlineSync from 'readline-sync';


const giveRandomNuber = (minimal, maximal) => {
  const min = Math.ceil(minimal);
  const max = Math.floor(maximal);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const playerGreeting = () => {
  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
};

export const brainEvenGame = () => {
  const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');
  let countOfCorrectAnswers = 0;
  let numForGame;

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  while (countOfCorrectAnswers < 3) {
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
  const giveRandomOperatorInString = () => {
    const randomNumber = giveRandomNuber(1, 3);
    if (randomNumber === 1) {
      return '+';
    }
    if (randomNumber === 2) {
      return '-';
    }
    if (randomNumber === 3) {
      return '*';
    }
  };

  const calculation = (firstNumber, secondNumber, operator) => {
    if (operator === '+') {
      return firstNumber + secondNumber;
    }
    if (operator === '-') {
      return firstNumber - secondNumber;
    }
    if (operator === '*') {
      return firstNumber * secondNumber;
    }
  };

  let firstRandomeNumber;
  let secondRandomNumber;
  let randomOperatorInString;
  let resultForThisRoundInString;

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log('What is the result of the expression?');

  while (countOfCorrectAnswers < 3) {
    firstRandomeNumber = giveRandomNuber(1, 100);
    secondRandomNumber = giveRandomNuber(1, 100);
    randomOperatorInString = giveRandomOperatorInString();
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

// make the choice function >>>>>>
