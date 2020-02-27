
import readlineSync from 'readline-sync';

import startEvenGame from './games/brain-even';
import startCalcGame from './games/brain-calc';
import startGcdGame from './games/brain-gcd';
import startIsPrimeGame from './games/brain-prime';
import startProgressionGame from './games/brain-progresiion';


const chooseTheGame = () => {
  const listOfGames = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];
  const indexOFGame = readlineSync.keyInSelect(listOfGames, 'Which game would you like to play?');
  const gameForPlay = listOfGames[indexOFGame];


  switch (gameForPlay) {
    case 'brain-even':
      startEvenGame();
      break;
    case 'brain-gcd':
      startGcdGame();
      break;
    case 'brain-progression':
      startProgressionGame();
      break;
    case 'brain-prime':
      startIsPrimeGame();
      break;
    case 'brain-calc':
      startCalcGame();
      break;
    default:
      console.log('Good bye!');
      break;
  }
};

export default chooseTheGame;
