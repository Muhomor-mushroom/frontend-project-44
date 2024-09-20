import { foundation, numberRandomizer } from '../index.js';

const getCorrectResult = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Unknown operator');
  }
};

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const firstRandomNumber = numberRandomizer();
  const secondRandomNumber = numberRandomizer();
  const randomOperator = operators[numberRandomizer(0, 2)];
  const question = `Question: ${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const correctAnswer = getCorrectResult(firstRandomNumber, randomOperator, secondRandomNumber);
  return [question, correctAnswer];
};

const secondGame = () => {
  const rule = 'What is the result of the expression?';
  foundation(rule, getQuestionAndAnswer);
};
export default secondGame;
