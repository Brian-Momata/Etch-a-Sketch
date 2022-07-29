let container = document.querySelector(".container");
let size = parseInt(window.getComputedStyle(container).width, 10);

function createGrid(gridSize) {
  for (let rowCol = 0; rowCol < gridSize ** 2; rowCol++) {
    let gridCell = document.createElement("div");
    Object.assign(gridCell.style, {
      height : `${(size / gridSize) - 2}px`,
      width : `${(size / gridSize) - 2}px`
    });
    gridCell.classList.add("cell");
    container.appendChild(gridCell);
  }
}

window.onload = function() {
  createGrid(32);
}