class Mc extends Creature {
    constructor(type, startX, startY, width, height) {
        super(type, startX, startY, width, height);
    };
    move(leftEdge, rightEdge, topEdge, bottomEdge) {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'a' || e.key === 'ArrowLeft') {
                if (this.x > leftEdge) {
                    this.x -= this.xSize;
                    this.left = this.tile.style.left = `${this.x}rem`;
                };
            } else if (e.key === 'd' || e.key === 'ArrowRight') {
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
    moveTap(allTiles) {
        allTiles.forEach((e) => {
            e.addEventListener('click', () => {
                this.left = this.tile.style.left = `${e.offsetLeft / 10}rem`;
                this.x = +this.left.slice(0, -3);
                this.top = this.tile.style.top = `${e.offsetTop / 10}rem`;
                this.y = +this.top.slice(0, -3);
            });
        });
    };
};