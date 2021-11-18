const header = document.querySelector('.header');
const body = document.querySelector('body');
const mainWrapper = document.querySelector('.main__wrapper');
const startWindow = document.querySelector('.start__window');
const startButton = document.querySelector('.start__button');
const backgroundMusic = document.querySelector('.sounds__background-music');
const buttonSound = document.querySelector('.sounds__button-sound');

let screenWidth = window.screen.width;

function screenSize() {
    if (screenWidth <= 440) {
        return 'xs';
    } else if (screenWidth <= 768) {
        return 'sm';
    } else if (screenWidth <= 992) {
        return 'md';
    } else if (screenWidth <= 1200) {
        return 'lg';
    } else if (screenWidth <= 1400) {
        return 'xl';
    } else {
        return 'xxl';
    };
};

function createTileCols(cols, rows) {
    for (let i = 0; i < cols; i++) {
        let tileCol = document.createElement('div');
        tileCol.classList.add('tile-col', `tile-col-${i + 1}`);
        for (let i = 0; i < rows; i++) {
            let tile = document.createElement('div');
            tile.classList.add('tile', `${tileCol.classList[1]}__tile-${i + 1}`);
            tileCol.appendChild(tile);
        }
        mainWrapper.appendChild(tileCol);
    };
};

function startGame() {
    if (screenSize() == 'xs') {
        console.log(`Screen size is ${screenSize()}.`)
        createTileCols(6, 15);
        let tileCols = document.querySelectorAll('.tile-col');
        tileCols.forEach(function (e, i, a) {
            e.style.width = '100%';
        });
    };
};

function setOpacity(element, value) {
    element.style.opacity = `${value}`;
}; // Change the opacity value of the DOM element

function setDisplay(element, value) {
    element.style.display = `${value}`;
}; // Change the display value of the DOM element

startButton.addEventListener('click', function () {
    buttonSound.play();
    setOpacity(startWindow, 0);
    setTimeout(() => {
        startWindow.remove();
        setDisplay(header, 'block');
        setDisplay(mainWrapper, 'flex');
        startGame();

        setTimeout(() => {
            setOpacity(header, 1);
            setOpacity(mainWrapper, 1);
            backgroundMusic.play();
        }, 500);
    }, 1500);
}); // After the start button is clicked, we change opacity of the start window to 0, after this we remove it. Then we activate header and main divs, setting their display values from none to visible ones, then we change their opacity to 1 for them to be visible. We need them to turn visible a little bit later than changing their display, otherwise transitions will not work.