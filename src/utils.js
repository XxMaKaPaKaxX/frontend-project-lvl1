const generateRandomNumber = (minimalRandomNumber, maximalRandomNumber) => {
  const minInteger = Math.ceil(minimalRandomNumber);
  const maxInteger = Math.floor(maximalRandomNumber);
  return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
};

export default generateRandomNumber;
