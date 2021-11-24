// Creating the game div in dependence of the screen size. In different resolutions there will be different maps, with different tile counts
function startGame() {

    if (screenSize() == 'xs') {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(6, 13);
        disableBorder(mainWrapper); // At smaller resolutions we have no need for the border
        setTiles(screenSize());
        const mcStartPoint = document.querySelector('.tile-col-3__tile-9');
        const mc = new Mc('rat', `${mcStartPoint.offsetLeft / 10}`, `${mcStartPoint.offsetTop / 10}`, `${mcStartPoint.offsetWidth / 10}`, `${mcStartPoint.offsetHeight / 10}`);
        const leftEdge = (document.querySelector('.tile-col').offsetLeft) / 10;
        const colsCount = document.querySelectorAll('.tile-col').length;
        const rightEdge = (document.querySelector(`.tile-col-${colsCount}`).offsetLeft) / 10;
        const topEdge = (document.querySelector('.tile-col-1__tile-1').offsetTop / 10);
        const rowCount = ((document.querySelector('.tile-col')).querySelectorAll('.tile')).length
        const bottomEdge = (document.querySelector(`.tile-col-1__tile-${rowCount}`).offsetTop / 10);
        mc.move(leftEdge, rightEdge, topEdge, bottomEdge);
        allTiles = document.querySelectorAll('.tile');
        mc.moveTap(allTiles);
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