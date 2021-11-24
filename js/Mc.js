class Mc extends Creature {
    constructor(type, startX, startY, width, height) {
        super(type, startX, startY, width, height);
    };
    moveLeft(leftEdge) {
        window.addEventListener('keydown', () => {
            if (this.x > leftEdge) {
                this.x -= this.xSize;
                this.tile.style.left = `${this.x}rem`;
            };
        });
    };
};