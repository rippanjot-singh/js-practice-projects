const form = document.querySelector("form");
const ammount = document.getElementById("amount");
const downPayment = document.getElementById("down-payment");
const rate = document.getElementById("rate");
const time = document.getElementById("time");
const calculate = document.getElementById("calculate");
const rateType = document.getElementById("rate-type");
const timeType = document.getElementById("time-type");
const answer = document.getElementById("answer");
let emi = 0;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let amt = Number(ammount.value);
    let dp = Number(downPayment.value);
    let rt = Number(rate.value);
    let tm = Number(time.value);
    let p = amt - (amt * (dp / 100));
    let r;
    let n;
    if (timeType.value === "Month") {
        n = tm;
        if (rt != "" || rt != 0) {
            if (rateType.value === "Month") {
                r = rt/100;
                emi = (p * r * ((1 + r) ** n)) / (((1 + r) ** n) - 1);
            } else if(rateType.value === "Year") {
                r = (rt/100) / 12;
                emi = (p * r * ((1 + r) ** n)) / (((1 + r) ** n) - 1);
            }
        } else if(rt == "" || rt == 0) {
            emi = p / n;
        }
    }
    else if (timeType.value === "Year") {
        n = tm * 12;
        if (rt != "" || rt != 0) {
            if (rateType.value === "Month") {
                r = (rt/100);
                emi = (p * r * ((1 + r) ** n)) / (((1 + r) ** n) - 1);
            } else if(rateType.value === "Year") {
                r = (rt/100) / 12;
                emi = (p * r * ((1 + r) ** n)) / (((1 + r) ** n) - 1);
            }
        } else if(rt == "" || rt == 0) {
            emi = p / n;
        }
    }
    answer.innerHTML += `<br> <p> EMI: ${emi.toFixed(2)} </p> <br> <p> Down Payment: ${(amt * (dp / 100)).toFixed(2)} </p> <br> <p> Total Amount: ${emi * n.toFixed(2)} </p> <br> <p> Total Interest: ${emi * n.toFixed(2) - p.toFixed(2)} </p>`;
});