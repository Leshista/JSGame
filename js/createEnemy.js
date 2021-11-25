function createEnemy(allTiles) {
    const enemyList = ['rat'];
    const randomEnemy = Math.floor(Math.random() * enemyList.length);
    if (randomEnemy == enemyList.indexOf('rat')) {
        const houses = document.querySelectorAll('.house, .farm, .mill, .lighthouse, .warehouse, .docks');
        let randomHouse = Math.floor(Math.random() * houses.length);
        let rat = new Creature('rat', houses[randomHouse].offsetLeft / 10, houses[randomHouse].offsetTop / 10, houses[randomHouse].offsetWidth / 10, houses[randomHouse].offsetHeight / 10);
    };
};