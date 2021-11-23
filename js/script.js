const header = document.querySelector('.header');
const body = document.querySelector('body');
const startWindow = document.querySelector('.start__window');
const startButton = document.querySelector('.start__button');
const backgroundMusic = document.querySelector('.sounds__background-music');
const buttonSound = document.querySelector('.sounds__button-sound');

startButton.addEventListener('click', function () {
    buttonSound.play();
    setOpacity(startWindow, 0);
    setTimeout(() => {
        startWindow.remove(); // After the start button is clicked, we change opacity of the start window to 0, after this we remove it.
        setDisplay(header, 'block');
        setDisplay(mainWrapper, 'flex');
        startGame();

        setTimeout(() => {
            setOpacity(header, 1);
            setOpacity(mainWrapper, 1);
            backgroundMusic.play();
        }, 500);
    }, 1500);
}); // Then we activate header and main divs, setting their display values from none to visible ones, then we change their opacity to 1 for them to be visible. We need them to turn visible a little bit later than changing their display, otherwise transitions will not work.