const grid = document.querySelector(".grid");
const rows = grid.getElementsByClassName("row");
const cells = grid.getElementsByClassName("cell");
const clearButton = document.querySelector(".clear");
const slider = document.querySelector(".inputSlider");
//const sliderVal = document.querySelector(".inputSlider").value;
const Grid = document.querySelectorAll("div.grid");
let isDown = false;

let genCells = function (num) {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);
    for (let j = 0; j < num; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
      cell.addEventListener("mousemove", () => {
        if (isDown === true) cell.style.backgroundColor = "black";
      });
      cell.addEventListener("click", () => {
        cell.style.backgroundColor = "black";
      });
    }
  }
};

// let clearCells = function () {
//   genCells(slider.value);
// };

let clearCells = function (x) {
  [...x].forEach((element) => {
    if (element.style.backgroundColor === "black") {
      element.style.backgroundColor = "gainsboro";
    }
  });
};

genCells(33);

slider.addEventListener("click", () => genCells(slider.value));

clearButton.addEventListener("click", () => {
  clearCells(cells);
});

grid.addEventListener("mousedown", () => {
  isDown = true;
});
grid.addEventListener("mouseup", () => {
  isDown = false;
});

/*
Try creating 16 row divs with sixteen cell divs [DONE]

Get cells to resize within fixed container [DONE] : set ROW and CELL elements
 to 'flex: 1', the 'flex' property dictates the amount of available space that each
 element will take up in its parent, it combines flex-grow, flex-shrink, and flex basis

Had an issue where by changing the number of cells in the grid it would keep stacking
elements into the box, needed to clear them out first. Accomplished this with lns. 7&8
which checks to see if the grid element has children, and if they exist it removes 
them, thereby clearing the grid for fresh cells

*/
