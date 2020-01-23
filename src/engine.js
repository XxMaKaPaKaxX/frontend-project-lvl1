import readlineSync from 'readline-sync';

const engine = (question, resultForThisRoundInString, playerName) => {
  console.log(question);
  const playerAnswered = readlineSync.question('Your answer: ');
  if (playerAnswered === resultForThisRoundInString) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playerAnswered}' is wrong answer ;(. Correct answer was '${resultForThisRoundInString}'.`);
  console.log(`Let's try again, ${playerName}!`);
  return false;
};
export default engine;
