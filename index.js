// variables & block scope

// Global Scope
let age = 30;
if (true) {
    console.log("Inside 1st level code block: ", age);
}

// Local Scope
if (true) {
    let age = 40;
    let name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if (true) {
        let age = 50;
        console.log('inside 2nd code block: ', age);
    }
}
console.log('outside code block: ', age, name);


