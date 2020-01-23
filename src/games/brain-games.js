
import readlineSync from 'readline-sync';

import brainEvenGame from './brain-even';
import brainCalcGame from './brain-calc';
import brainGcdGame from './brain-gcd';
import brainIsPrimeGame from './brain-prime';
import brainProgressionGame from './brain-progresiion';


const chooseTheGame = () => {
  const listOfGames = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];
  const indexOFGame = readlineSync.keyInSelect(listOfGames, 'Which game would you like to play?');
  const gameForPlay = listOfGames[indexOFGame];

  if (gameForPlay === 'brain-even') {
    brainEvenGame();
  }
  if (gameForPlay === 'brain-gcd') {
    brainGcdGame();
  }
  if (gameForPlay === 'brain-progression') {
    brainProgressionGame();
  }
  if (gameForPlay === 'brain-prime') {
    brainIsPrimeGame();
  }
  if (gameForPlay === 'brain-calc') {
    brainCalcGame();
  }
};

export default chooseTheGame;
