import giveRandomNuber from '../utils';
import engine from '../index';

const progressionLength = 10;
const gameRules = 'What number is missing in the progression?';

const giveRandomIndexOfArr = (arr) => giveRandomNuber(0, arr.length - 1);

const gamePreparing = () => {
  const progression = [];
  const firstArrayNumber = giveRandomNuber(1, 10);
  progression.push(firstArrayNumber);
  const progressionDiff = giveRandomNuber(1, 10);
  let newElement;
  for (let indexNewElement = 1; indexNewElement < progressionLength - 1; indexNewElement += 1) {
    newElement = firstArrayNumber + indexNewElement * progressionDiff;
    progression.push(newElement);
  }
  const randomIndex = giveRandomIndexOfArr(progression);
  const rigthAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const forQuestion = progression.join(' ');
  const result = [forQuestion, rigthAnswer];
  return result;
};

const brainProgressionGame = () => {
  engine(gamePreparing, gameRules);
};
export default brainProgressionGame;
