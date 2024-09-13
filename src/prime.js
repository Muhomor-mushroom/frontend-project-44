import { foundation } from './index.js';

const isPrime = (number) => {
  if (number <= 1) {
    throw new Error('Unknown number');
  } else {
    for (let i = number - 1; i > 1; i -= 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
};

const getQuestionAndAnswer = () => {
  const randomNumber = Math.round(Math.random() * 1025);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isPrime(randomNumber);
  return [question, correctAnswer];
};

const fiveGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  foundation(rule, getQuestionAndAnswer);
};
export default fiveGame;
