//Variables & querySelectors
let fi = document.querySelector('.first');
let si = document.querySelector('.second');
let fs = document.querySelector('.fs');
let ss = document.querySelector('.ss');
let first = document.querySelector('.first-currncy');
let second = document.querySelector('.second-currncy');
let select = document.querySelectorAll('select');
let inp = document.querySelectorAll('input');
let cr = {};

//API
async function loadRates() {
    try {
        const res = await fetch('https://v6.exchangerate-api.com/v6/af880c9c71e6800c1ea09cd7/latest/USD');
        const data = await res.json();
        cr = data.conversion_rates;

        select.forEach(sel => {
            for (const key in cr) {
                sel.innerHTML += `<option value="${key}">${key}</option>`;
            }
        });
    } catch (err) {
        console.error('Error:', err);
    }
}
loadRates();

//functions
function convertsi() {
    let amt = Number(inp[0].value);
    let rate = cr[fs.value];

    if (cr[ss.value] > cr[fs.value]) {
        inp[1].value = (amt * cr[ss.value] / cr[fs.value]).toFixed(2);
    }
    else if (cr[ss.value] < cr[fs.value]) {
        inp[1].value = (amt / rate).toFixed(2);
    }
    else {
        inp[1].value = amt;
    }
}
function convertfi() {
    let amt = Number(inp[1].value);
    let rate = cr[ss.value];

    if (cr[fs.value] > cr[ss.value]) {
        inp[0].value = (amt * cr[fs.value] / cr[ss.value]).toFixed(2);
    }
    else if (cr[fs.value] < cr[ss.value]) {
        inp[0].value = (amt / rate).toFixed(2);
    }
    else {
        inp[0].value = amt;
    }
}

//EventListeners
fs.addEventListener('change', convertsi);
ss.addEventListener('change', convertfi);
inp[0].addEventListener('input', convertsi);
inp[1].addEventListener('input', convertfi);