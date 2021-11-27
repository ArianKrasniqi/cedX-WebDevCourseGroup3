// let students = ['Arifi', 'Erosi', 'Era', 'Elda', 'Dreni']

// for (let i = 0; i < students.length; i++) {
//     console.log('Student: ', students[i])
// }

let newStudents = ['Arifi', 'Erosi', 'Era', 'Elda', 'Dreni']

for (const singleStudent of newStudents) {
    console.log('singleStudent: ', singleStudent)
}

let teacher = {
  name: 'Arian',
  lastname: 'Krasniqi',
  subject: 'Programming',
  school: 'cedX'
}

for (const key in teacher) {
  console.log('teacher', teacher[key])
}

let i = 10

// while loop
while(i < 10) {
  console.log(i);
  i++
}

i = 10
//do while loop
do {
  console.log('do loop:', i)
  i++
} while(i < 10)

// for (let i = 0; i < students.length; i++) {
//     console.log('Student: ', students[i])
// }

// Detyra
// 1. Formoni dy array me disa numra. Shkruani shumen e te dyjave si rezultat
// 2. Printoni te gjithe elementet e nje array nga pas.
// 3. Shkruani nje loop qe iteron ne 20 numra, dhe i shtyp ato duke treguar se a eshte cift apo tek. P.sh. 1->Tek, 2->Qift

const numbers1 = [7, 2, 4, 10, 25, 3];
const numbers2 = [17, 23, 41, 103, 5, 0];

let sumNumbers1 = 0;

for (const number of numbers1) {
  console.log(number)
  sumNumbers1 = sumNumbers1 + number
}

let ordinalNumber = ['first', 'second', 'third', 'fourth', 'fifth'];

for(let i = ordinalNumber.length - 1; i >= 0; i--) {
  console.log(ordinalNumber[i])
}

for(let i = 1; i <= 20; i++){
  if(i % 2 === 1) {
    console.log(`${i}->tek`)
  } else {
    console.log(`${i}->cift`)
  }
}

// 5. Shkruani nje loop qe iteron ne 100 numra, duke i shtypur ata. 
//  Numrat qe jane te plotpjestueshem me 3 do te shtypen si (3A, 6A), 
// 	numrat te plotpjestueshem me 5 do te shtypen si (5B, 10B) 
//  dhe numrat e plotpjestueshem me 3 dhe 5 do te shtypen si (15AB, 30AB).