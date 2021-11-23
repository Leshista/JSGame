// Creating the game div in dependence of the screen size. In different resolutions there will be different maps, with different tile counts
function startGame() {

    if (screenSize() == 'xs') {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(6, 13);
        disableBorder(mainWrapper); // At smaller resolutions we have no need for the border

    } else if (screenSize() == 'sm') {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(15, 16);
        disableBorder(mainWrapper);

    } else if (screenSize() == 'md') {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(23, 15);

    } else if (screenSize() == 'lg') {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(27, 15);
    } else {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(30, 16);
    };
};