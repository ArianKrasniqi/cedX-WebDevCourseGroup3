let name = "Arian";
const lastname = "Krasniqi";
console.log(name);
name = "New Name"
console.log(name);
console.log(lastname);
const place_of_birth = "Peje"; // Snake Case (Not preferable)
const placeOfBirth = "Peje"; // Camel Case (Preferable)

let place = "Peje";
let place2 = "Prishtine";
let place$ = "Prishtine";
let $place = "Prishtine";
let _place = "Prishtine";

// Not allowed
// let 2place = "Prishtine";
// let place-of-birth = "Prishtine";
// let const = "keyword";

let sum = 3 + 6;
console.log(sum);
let number1 = 7;
let number2 = 14;

sum = number1 + number2;
console.log(number1, "+", number2, "=", sum)

let subtraction = number1 - number2;
console.log(number1, "-", number2, "=", subtraction)

let multiply = number1 * number2;
console.log(number1, "*", number2, "=", multiply)

let divide = number2 / number1;
console.log(number2, "/", number1, "=", divide)

let modulo = number2 % number1;
console.log(number2, "%", number1, "=", modulo)

console.log("Emri eshte: ", name, ", mbiemri eshte: ", lastname)

let shuma = 10;
console.log(shuma)
shuma = shuma + 13;
console.log(shuma)
// shuma = shuma + 5;
shuma += 5 // Shorthand
console.log(shuma)
shuma -= 4
console.log(shuma)
shuma *= 4
console.log(shuma)
shuma /= 4
console.log(shuma)