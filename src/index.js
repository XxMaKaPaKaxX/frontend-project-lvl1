export const giveRandomNuber = (minimalRandomNumber, maximalRandomNumber) => {
  const minInteger = Math.ceil(minimalRandomNumber);
  const maxInteger = Math.floor(maximalRandomNumber);
  return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
};

export const giveRandomOperatorInString = () => {
  const randomNumber = giveRandomNuber(1, 3);
  let operator;
  if (randomNumber === 1) {
    operator = '+';
  }
  if (randomNumber === 2) {
    operator = '-';
  }
  if (randomNumber === 3) {
    operator = '*';
  }
  return operator;
};

export const calculation = ([firstNumber, operator, secondNumber]) => {
  let result;
  if (operator === '+') {
    result = Number(firstNumber) + Number(secondNumber);
  }
  if (operator === '-') {
    result = Number(firstNumber) - Number(secondNumber);
  }
  if (operator === '*') {
    result = Number(firstNumber) * Number(secondNumber);
  }
  return String(result);
};


export const giveNOD = ([a, b]) => {
  const x = Number(a);
  const y = Number(b);
  if (y > x) return giveNOD([y, x]);
  if (!y) return x;
  return giveNOD([y, x % y]);
};

export const giveRandomIndexOfArr = (arr) => giveRandomNuber(0, arr.length - 1);

export const giveProgressionWithGape = (progressionLength) => {
  const progressionArr = [giveRandomNuber(1, 10)];
  const progressionStep = giveRandomNuber(1, 10);
  let newElement;
  while (progressionArr.length < progressionLength) {
    newElement = progressionArr[progressionArr.length - 1] + progressionStep;
    progressionArr.push(newElement);
  }
  const randomIndex = giveRandomIndexOfArr(progressionArr);
  progressionArr[randomIndex] = '..';
  const progressionInString = progressionArr.join(' ');
  return progressionInString;
};

export const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');

export const isPrime = (numb) => {
  for (let i = 2; i < numb; i += 1) {
    if (numb % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
