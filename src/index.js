import readlineSync from 'readline-sync';

/* Вывод результата */
const resulter = (endResult, name) => {
  if (endResult === 'correct') {
    console.log('Correct!');
  } else {
    console.log(`Let's try again, ${name}`);
  }
};

export const foundation = (rule, getQuestionAndAnswer) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer.toString() !== answer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      resulter('incorrect', name);
      return;
    }
    resulter('correct');
  }
  console.log(`Congratulations, ${name}!`);
};
export default resulter;
