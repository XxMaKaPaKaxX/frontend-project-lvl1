import readlineSync from 'readline-sync';

const engine = (gamePreparing, gameRules) => {
  const answersForWin = 3;
  const gameRounds = 3;
  let countOfCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

  console.log(gameRules);

  for (let rounds = 0; rounds < gameRounds; rounds += 1) {
    const gameData = gamePreparing();
    const [forQuestion, rigthAnswer] = gameData;
    const question = `Question: ${forQuestion}`;

    console.log(question);
    const playerAnswered = readlineSync.question('Your answer: ');
    if (playerAnswered === rigthAnswer) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
    }
  }

  const win = `Congratulations, ${playerName}!`;
  const lose = `${answersForWin - countOfCorrectAnswers} correct answers miss to win. Try again ${[playerName]}`;
  const result = answersForWin === countOfCorrectAnswers ? win : lose;

  console.log(result);
};
export default engine;
