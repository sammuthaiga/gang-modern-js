// objects literals notation is a way to create objects in JavaScript.
let user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    location: 'USA',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);

// Accessing the properties of an object using dot notation.
console.log(user.name);

// Changing the value of a property of an object using dot notation.
user.age = 35;
console.log(user.age);

// Accessing the properties of an object using square brackets.
console.log(user['name']);

// Changing the value of a property of an object using square brackets.
user['name'] = 'Chun-li';
console.log(user['name']);


console.log(typeof user);


