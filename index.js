// Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

const para = document.querySelector('p');
console.log(para.innerText);
para.innerText = 'Ninjas are awesome!';


