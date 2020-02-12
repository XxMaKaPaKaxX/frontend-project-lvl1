import giveRandomNuber from '../index';
import engine from '../engine';

const progressionLength = 10;
const gameRules = 'What number is missing in the progression?';

const giveRandomIndexOfArr = (arr) => giveRandomNuber(0, arr.length - 1);

const brainProgressionGame = () => {
  const gamePreparing = () => {
    const progressionArr = [giveRandomNuber(1, 10)];
    const progressionStep = giveRandomNuber(1, 10);
    let newElement;
    while (progressionArr.length < progressionLength) {
      newElement = progressionArr[progressionArr.length - 1] + progressionStep;
      progressionArr.push(newElement);
    }
    const randomIndex = giveRandomIndexOfArr(progressionArr);
    const rigthAnswer = String(progressionArr[randomIndex]);
    progressionArr[randomIndex] = '..';
    const forQuestion = progressionArr.join(' ');
    const result = [forQuestion, rigthAnswer];
    return result;
  };

  engine(gamePreparing, gameRules);
};
export default brainProgressionGame;
