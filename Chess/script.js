let board = document.querySelector(".board");
let boardcell = [
    ['rook-b', 'knight-b', 'bishop-b', 'queen-b', 'king-b', 'bishop-b', 'knight-b', 'rook-b'],
    ['pawn-b', 'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['pawn-w', 'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w'],
    ['rook-w', 'knight-w', 'bishop-w', 'queen-w', 'king-w', 'bishop-w', 'knight-w', 'rook-w']
]
let count = 0

const renderBoard = () => {
    boardcell.forEach(row => {
        count++
        row.forEach(e => {
            count++
            let cell = document.createElement('div');
            cell.classList.add('cell')
            cell.classList.add('p-1', 'flex', 'items-center', 'justify-center', 'select-none', 'cursor-pointer')
            if (count % 2 == 0) {
                cell.classList.add('bg-[#F9F1DF]')
            } else {
                cell.classList.add('bg-[#A64E27]')
            }
            cell.textContent = e
            if (e.endsWith('w')) {
                cell.classList.add('w')
            } else if (e.endsWith('b')) {
                cell.classList.add('b')
            }
            if (e !== ' ') {
                cell.innerHTML = `<img src="./peices/${e}.svg" alt="">`
            }
            board.appendChild(cell);
        })
    })
}
renderBoard()

let cell = document.querySelectorAll('.cell')
let selected = []

cell.forEach(e => {
    e.addEventListener('click', () => {
        if (selected.length == 0 && e.innerHTML !== ' ') {
            selected = []
            e.classList.add('bg-blue-500')
            selected.push(e)
            console.log(selected);
            console.log(e.innerHTML);

        } else if (e.innerHTML == selected[0].innerHTML) {
            e.classList.remove('bg-blue-500')
            selected = []
            console.log(selected);
            console.log(e.innerHTML);

        } else if (selected.length == 1) {
            e.innerHTML = selected[0].innerHTML
            selected[0].innerHTML = ' '
            selected[0].classList.remove('bg-blue-500')
            selected = []
            console.log(selected);
            console.log(e.innerHTML);
        }
    })
})