import engine from '../engine';
import giveRandomNuber from '../index';


const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => ((num % 2) === 0);


const brainEvenGame = () => {
  const gamePreparing = () => {
    const forQuetion = giveRandomNuber(1, 100);
    const rigthAnswere = isEven(forQuetion) ? 'yes' : 'no';
    const result = [forQuetion, rigthAnswere];
    return result;
  };


  engine(gamePreparing, gameRules);
};

export default brainEvenGame;
