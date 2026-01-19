const board = document.querySelector('.board')
let hearts = document.querySelectorAll('.heart')
let heart = 0;
let selected = []
let randArr = []


const randNum = () => {
    for (let i = 0; i < 6; i++) {
        let randInd = Math.round(Math.random() * 35);

        randArr.map(e => {
            if (e === randInd) {
                randInd = Math.round(Math.random() * 36);
            }
        })
        randArr.push(randInd)
    }
    console.log(randArr);
    randArr.sort((a, b) => a - b);
    console.log(randArr);
}
randNum()

const createCells = () => {
    for (let i = 0; i < 36; i++) {
        let cell = document.createElement('div')
        cell.classList.add('cell', 'rounded', 'border-1')
        board.appendChild(cell)
    }
}
createCells();

const cells = document.querySelectorAll('.cell')

const randomCell = () => {
    cells.forEach((i, idx) => {

        randArr.forEach(e => {
            if (e === idx) {
                i.classList.add('bg-white', 'rounded', 'opacity-100')
            } else {
                i.classList.add('border-white', 'opacity-30')
            }
        })
    })
}
randomCell()

const selectCell = () => {
    cells.forEach((e, idx) => {

        e.addEventListener('click', () => {
            if (selected.length < 6) {
                e.classList.add('bg-green-500', 'opacity-100')
                selected.push(idx)
                if (selected.length === 6) {
                    selected.sort((a, b) => a - b);
                    console.log(selected);

                    if (JSON.stringify(selected) == JSON.stringify(randArr)) {
                        cells.forEach((e) => {
                            e.classList.remove('bg-green-500', 'opacity-100')
                        })
                        selected = [];
                        randArr = [];
                        console.log(randArr);
                        randNum();
                        randomCell();
                        timer();
                        console.log('true');
                    } else {
                        // cells.forEach((e) => {
                        //     e.classList.remove('bg-green-500', 'opacity-100')
                        // })
                        selected.forEach(e => {
                            randArr.forEach(i => {
                                if (e !== i) {
                                    cells[e].classList.add('bg-red-500', 'opacity-100')
                                } 
                                else {
                                    cells[e].classList.add('bg-green-500', 'opacity-100')
                                }
                            })
                        })
                        setTimeout(e => {
                            cells.forEach((e) => {
                                e.classList.remove('bg-red-500', 'bg-green-500', 'opacity-100')
                            })
                            selected = [];
                            randArr = [];
                            console.log(randArr);
                            randNum();
                            randomCell();
                            timer();
                            hearts.forEach((e, i) => {
                                if (i === heart) {
                                    e.classList.remove('text-red-500')
                                    e.classList.add('text-neutral-300')
                                    return;
                                }
                            })
                            console.log('false');
                            heart++;
                        }, 2000)
                    }
                }
            }
        })
    })
}
const timer = () => {
    setTimeout((e) => {
        cells.forEach((e) => {
            e.classList.remove('bg-white', 'opacity-100')
            e.classList.add('opacity-30')
        })
    }, 3000)
}
timer();
setTimeout((e) => {
    cells.forEach((e) => {
        e.classList.remove('bg-white', 'opacity-100')
        e.classList.add('opacity-30')
    })
    selectCell()
}, 3000)