console.log('Testing Scipt')

let name = "Arian"
let lastname = 'Krasniqi'
let age = 25;

// Literal String (Template String)
let merge = "Emri im eshte: " + name + ", ndersa mbiemri im eshte " + lastname + ".";
merge = `Emri im eshte: ${name}, ndersa mbiemri im eshte ${lastname}..`;

// Escape Character
// let sentence = 'Te perdoret variabla "name"';
let sentence = 'Te perdoret \\variabla \'name\'';
console.log(sentence);
let sentence2 = `User name is: ${name}, 
User lastname is: ${lastname},
User age is: ${age}`
console.log(sentence2)
