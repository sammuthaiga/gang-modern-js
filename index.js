// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;
// while(i < names.length) {
//     console.log('in loop:', names[i]);
//     i++;
// }

// // do while loops
// let j = 5;
// do {
//     console.log('val of j is:', j);
//     j++;
// }
// while(j < 5);

// if statements
// const age = 25;
// if(age > 20) {
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
// if(ninjas.length > 3) {
//     console.log("that's a lot of ninjas");
// }

const password = 'p@ss';

if(password.length >= 8) {
    console.log('that password is long enough');
} else {
    console.log('password is not long enough');
}

const password1 = "";
if(password1.length >= 20) {
    console.log('this is is super strong password');
    } else if (password1.length >= 12) {
    console.log('password is very strong');
    } else if (password1.length >= 8) {
    console.log('password is long enough');
    } else if (password1.length >= 6) {
    console.log('password is too short');
    } else  if (password1.length <4){
    console.log("can't find your password! It's too short");
    }

// logical operators - OR || and AND &&
const password2 = 'p@ssword';
if(password2.length >= 12 && password2.includes('@')) {
    console.log('that password is mighty strong');
} else if(password2.length >= 8 || password2.includes('@') && password2.length > 5) {
    console.log('that password is strong enough');
} else {
    console.log('password is not strong enough');
}

// logical NOT (!)
let user = false;
if(!user) {
    console.log('you must be logged in to continue');
} else {
    console.log('you are logged in');
}

