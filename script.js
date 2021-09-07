const board = document.querySelector('#board');
const SQUARE_NUMBER = 499;
const colors = [];

while (colors.length < 100) {
  colors.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}

function rand(frm, to) {
  return ~~(Math.random() * (to - frm)) + frm;
}

for (let x = 0; x <= SQUARE_NUMBER; x++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.onmousemove  = setColor;
  square.onmouseleave = resetColor;
  board.append(square);
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor(colors)
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function resetColor(event) {
  const element = event.target
  element.style.backgroundColor = 'rgb(30,29,30)'
  element.style.boxShadow = `0 0 2px black`
}

function getRandomColor (ArrayWithColors) {
  return ArrayWithColors[Math.floor(Math.random() * ArrayWithColors.length)]
}

/*

function setColor(element) {
  element.style.backgroundColor = 'red'
}

function resetColor(element) {
  element.style.backgroundColor = 'rgb(30,29,30)'
}

board.addEventListener('mousemove', (event)=>{
  if (event.target !== event.currentTarget) {
    setColor(event.target)
  }
  setTimeout(()=>{resetColor(event.target)},100)
})

*/
