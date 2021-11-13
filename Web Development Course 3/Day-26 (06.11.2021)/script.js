function greatestNumber (nr1, nr2, nr3, nr4, nr5) {
  let pair1 = 0;
  let pair2 = 0;
  if(nr1 > nr2) pair1 = nr1
  else pair1 = nr2

  if(nr3 > nr4) pair2 = nr3
  else pair2 = nr4

  if (pair1 > pair2) {
    if(pair1 > nr5) {
      console.log(`Numri me i madh eshte: ${pair1}`)
    } else {
      console.log(`Numri me i madh eshte: ${nr5}`)
    }
  } else {
    if(pair2 > nr5) {
      console.log(`Numri me i madh eshte: ${pair2}`)
    } else {
      console.log(`Numri me i madh eshte: ${nr5}`)
    }
  }
}

greatestNumber(3, 7, 16, 3, 22);
greatestNumber(33, 7, 16, 3, 22);

// Operations
// &&, ||

function greatestNumberAndOr (nr1, nr2, nr3, nr4, nr5) {
  let pair1 = 0;
  let pair2 = 0;
  if(nr1 > nr2) pair1 = nr1
  else pair1 = nr2

  if(nr3 > nr4) pair2 = nr3
  else pair2 = nr4

  if(pair1 > pair2 && pair1 > nr5) {
    console.log(`Numri me i madh eshte: ${pair1}`)
  } else if (pair2 > pair1 && pair2 > nr5) {
    console.log(`Numri me i madh eshte: ${pair2}`)
  } else {
    console.log(`Numri me i madh eshte: ${nr5}`)
  }
}

greatestNumberAndOr(11,22,33,44,5)

let name = 'Arif'

// Ternary Operator
console.log(name === 'Eros' ? 'Emri esht Eros' : 'Emri nuk eshte Eros')

// Switch

function daySentence(day) {
  let result = '';

  switch(day) {
    case 'Monday': 
      result = 'The day is Monday';
      break;
    case 'Tuesday':
      result = 'The day is Tuesday';
      break;
    default:
      result = 'There is a mistake';
  } 

  console.log(result);
}

daySentence('Tuesday')