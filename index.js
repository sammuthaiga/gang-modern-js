// Functions

// argument and parameters
const speak = function(name) {
    console.log(`Good day ${name}!`);
}

speak();
speak('Mario');

const speak1 = function(name, time) {
    console.log(`Good ${time} ${name}!`);
}

speak1('Mario', 'morning');

const speak2 = function(name='Samido', time='night') {
    console.log(`Good ${time} ${name}!`);
}

speak2();

// self practice.
const alertAvailablePlumbers = function(name, time, number, message) {
    console.log(`Good ${time} dear ${name},id number ${number} we are excited to inform you that ${message}.Sign-in for more details!`);
}

alertAvailablePlumbers('Samido', 'afternoon', 2134532, 'You have a new job waiting.')

// retun values

