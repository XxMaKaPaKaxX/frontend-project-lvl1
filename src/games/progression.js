import generateRandomNumber from '../utils';
import engine from '../index';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getRandomIndexOfArray = (arr) => generateRandomNumber(0, arr.length - 1);

const generateGameData = () => {
  const progression = [];
  const progressionDiff = generateRandomNumber(1, 10);
  for (let i = 0; i < progressionLength - 1; i += 1) {
    const newElement = (i + 1) * progressionDiff;
    progression.push(newElement);
  }
  const randomIndex = getRandomIndexOfArray(progression);
  const rigthAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const result = [question, rigthAnswer];
  return result;
};

const startProgressionGame = () => {
  engine(generateGameData, gameDescription);
};
export default startProgressionGame;
