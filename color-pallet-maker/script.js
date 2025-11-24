const generate = document.querySelector('#generate');
const copy = document.querySelector('#copy');
const pallet = document.querySelector('.pallet');
const color = document.querySelectorAll('.color');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');



let h = Math.floor(Math.random() * 360);
let s = 50;
let l = 50;

function setColorDark() {
    s = 60;
    l = 50;
    first.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;

    h -= 20;
    s -= 10;
    second.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;

    h -= 30;
    l += 10;
    s -= 10
    third.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;

    l += 30;
    s -= 10;
    fourth.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;

    l -= 30;
    h += 180;
    s += 20
    fifth.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;

    s = 50;
    l = 50;
    color.forEach((div) => {
        div.style.border = "none";
        div.innerText = div.style.backgroundColor;
    })
}

function setPastelColor() {
    l = 60;
    s = 50;
    setColorDark();
}
function lightToDark() {
    setColorDark();
    color.forEach((div) => {
        div.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
        l += 8;
    })
    s = 50;
    l = 50;
}
function rgbtohex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

copy.addEventListener('click', () => {
    if (first.style.backgroundColor !== '') {
        alert('Colors Copied');
        let hexColors = [];
        color.forEach((div) => {
            hexColors.push(rgbtohex(div.style.backgroundColor));
        })
        navigator.clipboard.writeText(hexColors);
    }
    else {
        alert('Generate colors first!');
    }
})

function randomFunction() {
    let randomFunctions = [setColorDark, setPastelColor, lightToDark];
    let randomIndex = Math.floor(Math.random() * randomFunctions.length);
    console.log(randomIndex);
    randomFunctions[randomIndex]();
}

generate.addEventListener('click', () => {
    randomFunction();
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        randomFunction();
    }
})