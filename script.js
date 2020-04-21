const container = document.getElementById('container');
const cells = document.getElementsByClassName('cell')
const clearButton = document.getElementById('clear-button');
const palette = document.getElementsByClassName('palette')

let userColor = 'black';
clearButton.addEventListener('click', clearGrid);

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);

  for (let i = 0; i < rows*columns; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    container.appendChild(div);
  }
  paintGrid(userColor);
}

function paintGrid (userColor) {
  Array.from(cells).forEach(cell => cell.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = userColor;
  }));
}

function initColorPalette () {
  Array.from(palette).forEach(color => color.addEventListener('click', function(e) {
    userColor = e.target.id;
    paintGrid(userColor);
  }));
}

function clearGrid() {
  let gridSize;
  do {
    gridSize = prompt("Enter a number for the grid size between 2 and 90");
  } while (gridSize < 2 || gridSize > 90);
  makeGrid(gridSize,gridSize);
  Array.from(cells).forEach(cell => cell.style.backgroundColor = 'white');
}

makeGrid(16,16);
initColorPalette();