import generateRandomNumber from '../utils';
import engine from '../index';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getRandomIndexOfProgression = (arr) => generateRandomNumber(0, arr.length - 1);

const generateDataForGame = () => {
  const progression = [];
  const progressionDiff = generateRandomNumber(1, 10);
  for (let indexNewElement = 0; indexNewElement < progressionLength - 1; indexNewElement += 1) {
    const newElement = (indexNewElement + 1) * progressionDiff;
    progression.push(newElement);
  }
  const randomIndex = getRandomIndexOfProgression(progression);
  const rigthAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const result = [question, rigthAnswer];
  return result;
};

const startProgressionGame = () => {
  engine(generateDataForGame, gameDescription);
};
export default startProgressionGame;
