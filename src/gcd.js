import { foundation } from './index.js';

const cycle = (firstRandomNumber, secondRandomNumber) => {
  for (let i = 40; i > 0; i -= 1) {
    if (firstRandomNumber % i === 0 && secondRandomNumber % i === 0) {
      return i;
    }
  }
};

const getCorrectResult = (firstRandomNumber, secondRandomNumber) => {
  if (firstRandomNumber > secondRandomNumber) {
    return firstRandomNumber % secondRandomNumber === 0 ? secondRandomNumber : cycle(firstRandomNumber, secondRandomNumber);
  }
  return secondRandomNumber % firstRandomNumber === 0 ? firstRandomNumber : cycle(firstRandomNumber, secondRandomNumber);
};

const getQuestionAndAnswer = () => {
  const firstRandomNumber = Math.round(Math.random() * 101);
  const secondRandomNumber = Math.round(Math.random() * 101);
  const question = `Question: ${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getCorrectResult(firstRandomNumber, secondRandomNumber);
  return [question, correctAnswer];
};

const thirdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  foundation(rule, getQuestionAndAnswer);
};
export default thirdGame;
