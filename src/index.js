const resulter = (endResult, name) => {
    if (endResult == 'correct') {
        console.log('Correct!');
    } else {
        console.log(`Let's try again, ${name}`)
    }
}
export default resulter;