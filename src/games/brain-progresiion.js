import giveRandomNumber from '../utils';
import engine from '../index';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const giveRandomIndexOfArr = (arr) => giveRandomNumber(0, arr.length - 1);

const giveDataForGame = () => {
  const progression = [];
  const progressionDiff = giveRandomNumber(1, 10);
  for (let indexNewElement = 0; indexNewElement < progressionLength - 1; indexNewElement += 1) {
    const newElement = (indexNewElement + 1) * progressionDiff;
    progression.push(newElement);
  }
  const randomIndex = giveRandomIndexOfArr(progression);
  const rigthAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const result = [question, rigthAnswer];
  return result;
};

const brainProgressionGame = () => {
  engine(giveDataForGame, gameDescription);
};
export default brainProgressionGame;
