// primitive values

// primitive values in JavaScript, such as numbers, strings, booleans, null, and undefined, are stored in the stack when they are part of a variable. However, when a primitive value is copied to another variable, the value itself is copied, not the reference.

// 
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// when you copy a primitive value, you create a new independent copy of that value in a separate stack space.
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
// reference values in JavaScript, such as arrays and objects, are stored in the heap when they are part of a variable. When a reference value is copied to another variable, the reference is copied, not the value itself.
const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);

// when you copy a reference value, you create a new reference to the same object in the heap.
userOne.age = 40;
console.log(userOne, userTwo);


