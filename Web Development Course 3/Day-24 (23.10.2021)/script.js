// if( condition[kushti] ) {
//   // code[logic]
// }

// boolean => true | false
// boolean => 1 | 0

let role = 'teacher';

if(role == 'teacher') {
  console.log('Welcome Teacher!');
} else if(role == 'student') {
  console.log('Welcome Student!');
} else {
  console.log('Unknown role!');
}

let number = 30;

if (number >= 10) {
  console.log('Numri eshte dy shifror, apo me shume')
} else {
  console.log('Numri eshte nje shifror')
}



// function greaterNumber(num1, num2) {
//   if() {
//     console.log(num1)
//   } else {
//     console.log(num2)
//   }
// }

// greaterNumber(4, 9);

function shumesi(arg1 , arg2 ){
  if(arg1 == 1){
    console.log(arg1 + arg2)
  } else if (arg1 > 1){
      console.log(arg1 + arg2 + 's')
  }
}
shumesi( 1 , 'cat')
shumesi(3, 'cat')
shumesi(1, 'dog')
shumesi(3, 'dog')
shumesi(1, 'person')
shumesi(29, 'person')