class Creature {
    constructor(type, startX, startY, width, height) {
        this.type = type;
        let newCreature = document.createElement('div');
        newCreature.classList.add('creature', `creature__${type}`);
        newCreature.style.left = `${startX}rem`;
        newCreature.style.top = `${startY}rem`;
        newCreature.style.width = `${width}rem`;
        newCreature.style.height = `${height}rem`;
        let newCreatureImg = document.createElement('img');
        newCreature.appendChild(newCreatureImg);
        newCreatureImg.src = `../images/creatures/${type}.png`;
        mainWrapper.appendChild(newCreature);
    }
};