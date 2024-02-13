// Update attributes of the HTML element
const link = document.querySelector('a');
// use getAttribute to get the value of the href attribute
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';
