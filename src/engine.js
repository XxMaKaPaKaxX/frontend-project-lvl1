import readlineSync from 'readline-sync';

const engine = (gamePreparing, gameRules) => {
  const answersForWin = 3;

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

  console.log(gameRules);

  for (let countCorrectAnswers = 0; countCorrectAnswers < answersForWin; countCorrectAnswers += 0) {
    const gameData = gamePreparing();
    const [forQuestion, rigthAnswer] = gameData;
    const question = `Question: ${forQuestion}`;

    console.log(question);
    const playerAnswered = readlineSync.question('Your answer: ');
    if (playerAnswered === rigthAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default engine;
