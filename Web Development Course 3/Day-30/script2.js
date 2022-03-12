const BTN = document.getElementById('btn')
const INPUT = document.getElementById('name-input')
const SPAN = document.getElementById('show')
console.log('BTN', BTN)

const consoleText = () => {
  const INPUT = document.getElementById('name-input')
  console.log('input value: ', INPUT.value)
  SPAN.textContent = INPUT.value
}

BTN.addEventListener('click', consoleText)
INPUT.addEventListener('input', consoleText)