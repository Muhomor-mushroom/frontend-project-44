import { foundation, numberRandomizer } from '../index.js';

const getQuestionAndAnswer = () => {
  const array = [];
  const firstNumber = numberRandomizer();
  const gradation = numberRandomizer();
  const numberOfNumbers = 9;
  array.push(firstNumber);
  for (let i = 0; i < numberOfNumbers; i += 1) {
    array.push(array[i] + gradation);
  }
  const randomIndex = Math.round(numberRandomizer(0, 10));
  const correctAnswer = array[randomIndex].toString();
  array[randomIndex] = '..';
  const question = `Question: ${array.join(' ')}`;
  return [question, correctAnswer];
};

const fourGame = () => {
  const rule = 'What number is missing in the progression?';
  foundation(rule, getQuestionAndAnswer);
};
export default fourGame;
