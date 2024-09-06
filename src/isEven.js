import readlineSync from "readline-sync";
import resulter from "../src/index.js";

const firstGame = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * (500) + 1);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    const correctAnswer = isEven(randomNumber);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      resulter("incorrect", name);
      return;
    }
    resulter("correct");
  }
  console.log(`Congratulations, ${name}!`);
};
export default firstGame;