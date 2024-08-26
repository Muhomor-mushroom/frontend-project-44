import readlineSync from 'readline-sync';

const firstGame = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let counter = 0;
    let isTrue;
    const question = () => {
        const randomNumber = Math.floor((Math.random() * 8) + 1);
        console.log(`Question: ${randomNumber}`)
        const answer = readlineSync.question('Your answer: ');
        if (randomNumber % 2 == 0) {
            switch (answer) {
                case 'yes':
                    counter += 1;
                    console.log('Correct!');
                    isTrue = true;
                    break;
                case 'no':
                default:
                    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
                    console.log(`Let's try again, `)
                    isTrue = false;
            }
        } else {
            switch (answer) {
                case 'no':
                    counter += 1;
                    console.log('Correct!');
                    isTrue = true;
                    break;
                case 'yes':
                default:
                    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
                    console.log(`Let's try again, ${name}!`)
                    isTrue = false;
            }
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
export default firstGame