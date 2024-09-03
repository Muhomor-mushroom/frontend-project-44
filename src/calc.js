import readlineSync from "readline-sync";
import resulter from "../src/index.js";

const secondGame = () => {
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    for (let i = 1; i <= 3; i += 1) {
        let firstRandomNumber = Math.floor(
            Math.random() * (Math.floor(100) - Math.ceil(1))
          );
        let secondRandomNumber = Math.floor(
            Math.random() * (Math.floor(100) - Math.ceil(1))
          );
        let randomOperand = Math.floor(Math.random() * ((Math.floor(4) - Math.ceil(1)) + Math.ceil(1)));

        let correctAnswer;

          switch(randomOperand) {
            case 1:
                correctAnswer = firstRandomNumber + secondRandomNumber;
                console.log(`Question: ${firstRandomNumber} + ${secondRandomNumber}`);
                break;
            case 2:
                correctAnswer = firstRandomNumber - secondRandomNumber;
                console.log(`Question: ${firstRandomNumber} - ${secondRandomNumber}`);
                break;
            default:
                correctAnswer = firstRandomNumber * secondRandomNumber;
                console.log(`Question: ${firstRandomNumber} * ${secondRandomNumber}`);
                break;
          }
          let answer = readlineSync.question("Your answer: ");
          if (answer !== correctAnswer.toString()) {
            console.log(
                `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
              );
              resulter("incorrect", name);
              return;
          }
          resulter("correct");
    }
    console.log(`Congratulations, ${name}!`);
}
secondGame();
export default secondGame;