const header = document.querySelector('.header');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const startWindow = document.querySelector('.start__window');
const startButton = document.querySelector('.start__button');
const backgroundMusic = document.querySelector('.sounds__background-music');
const buttonSound = document.querySelector('.sounds__button-sound');

function setOpacity(element, value) {
    element.style.opacity = `${value}`;
}; // Change the opacity value of the DOM element

function setDisplay(element, value) {
    element.style.display = `${value}`;
}; // Change the display value of the DOM element

startButton.addEventListener('click', function () {
    buttonSound.play();
    setOpacity(startWindow, 0);
    setTimeout(function () {
        startWindow.remove();
        // startGame();
        setDisplay(header, 'block');
        setDisplay(main, 'flex');

        setTimeout(function () {
            setOpacity(header, 1);
            setOpacity(main, 1);
            backgroundMusic.play();
        }, 500);
    }, 1500);
}); // After the start button is clicked, we change opacity of the start window to 0, after this we remove it. Then we activate header and main divs, setting their display values from none to visible ones, then we change their opacity to 1 for them to be visible. We need them to turn visible a little bit later than changing their display, otherwise transitions will not work.