import readlineSync from 'readline-sync';

const numberRandomizer = () => {
  const result = Math.round((Math.random() + 1) * 101);
  return result;
}

export const foundation = (rule, getQuestionAndAnswer) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  const numberOfQuestions = 3;
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer.toString() !== answer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`)
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export {numberRandomizer};
