
// Querying the DOM
// get an element by ID 
const title = document.getElementById('page-title');
console.log(title);

// get elements by class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

const para = document.querySelector('p');
console.log(para.innerText);
para.innerText = 'Ninjas are awesome!';


