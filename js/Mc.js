class Mc extends Creature {
    constructor(type, startX, startY, width, height) {
        super(type, startX, startY, width, height);
        this.currentGold = +(document.querySelector('.gold__count').textContent);
    };
    move(leftEdge, rightEdge, topEdge, bottomEdge) { // Moving our character
        window.addEventListener('keydown', (e) => {
            if (e.key === 'a' || e.key === 'ArrowLeft') { // If the button was pressed
                if (this.x > leftEdge) { // If we don't stand at the left border
                    this.x -= this.xSize;
                    this.left = this.tile.style.left = `${this.x}rem`; // Go to left one width of a tile
                };
            } else if (e.key === 'd' || e.key === 'ArrowRight') { // The same but with different directions
                if (this.x < rightEdge) {
                    this.x += this.xSize;
                    this.right = this.tile.style.left = `${this.x}rem`;
                };
            } else if (e.key === 'w' || e.key === 'ArrowUp') {
                if (this.y > topEdge) {
                    this.y -= this.ySize;
                    this.top = this.tile.style.top = `${this.y}rem`;
                };
            } else if (e.key === 's' || e.key === 'ArrowDown') {
                if (this.y < bottomEdge) {
                    this.y += this.ySize;
                    this.bottom = this.tile.style.top = `${this.y}rem`;
                };
            };
        });
    };
    moveTap(allTiles) { // Move our character wherever the user taps(For mobile)
        allTiles.forEach((e) => {
            e.addEventListener('click', () => {
                this.left = this.tile.style.left = `${e.offsetLeft / 10}rem`;
                this.x = +this.left.slice(0, -3);
                this.top = this.tile.style.top = `${e.offsetTop / 10}rem`;
                this.y = +this.top.slice(0, -3);
            });
        });
    };
    killAnEnemy(enemy) {
        this.left = this.tile.style.left = `${enemy.offsetLeft / 10}rem`;
        this.x = +this.left.slice(0, -3);
        this.top = this.tile.style.top = `${enemy.offsetTop / 10}rem`;
        this.y = +this.top.slice(0, -3);
        enemy.remove();
        const getKilledName = () => enemy.classList[1].slice(10);
        console.log(`You've killed a ${getKilledName()}.`);
        if (getKilledName() == 'rat') {
            console.log(`You've got 1 gold coin`);
            this.currentGold += 1;
            document.querySelector('.gold__count').textContent = this.currentGold;
        };
        console.log(`You have ${this.currentGold} gold coins now.`);
    };
};