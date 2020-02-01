import { giveRandomNuber, giveRandomProgressionWithRandomGape } from '../index';
import engine from '../engine';

const brainProgressionGame = () => {
  const getQuestion = () => {
    const progrationLength = 10;
    const progressionStep = giveRandomNuber(1, 10);
    const progression = giveRandomProgressionWithRandomGape(progressionStep, progrationLength);
    return progression;
  };
  const getResultForThisRoundInString = (forQuestion) => {
    const arr = forQuestion.split(' ');
    const arrMapedNumb = arr.map((each) => {
      if (((typeof (each)) !== 'number') && (each !== '..')) {
        return Number(each);
      }
      return each;
    });

    let result;
    const indexOfResult = arrMapedNumb.indexOf('..');
    let stepOfProgression;
    if (indexOfResult < (arrMapedNumb.length / 2)) {
      stepOfProgression = arrMapedNumb[indexOfResult + 2] - arrMapedNumb[indexOfResult + 1];
      result = arrMapedNumb[indexOfResult + 1] - stepOfProgression;
    } else {
      stepOfProgression = arrMapedNumb[indexOfResult - 1] - arrMapedNumb[indexOfResult - 2];
      result = arrMapedNumb[indexOfResult - 1] + stepOfProgression;
    }
    return String(result);
  };
  const gameRules = 'What number is missing in the progression?';

  engine(getQuestion, getResultForThisRoundInString, gameRules);
};
export default brainProgressionGame;
