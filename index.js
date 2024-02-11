// Arrow functions
const calArea = (radius) => {
    return 3.14 * radius**2;
};

const area = calArea(5);
console.log('Area is:', area);

// Arrow functions with one parameter
const greet = name => 'Hello ' + name;
console.log(greet('Mario'));

// Arrow functions with multiple parameters
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10, 15, 30], 0.2));

// Arrow functions with no parameters
const name = 'Shaun';
const greet1 = () => 'Hello ' + name;
console.log(greet1());


