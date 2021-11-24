// Creating the game div in dependence of the screen size. In different resolutions there will be different maps, with different tile counts
function startGame() {

    if (screenSize() == 'xs') {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(6, 13);
        disableBorder(mainWrapper); // At smaller resolutions we have no need for the border
        setTiles(screenSize());
        const mcStartPoint = document.querySelector('.tile-col-3__tile-9');
        const mc = new Mc('mc', `${mcStartPoint.offsetLeft / 10}`, `${mcStartPoint.offsetTop / 10}`, `${mcStartPoint.offsetWidth / 10}`, `${mcStartPoint.offsetHeight / 10}`);
        const leftEdge = (document.querySelector('.tile-col').offsetLeft) / 10;
        mc.moveLeft(leftEdge);

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