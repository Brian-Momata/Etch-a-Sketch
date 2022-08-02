let container = document.querySelector(".container");
let size = parseInt(window.getComputedStyle(container).width, 10);

function createGrid(gridSize) {
  for (let rowCol = 0; rowCol < gridSize ** 2; rowCol++) {
    let gridCell = document.createElement("div");
    Object.assign(gridCell.style, {
      height : `${size / gridSize}px`,
      width : `${size / gridSize}px`
    });
    gridCell.classList.add("cell");
    gridCell.addEventListener("mouseover", () => {
    gridCell.style.backgroundColor = `${document.getElementById("colorpicker").value}`
    })
    container.appendChild(gridCell);
  }
}

function resetBoard() {
  let cells = container.querySelectorAll(".cell");
  cells.forEach((div) => {
    div.style.backgroundColor = "white";
  })
}
let gridSize = prompt("choose a grid size", 16);
createGrid(Number(gridSize));