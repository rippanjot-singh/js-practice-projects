let btn = document.querySelector('.btn');
let present = document.querySelector('#present');
let future = document.querySelector('#future');
let fields = document.querySelectorAll('.field');
let currentdate = new Date();
let video = document.querySelector('video');
let p = document.querySelector('p')
let topdiv = document.querySelector('.top');

function setdate() {
    present.value = `${currentdate.getFullYear()}-${currentdate.getMonth() + 1}-${currentdate.getDate()}`;
}
function call() {

}


btn.addEventListener('click', () => {
    p.style.display = 'block';
    let calls = ['Calling API', 'Call Rejected', 'Calling NASA', 'Call Rejected', 'NASA KI MA KA BHOSDA', 'Data Fetched'];

    btn.style.display = 'none';
    fields.forEach((field) => {
        field.style.display = 'none';
    })
    let i = 0;
        setInterval(() => {
            i++;
            p.innerText = calls[i];
        }, 2000);
    setTimeout(() => {
        p.style.display = 'none';
        topdiv.innerHTML += '<video src="video/26-me-to-dunya-khatam-hai.mp4" autoplay></video>';
    }, 2000 * calls.length)
})

setdate();