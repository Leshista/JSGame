// Creating the game div in dependence of the screen size. In different resolutions there will be different maps, with different tile counts
function startGame() {

    if (screenSize() == 'xs') {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(6, 13);
        disableBorder(mainWrapper); // At smaller resolutions we have no need for the border
        setTiles(screenSize());

        const mcStartPoint = document.querySelector('.tile-col-3__tile-9'); // Setting the start point for our character in dependence on the screen size
        const mc = new Mc('mc', `${mcStartPoint.offsetLeft / 10}`, `${mcStartPoint.offsetTop / 10}`, `${mcStartPoint.offsetWidth / 10}`, `${mcStartPoint.offsetHeight / 10}`);


        const leftEdge = (document.querySelector('.tile-col').offsetLeft) / 10; // Setting the left edge of the screen

        const colsCount = document.querySelectorAll('.tile-col').length; // Getting the number of columns for the next variable
        const rightEdge = (document.querySelector(`.tile-col-${colsCount}`).offsetLeft) / 10; // Setting the right edge of the screen with the last column

        const topEdge = (document.querySelector('.tile-col-1__tile-1').offsetTop / 10); // Setting the top edge of the screen

        const rowCount = ((document.querySelector('.tile-col')).querySelectorAll('.tile')).length // Getting the number of tiles(rows) in the col for the next variable
        const bottomEdge = (document.querySelector(`.tile-col-1__tile-${rowCount}`).offsetTop / 10); // Setting the bottom edge of the screen with the last tile(row) of the col

        mc.move(leftEdge, rightEdge, topEdge, bottomEdge); // Enabling the player to move


        allTiles = document.querySelectorAll('.tile'); // Getting all the tiles
        mc.moveTap(allTiles); //Enabling the player to move by tapping on the tiles
        function createEnemyShort() {
            createEnemy(allTiles).tile.addEventListener('click', function () {
                mc.killAnEnemyTap(this);
            });
            window.addEventListener('keydown', function (e) {
                let enemyList = document.querySelectorAll('.creature__rat');
                enemyList.forEach(enemy => {
                    console.log(mc.tile.offsetLeft);
                    console.log(enemy.offsetLeft)
                    if (mc.tile.offsetLeft == enemy.offsetLeft && mc.tile.offsetTop == enemy.offsetTop && e.key == 'f') {
                        enemy.remove();
                        const getKilledName = () => enemy.classList[1].slice(10);
                        console.log(`You've killed a ${getKilledName()}.`);
                        if (getKilledName() == 'rat') {
                            console.log(`You've got 1 gold coin.`);
                            mc.currentGold += 1;
                            document.querySelector('.gold__count').textContent = mc.currentGold;
                        };
                        console.log(`You have ${mc.currentGold} gold coins now.`);
                    };
                });
            });
        };
        createEnemyShort();
        createEnemyShort();
        createEnemyShort();
        createEnemyShort();
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