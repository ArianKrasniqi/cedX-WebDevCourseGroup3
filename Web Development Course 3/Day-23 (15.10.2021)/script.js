const RED_BTN = document.getElementById("red");
const BLUE_BTN = document.getElementById("blue");
const GREEN_BTN = document.getElementById("green");
const COLOR_SPAN = document.getElementById("color");


function buttonClicked(color) {
  console.log(`${color} button is clicked!`);
  COLOR_SPAN.textContent = `${color}.`
}

// With arrow function
RED_BTN.addEventListener("click", () => {
  buttonClicked("Red");
});

BLUE_BTN.addEventListener("click", function () {
  buttonClicked("Blue");
});
GREEN_BTN.addEventListener("click", function () {
  buttonClicked("Green");
});

// function redButtonClicked() {
//   console.log('Red button is clicked!');
// }

// function blueButtonClicked() {
//   console.log('Blue button is clicked!');
// }

// function greenButtonClicked() {
//   console.log('Green button is clicked!');
// }

// RED_BTN.addEventListener('click', redButtonClicked('Red'));
// BLUE_BTN.addEventListener('click', blueButtonClicked('Blue'));
// GREEN_BTN.addEventListener('click', greenButtonClicked('Green'));

// // Default Functions
// function buttonClicked(color) {
//   console.log(`${color} button is clicked!`);
// }

// // Arrow Functions
// let buttonClicked = (color) => {
//   console.log(`${color} button is clicked!`);
// };

// function name() { ... }
// const name = () => { ... }

// Anonymous Functions
// function() { ... }
// () => { ... }
