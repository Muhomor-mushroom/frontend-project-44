import { foundation, numberRandomizer } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }  
  for (let i = number - 1; i > 1; i -= 1) {
   if (number % i === 0) return false;
  }
  return true;
}

const getQuestionAndAnswer = () => {
  const randomNumber = numberRandomizer();
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const fiveGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  foundation(rule, getQuestionAndAnswer);
};
export default fiveGame;
