let sum = 4;

// sum = sum + 3; 
sum *= 3;

// console.log('sum: ', sum)

let number1 = 13

let modulo = number1 % 4

// console.log('modulo: ', modulo)

let array = [2, 3, 7, 11, 0, 14, 16, 21];

// 2 -> cift
// 3 -> tek
// Numri eshte zero

array[0]

// if(array[0] % 2) {
//   console.log(array[0] + '-> cift')
// } else {
//   console.log(array[0] + '-> tek')
// }

// For Loop
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 0) {
//     console.log('Numri eshte zero');
//   } else if (array[i] % 2) {
//     console.log(`${array[i]} -> cift`)
//   } else {
//     console.log(`${array[i]} -> tek`)
//   }
// }

// While Loop
// let i = 0;
// while(i < array.length) {
//   if (array[i] === 0) {
//     console.log('Numri eshte zero');
//   } else if (array[i] % 2) {
//     console.log(`${array[i]} -> cift`)
//   } else {
//     console.log(`${array[i]} -> tek`)
//   }

//   i++
// }

'+', '-', '*', '/'
function calculateNumbers(number1, number2, operator) {
  let result = 0;
  switch(operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    default:
      console.log('Operatori eshte gabim')
  }
  console.log(`Rezultati eshte: ${result}`)
}

// Arrow Functions
// const calculateNumbers = (number1, number2, operator) => {
// }

calculateNumbers(22, 4, "%");