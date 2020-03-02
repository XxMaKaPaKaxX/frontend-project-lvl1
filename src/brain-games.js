
import readlineSync from 'readline-sync';

import startEvenGame from './games/even';
import startCalcGame from './games/calc';
import startGcdGame from './games/gcd';
import startPrimeGame from './games/prime';
import startProgressionGame from './games/progresiion';


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
      startPrimeGame();
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
