import { foundation } from './index.js';

const getQuestionAndAnswer = () => {
  const array = [];
  const firstNumber = Math.round(Math.random() * 100);
  const gradation = Math.round(Math.random() * 11);
  array.push(firstNumber);
  for (let i = 0; i < 9; i += 1) {
    array.push(array[i] + gradation);
  }
  const randomIndex = Math.round(Math.random() * array.length - 1);
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
