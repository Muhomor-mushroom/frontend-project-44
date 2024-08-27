import readlineSync from 'readline-sync';
import resulter from '../src/index.js';

const firstGame = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    const isEven = (number) => {
        if (number % 2 == 0) {
            return true
        } return false
    };

    for (let i = 1; i <= 3; i += 1) {
        let randomNumber = Math.floor(Math.random() * (Math.floor(500) - Math.ceil(1)));
        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('Your answer: ');
        
        if (isEven(randomNumber) && answer == 'yes' || !isEven(randomNumber) && answer == 'no') {
            resulter('correct');
        } else if (isEven(randomNumber) && answer == 'no') {
            console.log("Answer 'no' is wrong answer ;(. Correct answer was 'yes'.");
            resulter('no', name)
            break;
        } else {
            console.log("Answer 'yes' if the number is even, otherwise answer 'no'.")
            resulter('yes', name);
            break;
        };

        if (i == 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
    }
}
export default firstGame