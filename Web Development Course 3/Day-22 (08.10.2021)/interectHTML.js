let BTN = document.getElementById('btn');

function buttonIsClicked() {
  alert('The button is clicked!');
}

// Indirect Way of calling the function
BTN.addEventListener('click', buttonIsClicked)