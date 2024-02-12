// Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.


// Querying the DOM
// using querySelector and querySelectorAll to select elements from the DOM
const para = document.querySelector('p');
console.log(para);

const para1 = document.querySelector('.error');
console.log(para1);

const para2 = document.querySelector('body > h2');
console.log(para2);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[2]);

paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);

