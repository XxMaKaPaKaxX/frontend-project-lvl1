import readlineSync from 'readline-sync';

export const playerGreeting = () => {
  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
};

export const brainEvenGame = () => {
  const givRandomNumb = () => Math.floor(Math.random() * 100 + 1);
  const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');
  let countOfCorrectAnswers = 0;
  let numForGame;

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  while (countOfCorrectAnswers < 3) {
    numForGame = givRandomNumb();
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
