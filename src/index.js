import readlineSync from 'readline-sync';

/* Вывод результата */
const resulter = (endResult, name, answer, correctAnswer) => {
  if (endResult === 'correct') {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}`);
  }
};

/* Для калькулятора */
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

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

/* Цикл двух игр */
const cycle = (rule, name) => {
  for (let i = 1; i <= 3; i += 1) {
    if (rule == 'Answer "yes" if the number is even, otherwise answer "no".') {
      const randomNumber = Math.floor(Math.random() * 500);
      console.log(`Question: ${randomNumber}`);
      const answer = readlineSync.question('Your answer: ');
      const correctAnswer = isEven(randomNumber);
      if (answer !== correctAnswer) {
        resulter('incorrect', name, answer, correctAnswer);
        return;
      }
      resulter('correct');
    } 
    else {
      const operators = ['+', '-', '*'];
      const firstRandomNumber = Math.floor(Math.random() * 100);
      const secondRandomNumber = Math.floor(Math.random() * 100);
      const randomOperator = operators[Math.floor(Math.random() * 2 + 0.50)];
      console.log(`Question: ${firstRandomNumber}${randomOperator}${secondRandomNumber}`);
      const correctAnswer = getCorrectResult(firstRandomNumber, randomOperator, secondRandomNumber);
      const answer = readlineSync.question('Your answer: ');
      if (correctAnswer !== +answer) {
        resulter('incorrect', name, answer, correctAnswer);
        return;
      }
      resulter('correct');
    } 
  }
  console.log(`Congratulations, ${name}!`);
}

export const foundation = (rule) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  cycle(rule, name);
}
export default resulter;