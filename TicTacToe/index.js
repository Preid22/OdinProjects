let mainBoard = document.getElementById("game");
let playerInfo = document.getElementsByClassName("playerInput");
let cells = document.getElementsByClassName("cell");

const player = () => {
  let playerName = "";
  let playerToken = "";
  let playerScore = 0;

  const scoreIs = () => playerScore;
  const addScore = () => playerScore++;

  const setToken = (newToken) => {
    playerToken = newToken;
  };
  const tokenID = () => playerToken;
  const CPUtoken = () => {
    if (playerToken === "X") {
      return "O";
    } else {
      return "X";
    }
  };
  const setName = (newName) => {
    playerName = newName;
  };
  const nameIs = () => playerName;

  return { setName, nameIs, setToken, tokenID, CPUtoken, addScore, scoreIs };
};

const boardControl = () => {
  /*comment1*/
  let gridStateArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]; /*comment2*/

  const isCellOccupied = (gridX, gridY) => {
    return (
      gridStateArray[gridX][gridY] === "X" ||
      gridStateArray[gridX][gridY] === "Y"
    );
  };

  const resetGrid = () => {
    for (let i = 0; i < gridStateArray.length; i++) {
      for (let j = 0; j < gridStateArray[0].length; j++) {
        gridStateArray[i][j] = "";
      }
    }
  };
  /*comment3*/

  /*Will need player token and turn info */
  const dropToken = (gridX, gridY) => {
    isCellOccupied()
      ? (gridStateArray[gridX][gridY] = playerOne.tokenID())
      : console.error("Pick an unoccupied cell");
  };

  return { gridStateArray, resetGrid, dropToken };
};

let gamePlay = boardControl();
let playerOne = player();

playerInfo[0].addEventListener("submit", function (e) {
  e.preventDefault();

  let playerOne = player();
  let playerOneName = document.getElementById("playerOneName");
  let playerTwoName = document.getElementById("playerTwoName");

  playerOne.setName(e.target.elements.playerNameInput.value);

  playerOne.setToken(e.target.elements.selectToken.value);
  playerOneName.textContent = `P1: ${playerOne.tokenID()}`;
  playerTwoName.textContent = `P2: ${playerOne.CPUtoken()}`;

  (function assignCellsListener() {
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", () => {
        
        gamePlay.dropToken.playerOne;
        console.log();
      }); //event func
    } //outer loop iterating over 'cells'
  })();

  mainBoard.style.cursor = "pointer";
});

mainBoard.addEventListener("click", () => {
  console.log(cells);
});

/*
COMMENTS:
    - COMMENT1:  If gameBoard is written as a normal function, calling gameBoard.gridStateArray returns 'undefined', as the func
 has not been initialized. By writing in IIFE format the factory func can be used immediatly without
 a seperate init.

    - COMMENT2: Better to keep gridStateArray within the factory func
  this helps to avoid potential conflicts and bugs that can occur when
  a variable is globally avail and can potentially be changed un-intentionally.
  ENCAPSULATING the gridStateArray within the object means that it is only accessible
  by the methods we allow

  - COMMENT3: Tried writing resetGrid just as a variable re-assignment, this didn't work, needed to actually
  iterate over the array and re-assign indiv. elems., thinking this is a deep/shallow copy issue
*/
