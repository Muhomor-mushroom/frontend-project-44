import { foundation, numberRandomizer  } from '../index.js';

const isEven = (number) => number % 2 === 0;


const getQuestionAndAnswer = () => {
  const randomNumber = Math.floor(numberRandomizer());
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const firstGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  foundation(rule, getQuestionAndAnswer);
};
export default firstGame;
