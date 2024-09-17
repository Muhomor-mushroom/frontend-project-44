import { foundation, numberRandomizer } from './index.js';

const getQuestionAndAnswer = () => {
  const array = [];
  const firstNumber = numberRandomizer();
  const gradation = numberRandomizer();
  const numberOfNumbers = 9;
  array.push(firstNumber);
  for (let i = 0; i < numberOfNumbers; i += 1) {
    array.push(array[i] + gradation);
  }
  const randomIndex = Math.round((Math.random() + 0.1) * array.length - 1);
  const correctAnswer = array[randomIndex];
  array[randomIndex] = '..';
  const question = `Question: ${array.join(' ')}`;
  return [question, correctAnswer];
};

const fourGame = () => {
  const rule = 'What number is missing in the progression?';
  foundation(rule, getQuestionAndAnswer);
};
export default fourGame;
