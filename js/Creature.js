// Class Creature, for each enemy, friend and mc(main character) alike
class Creature {
    constructor(type, startX, startY, width, height) {
        this.type = type; // We use type for setting class and choosing img
        let tile = this.tile = document.createElement('div'); // Starting with creating div
        tile.classList.add('creature', `creature__${type}`);
        tile.style.left = `${startX}rem`; // Setting its position
        tile.style.top = `${startY}rem`;
        tile.style.width = `${width}rem`; // And size
        tile.style.height = `${height}rem`;
        let img = this.img = document.createElement('img'); // Adding an img tag
        img.src = `../images/creatures/${type}.png`; // Setting it to our needs
        tile.appendChild(img); // Append img to our div
        mainWrapper.appendChild(tile); // And our div to tilemap
    }
};