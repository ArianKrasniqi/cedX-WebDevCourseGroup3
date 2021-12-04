const TXT1 = document.getElementById('txt1')
const TXT2 = document.getElementById('txt2')
const TXT3 = document.getElementById('txt3')
const SHOWTXT1 = document.getElementById('showTxt1')
const SHOWTXT2 = document.getElementById('showTxt2')
const SHOWTXT3 = document.getElementById('showTxt3')

const showWrittenText = (event, order) => {
  const value = event.target.value
  if (order === 'first') {
    SHOWTXT1.textContent = value
  } else if (order === 'second') {
    SHOWTXT2.textContent = value
  } else {
    SHOWTXT3.textContent = value
  }
}

TXT1.addEventListener('input', (event) => showWrittenText(event, 'first'))
TXT2.addEventListener('input', (event) => showWrittenText(event, 'second'))
TXT3.addEventListener('input', (event) => showWrittenText(event, 'third'))