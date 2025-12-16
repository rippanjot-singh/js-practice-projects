// variables
const game = document.querySelector('.game');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
let rightOver = [11, 21, 31, 41, 51, 61, 71, 81, 91];
let leftOver = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
const h2 = document.querySelector('.score');
const h22 = document.querySelector('.highscore');
let gameOver = false;
const eat = new Audio('./public/sfx/mixkit-hungry-man-eating-2252.wav');
const play = new Audio('./public/sfx/Kan Kar Gal Sun Makhna - Amar Singh Chamkila.mp3'); play.volume = 0.1;
const die = new Audio('./public/sfx/mkb-aag.m4a');
const main = document.querySelector('main');


let snake = [43, 42, 41];
let direction = 1;
let interval = null;
let fruitIndex = null;

for (let i = 0; i < 100; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    game.appendChild(box);
}
const boxes = document.querySelectorAll('.box');

// snak
snake.forEach(i => boxes[i].style.backgroundColor = 'green');

function randomFruit() {
    if (fruitIndex !== null) {
        boxes[fruitIndex].classList.remove('fruit');
        boxes[fruitIndex].style.backgroundColor = 'white';
    }

    let idx = Math.floor(Math.random() * 100);

    while (snake.includes(idx)) {
        idx = Math.floor(Math.random() * 100);
    }

    fruitIndex = idx;
    boxes[idx].style.backgroundColor = `red`;
    boxes[idx].classList.add('fruit');
}

function move() {
    const currentHead = snake[0];
    const newHead = currentHead + direction;

    if (
        newHead < 0 || newHead > 99 ||
        (direction === 1 && currentHead % 10 === 9) ||
        (direction === -1 && currentHead % 10 === 0)
    ) {
        killSnake();
        return;
    }

    if (snake.includes(newHead)) {
        killSnake();
        return;
    }

    snake.forEach(i => {
        boxes[i].style.backgroundColor = 'white';
        boxes[i].innerText = '';
    });

    snake.unshift(newHead);

    if (newHead === fruitIndex) {
        localStorage.setItem('highscore', localStorage.getItem('highscore') || 0);
        let score = ((snake.length - 3) * 10);
        randomFruit();
        h2.innerHTML = 'Score: ' + score;
        if (score > localStorage.highscore) {
            h22.innerHTML = 'High Score: ' + score;
            localStorage.highscore = score;
        }
        console.log(localStorage);

        eat.load();
        eat.play();

    } else {
        snake.pop();
    }

    for (let i = 1; i < snake.length; i++) {
        const l = 20 + (i * 1.5);
        boxes[snake[i]].style.backgroundColor = `hsla(120, 100%, ${l}%, 1.00)`;
    }

    boxes[snake[0]].style.backgroundColor = 'darkgreen';
    boxes[snake[0]].innerHTML = `<img src="./public/img/amitab bachan.png" width="100%" alt="">`;
    boxes[snake[0]].style.fontSize = '2rem';
}



h22.innerHTML = 'High Score: ' + localStorage.getItem('highscore');
function killSnake() {
    play.pause();
    die.play();
    setTimeout(() => {
        restartfnc();
    }, 2000)
    for (let i = 0; i < snake.length; i++) {
        boxes[snake[i]].style.backgroundColor = 'white';
        boxes[snake[i]].innerText = '';
    }

    clearInterval(interval);
    h1.innerHTML = 'Game over :( Press "Any Key" to restart the game';
    gameOver = true;
    console.log('game over');
}



function startGame() {
    snake = [43, 42, 41];
    direction = 1;
    randomFruit();
    if (interval) clearInterval(interval);
    interval = setInterval(move, 260);
    document.addEventListener('keydown', control);
    play.play();
}

function control(e) {
    if (e.key === 'ArrowUp' && direction !== 10) direction = -10;
    else if (e.key === 'ArrowDown' && direction !== -10) direction = 10;
    else if (e.key === 'ArrowLeft' && direction !== 1) direction = -1;
    else if (e.key === 'ArrowRight' && direction !== -1) direction = 1;
}
button.addEventListener('click', () => window.location.reload());

// R to restart
function restartfnc() {
    document.addEventListener('keydown', (e) => {
        if (gameOver) window.location.reload();
    });
}

// space to start
startCount = 0;
document.addEventListener('keydown', (e) => {
    if (startCount === 0) {
        startGame();
        startCount++;
    }
});
