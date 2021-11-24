class Mc extends Creature {
    constructor(type, startX, startY, width, height) {
        super(type, startX, startY, width, height);
    };
    move(leftEdge, rightEdge) {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'a' || e.key === 'ArrowLeft') {
                if (this.x > leftEdge) {
                    this.x -= this.xSize;
                    this.tile.style.left = `${this.x}rem`;
                };
            } else if (e.key === 'd' || e.key === 'ArrowRight') {
                if (this.x < rightEdge) {
                    this.x += this.xSize;
                    this.tile.style.left = `${this.x}rem`;
                };
            };
        });
    };
};