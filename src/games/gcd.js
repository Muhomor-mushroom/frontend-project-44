import { foundation, numberRandomizer } from '../index.js';

const cycle = (firstNumber, secondNumber) => {
  const result = [];
  for (let i = firstNumber - 1; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result.push(i);
    }
  }
  return result.length > 1 ? result[0] : 1;
};

const getCorrectResult = (firstNumber, secondNumber) => {
  if (firstNumber > secondNumber) {
    return firstNumber % secondNumber === 0 ? secondNumber : cycle(firstNumber, secondNumber);
  }
  return secondNumber % firstNumber === 0 ? firstNumber : cycle(firstNumber, secondNumber);
};

const getQuestionAndAnswer = () => {
  const firstRandomNumber = numberRandomizer();
  const secondRandomNumber = numberRandomizer();
  const question = `Question: ${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getCorrectResult(firstRandomNumber, secondRandomNumber);
  return [question, correctAnswer];
};

const thirdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  foundation(rule, getQuestionAndAnswer);
};
export default thirdGame;
