
import readlineSync from 'readline-sync';

import brainEvenGame from './games/brain-even';
import brainCalcGame from './games/brain-calc';
import brainGcdGame from './games/brain-gcd';
import brainIsPrimeGame from './games/brain-prime';
import brainProgressionGame from './games/brain-progresiion';


const chooseTheGame = () => {
  const listOfGames = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];
  const indexOFGame = readlineSync.keyInSelect(listOfGames, 'Which game would you like to play?');
  const gameForPlay = listOfGames[indexOFGame];


  switch (gameForPlay) {
    case 'brain-even':
      brainEvenGame();
      break;
    case 'brain-gcd':
      brainGcdGame();
      break;
    case 'brain-progression':
      brainProgressionGame();
      break;
    case 'brain-prime':
      brainIsPrimeGame();
      break;
    case 'brain-calc':
      brainCalcGame();
      break;
    default:
      console.log('Good bye!');
      break;
  }
};

export default chooseTheGame;
