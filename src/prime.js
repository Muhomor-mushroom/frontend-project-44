import { foundation } from './index.js';
import { numberRandomizer } from './index.js';

const isPrime = (number) => {
  const dropError = () => {
    throw new Error('numbers less than 2 can be neither prime nor complex');
  };

  const correctResult = () => {
    for (let i = number - 1; i > 1; i -= 1) {
        if (number % i === 0) {
          return 'no';
        }
      }
      return 'yes';
  };

    return number <= 1 ? dropError() : correctResult();
};

const getQuestionAndAnswer = () => {
  const randomNumber = numberRandomizer();
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isPrime(randomNumber);
  return [question, correctAnswer];
};

const fiveGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  foundation(rule, getQuestionAndAnswer);
};
export default fiveGame;
