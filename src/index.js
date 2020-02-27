import readlineSync from 'readline-sync';

const gameRoundsLimit = 3;

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const engine = (gameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

  console.log(gameDescription);

  for (let roundsCount = 0; roundsCount < gameRoundsLimit; roundsCount += 1) {
    const [question, rigthAnswer] = gameData();

    askQuestion(question);

    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rigthAnswer}.`);
      console.log(`Let's try again, ${[playerName]}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
export default engine;
