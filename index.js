// Functions

// function declarations
function greet() {
  console.log('Hello');
}

// function expressions
const speak = function() {
  console.log('Good day!');
};

greet();
speak();

const sendGreet = function() {
  console.log('Hello there!');
}

// self examples
const plumbers = function() {
    let newPlumbers = ['Joe', 'Bob', 'Tom'];
    for (let i = 0; i < newPlumbers.length; i++) {
      if (newPlumbers[i].includes('Joe') || newPlumbers[i].includes('Bob') || newPlumbers[i].includes('Tom')) {
        console.log('We have a new plumber! ' + newPlumbers[i]);
      }
    }
};

plumbers();
