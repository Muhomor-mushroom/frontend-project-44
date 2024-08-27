import readlineSync from 'readline-sync';

const secondGame = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
    console.log('What is the result of the expression?');
    let counter = 0;
    let isTrue;
    const question = () => {
        const firstRandomNumber = Math.floor((Math.random() * 8) + 1);
        const secondRandomNumber = Math.floor((Math.random() * 8) + 1);
        const result = firstRandomNumber + secondRandomNumber;
        console.log(`Question: ${firstRandomNumber} + ${secondRandomNumber}`)
        const answer = readlineSync.question('Your answer: ');
        if (answer == result) {
            console.log(`Correct!`);
            isTrue = true;
            counter += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            console.log(`Let's try again, ${name}!`)
            isTrue = false;
        }
    }
    question()
    if (isTrue == true) {
        question();
        if (isTrue == true) {
            question()
        }
    }
    if (counter == 3) {
        console.log(`Congratulations, ${name}!`)
    }
}
export default secondGame