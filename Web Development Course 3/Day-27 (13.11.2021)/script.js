function calculate (number1, number2, operator) {
    let result = 0;
    switch(operator) {
        case 'MBLEDH':
            result = number1 + number2;
            break
        case 'ZBRIT':
            result = number1 - number2
            break
        case 'SHUMEZO':
            result = number1 * number2
            break
        case 'PJESTO':
            result = number1 / number2
            break
        default:
            console.log('Operatori eshte gabim: ', operator)
    }
    console.log(`Rezultate per ${number1} ${operator} ${number2} eshte: ${result}`)
}

calculate(8, 7, 'PJESTO')


let person = {
    name: 'Eros',
    age: 19
}

let sentence = '';

sentence = person.age > 18 ? 'I rritur' : 'I mitur';

console.log(sentence)


for (let i = 0; i <= 10; i++) {
    console.log('i = ', i)
}

let students = ['Arifi', 'Erosi', 'Era', 'Elda', 'Dreni']

for (let i = 0; i < students.length; i++) {
    console.log('Student: ', students[i])
}

for (let i = 0; i <= 100; i = i + 2) {
    console.log('i = ', i)
}