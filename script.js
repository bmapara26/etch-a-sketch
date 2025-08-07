// deafult grid values:
// const numberOfSquaresInRow = 16;
// const NumberOfRows = 16;
size = 16;
const gridSize = 320; // total area/size of a 16*16 grid - will use this later when we want users to choose the size of their grid where we will be changing the size of the .grid-container

// select the grid container:
const gridContainer = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector(".grid-size-btn")




// select individual square in the grid:
// const eachSquare = document.querySelectorAll(".grid-container div");

// // loop to create 16x16 grid :
// for (let i = 0; i < NumberOfRows; i++) { // creates 16 rows with 16 squares in each row
//     for (let j = 0; j < numberOfSquaresInRow; j++) { //creates 16 rows
//         const square = document.createElement("div");
//         square.classList.add("individual-Square");
//         gridContainer.append(square);   
//     }
// }

function createGrid(size) {
    const squareSize = gridContainer.clientWidth / size;
    // loop to create 16x16 grid :
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("individual-Square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        gridContainer.append(square);
    }
};

function createNewGrid(newGridSize) {
    // for (let i = 0; i < newGridSize * newGridSize; i++) {
    //     const square = document.createElement("div");
    //     square.classList.add("individual-Square");
    //     gridContainer.append(square);
    // }    
    createGrid(newGridSize);
};

// creating the sketch trail:
gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("individual-Square")) {
        e.target.style.backgroundColor = "red";
    }
});

gridSizeBtn.addEventListener("click", () => {
    let newSize = prompt("Enter grid size between 1 and 100:");
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Clear the current grid
    gridContainer.innerHTML = "";

    // Create the new grid
    createGrid(newSize);
});



createGrid(size)