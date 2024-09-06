import readlineSync from "readline-sync";
import resulter from "../src/index.js";

const secondGame = () => {
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');
    
    /* Создаем  массив операторов и переменную правильных ответов, которая будет меняться*/
    const operators = ['+', '-', '*'];
    let correctAnswer;

    /* Функция на высчитывание корректного значения*/
    const correct = (firstNumber, operator, secondNumber) => {
        switch(operator) {
            case '+':
                correctAnswer = firstNumber + secondNumber;
                break;
            case '-':
                correctAnswer = firstNumber - secondNumber;
                break;
            case '*':
                correctAnswer = firstNumber * secondNumber;
                break;
            default:
                console.log('ошибка');
                break;
        }
    }

    for (let i = 1; i <= 3; i += 1) {
        
        /* Создаем перове и второе рандомное число а так же рандомный оператор */
        let firstRandomNumber = Math.floor(Math.random() * 100);
        let secondRandomNumber = Math.floor(Math.random() * 100);
        let randomOperator = operators[Math.floor(Math.random() * 2 + 0.50)];
        
        /* Задаем вопрос и высчитываем корректный ответ на него */
        console.log(`Question: ${firstRandomNumber}${randomOperator}${secondRandomNumber}`)
        correct(firstRandomNumber, randomOperator, secondRandomNumber);
        
        /* Спрашиваем ответ на вопрос и делаем условие выхода из цикла */
          let answer = readlineSync.question("Your answer: ");
          if (correctAnswer !== +answer) {
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
export default secondGame;