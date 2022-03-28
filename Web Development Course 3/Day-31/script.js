let classes = [
  ["Arian", "Arifi"],
  ["Elda", "Dren"],
  ["Erosi", "Era"],
];

for (let i = 0; i < classes.length; i++) {
  for (let j = 0; j < classes[i].length; j++) {
    if (i === 0) {
      console.log(`${classes[i][j]} => paralelja e pare`);
    }
    if (i === 1) {
      console.log(`${classes[i][j]} => paralelja e dyte`);
    }
    if (i === 2) {
      console.log(`${classes[i][j]} => paralelja e trete`);
    }
  }
}

let stars = "";
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < i; k++) {
    stars = stars + "*";
  }
  console.log(stars);
  stars = "";
}
