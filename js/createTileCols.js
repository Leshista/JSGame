// Creating the cols and rows of tiles for the game window

const mainWrapper = document.querySelector('.main__wrapper'); // Getting the div in which we will add them

function createTileCols(cols, rows) {
    for (let i = 0; i < cols; i++) {
        let tileCol = document.createElement('div');
        tileCol.classList.add('tile-col', `tile-col-${i + 1}`); // Creating cols with individual classes
        for (let i = 0; i < rows; i++) {
            let tile = document.createElement('div');
            tile.classList.add('tile', `${tileCol.classList[1]}__tile-${i + 1}`); // Creating tiles, they're will be rows
            tileCol.appendChild(tile); // Adding tiles to the cols
        };

        mainWrapper.appendChild(tileCol); // Adding cols to the game div
        let tileCols = document.querySelectorAll('.tile-col');
        tileCols.forEach(function (e, i, a) {
            e.style.width = '100%'; // Making every column be 100% of the width than can be taken
        });
    };
};