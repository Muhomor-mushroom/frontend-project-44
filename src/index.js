import readlineSync from 'readline-sync';

const numberRandomizer = (min = 1, max = 100) => {
  const result = Math.round(Math.random() * (max - min) + min);
  return result;
};

export const foundation = (rule, getQuestionAndAnswer) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  const numberOfQuestions = 3;
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    const correctAnswerInString = correctAnswer.toString();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswerInString !== answer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export { numberRandomizer };
