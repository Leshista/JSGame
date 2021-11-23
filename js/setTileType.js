// Function for finding exact tile and setting an image to it
function setTileType(col, row, type) {
    document.querySelector(`.tile-col-${col}__tile-${row}`).classList.add(`${type}`);
};