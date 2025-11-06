let cell = document.querySelectorAll(".cell");
let sm = document.querySelector("#statusMessage");
let restart = document.querySelector("#restartButton");
let board = document.querySelector("#gameBoard");
h1 = document.querySelector("h1");
let X = "X";
let O = "O";
let turn = 0;

function win(){
    chances = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]
    for (let i = 0; i < chances.length; i++) {
            if (O == cell[chances[i][0] - 1].innerHTML && O == cell[chances[i][1] - 1].innerHTML && O == cell[chances[i][2] - 1].innerHTML) {
                h1.innerHTML = "O won!!!";
                sm.innerHTML = "";
            }
            else if (X == cell[chances[i][0] - 1].innerHTML && X == cell[chances[i][1] - 1].innerHTML && X == cell[chances[i][2] - 1].innerHTML) {
                h1.innerHTML = "X won!!!";
                sm.innerHTML = "";
            }
        }
}
function draw(){
    let emptycell = 0;
        cell.forEach((cell) => {
            if (cell.innerHTML !== '') {
                emptycell++
            }
        })
        if (emptycell == 9) {
            h1.innerHTML = "Draw";
            sm.innerHTML = "";
        }
}


for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        console.log('hi tanya');
        
        turn++
        if (cell[i].innerHTML == "") {
            if (turn % 2 == 0) {
                cell[i].innerHTML = X;
                sm.innerHTML = "O's Turn";
            }
            else {
                cell[i].innerHTML = O;
                sm.innerHTML = "X's Turn";
            }
        }

        win();

        draw();
    })
}

function restartfnc(){
    cell.forEach((cell) => {
        cell.innerHTML = "";
        h1.innerHTML = "Tic Tac Toe";
        sm.innerHTML = "X's Turn";
    })
}

restart.addEventListener('click', () => {
    restartfnc();
})