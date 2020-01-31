import readlineSync from 'readline-sync';

const engine = (getQuestion, getResultForThisRoundInString, gameRules) => {
  let countOfCorrectAnswers = 0;
  const answersForWin = 3;

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

  console.log(gameRules);
  let forQuetion;
  let question;
  let resultForThisRoundInString;


  while (countOfCorrectAnswers < answersForWin) {
    forQuetion = getQuestion();
    question = `Question: ${forQuetion}`;
    resultForThisRoundInString = getResultForThisRoundInString(forQuetion);

    console.log(question);
    const playerAnswered = readlineSync.question('Your answer: ');
    if (playerAnswered === resultForThisRoundInString) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${resultForThisRoundInString}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default engine;
