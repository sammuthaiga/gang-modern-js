// callback functions
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    console.log(value);
});

// forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((person, index) => {
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

// self practice
const payment = 1000 * people.length;

const payPlumber = (plumber, index,) => {
    console.log(`${index} - hello ${plumber} here is your payment of ${payment}`);
}

people.forEach(payPlumber);
