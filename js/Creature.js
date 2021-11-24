// Class Creature, for each enemy, friend and mc(main character) alike
class Creature {
    constructor(type, startX, startY, width, height) {
        this.type = type; // We use type for setting class and choosing img
        this.tile = document.createElement('div'); // Starting with creating div
        this.tile.classList.add('creature', `creature__${type}`);
        this.left = this.tile.style.left = `${startX}rem`; // Setting its position
        this.x = this.left.slice(0, -3);
        this.top = this.tile.style.top = `${startY}rem`;
        this.y = this.top.slice(0, -3);
        this.width = this.tile.style.width = `${width}rem`; // And size
        this.xSize = this.width.slice(0, -3);
        this.height = this.tile.style.height = `${height}rem`;
        this.ySize = this.height.slice(0, -3);
        this.img = document.createElement('img'); // Adding an img tag
        this.img.src = `../images/creatures/${type}.png`; // Setting it to our needs
        this.tile.appendChild(this.img); // Append img to our div
        mainWrapper.appendChild(this.tile); // And our div to tilemap
    };
};