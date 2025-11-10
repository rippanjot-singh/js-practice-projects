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

setdate();

btn.addEventListener('click', () => {
    if (future.value > '2025-12-31' && future.value != '') {
        console.log('hello', future.value);
        p.style.display = 'block';
        let calls = ['Calling API', 'Call Rejected', 'Calling NASA', 'Call Rejected', 'NASA Khaye Tatti', 'Data Fetched'];

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
    } else {
        //Make the alert color red

        alert('The Future Date Should Not Be The Same As The Current Year Or Earlier or Blank');
    }
})
console.log(window);



