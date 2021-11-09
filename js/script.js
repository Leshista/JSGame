const header = document.querySelector('.header');
const startWindow = document.querySelector('.start__window');
const startButton = document.querySelector('.start__button');
const backgroundMusic = document.querySelector('.sounds__background-music');
const buttonSound = document.querySelector('.sounds__button-sound');


startButton.addEventListener('click', function () {
    buttonSound.play();
    startWindow.style.opacity = '0';
    setTimeout(function () {
        startWindow.style.display = 'none';
        // startGame();
        header.style.display = 'block';
        setTimeout(function () {
            header.style.opacity = '1';
            backgroundMusic.play();
        }, 100);
    }, 1500);
});