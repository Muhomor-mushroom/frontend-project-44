import { foundation } from './index.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * (500) + 1);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber);
  return [question, correctAnswer];
};

const firstGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  foundation(rule, getQuestionAndAnswer);
};
export default firstGame;
