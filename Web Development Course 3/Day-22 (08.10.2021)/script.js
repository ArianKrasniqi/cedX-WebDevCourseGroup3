console.log('Dren')
console.log('Berisha')

console.log('Elda')
console.log('Kaliqani')

console.log('Era')
console.log('Gashi')

// Function with no arguments
// function printNameLastname() {
//   console.log('Function Called');
// };

// Function with Arguments
function printNameLastname(name, lastname) {
  console.log(name)
  console.log(lastname)
};

printNameLastname('Merisa', 'Berisha');

printNameLastname('Arif', 'Muka')

printNameLastname('Eros', 'Gorani')

function sum(number1, number2) {
  let result = number1 + number2;
  console.log(result);
}

sum(6, 7);
sum(4, 7);


// Funksion per shumzimin e numrave
// Rezultati eshte: 28

// Viod Function Type
function multiply(number1, number2) {
  let result = number1 * number2;
  console.log(`Rezultati eshte: ${result}`);
}

// Direct way of calling the function
multiply(7, 8)

function substract(nr1, nr2) {
  let result = nr1 - nr2;
  return result;
}

let substractResult = substract(10, 7);
// console.log(`Substraction result is: ${substractResult}`)
// alert(`Substraction result is: ${substractResult}`);
