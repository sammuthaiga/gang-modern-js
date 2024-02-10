// // Learningc about strings in javascript
// console.log('Hello world');
// let email = 'danretsolutions@gmail.com';
// console.log(email); //testing variables

// // string concatination
// let firstName = 'John';
// let lastName = 'Doe';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);
// // getting characters

// console.log(fullName[0]);
// console.log(fullName[1]);
// console.log(fullName[2]);
// console.log(fullName[3]);
// // string length
// console.log(fullName.length);
// console.log(lastName.length);
// console.log(firstName.length);
// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);
// let index = email.indexOf('@');
// console.log(index);

// // common string methods
let email = 'amigozabe@gmail.com';
let result = email.lastIndexOf('a');
console.log(result);
let result1 = email.slice(0, 10);
console.log(result1);
let result2 = email.substr(4, 10);
console.log(result2);
let result3 = email.replace('a', 'o');
console.log(result3);
let result4 = email.replace('g', 'i');
console.log(result4);
// Numbers
let radius = 10;
const pi = 3.14;
console.log(radius, pi);
// math operators +, -, *, /, **, %
console.log(10 / 2);
let result5 = radius % 3;
console.log(result5);
let result6 = pi * radius ** 2;
console.log(result6);

// order of operation - B I D M A S
let result7 = 5 * (10 - 3) ** 2;
console.log(result7);
let likes = 10;
// Increment by 1 ;
likes = likes + 1; // increment likes by 1
console.log(likes);

// Short hand notation
likes++; // increment likes by 1
console.log(likes);
likes--; // decrement likes by 1
console.log(likes);
likes += 10; // increment likes by 10
console.log(likes);
likes -= 5; // decrement likes by 5
console.log(likes);
likes *= 2; // multiply likes by 2
console.log(likes);
likes /= 2; // divide likes by 2
console.log(likes);
likes **= 2; // raise to the power of 2
console.log(likes);
likes %= 2; // remainder of 2
console.log(likes);

// NaN - not a number
console.log(5 / 'hello');
console.log(5 * 'hello');

// Concatenating strings with numbers
let result8 = 'the blog has ' + likes + ' likes';
console.log(result8);

// template strings
const title = 'Best reads of 2024';
const author = 'Samido';
const likes1 = 30;

// concatenation way
let result9 = 'The blog called ' + title + ' by ' + author + ' has ' + likes1 + ' likes';
console.log(result9);

// template string way
let result10 = `The blog called ${title} by ${author} has ${likes1} likes`;
console.log(result10);

// creating html template literals
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes1} likes</span>
`;
console.log(html);


