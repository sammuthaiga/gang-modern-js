// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }
    console.log('Your score: ', scores[i]);
    if (scores[i] === 100) {
        console.log('Congratulations, you got the top score!');
        break;
    }
}

// switch statements.
const grade = 'D';

// using the switch statements.
switch (grade) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade');
}
