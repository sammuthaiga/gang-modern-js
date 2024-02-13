// Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

// The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style, or content. Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

// The following example shows how to create update and delete elements from the DOM.

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2>This is a new h2</h2>';
console.log(content.innerHTML);

// The following example shows how to loop through an array and append each element to the DOM. 

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
}
);

// The following example shows how to create a new element and append it to the DOM.

const newContent = document.createElement('div');
newContent.classList.add('new');
newContent.innerHTML = '<h2>This is a new h2</h2>';
content.appendChild(newContent);

// The following example shows how to remove an element from the DOM.

const p = document.querySelector('p');
p.remove();




