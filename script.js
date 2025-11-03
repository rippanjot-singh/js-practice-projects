let setup = document.querySelector('#setup');
let punchline = document.querySelector('#punchline');
let revealBtn = document.querySelector('#revealBtn');


function getJoke(){
    fetch('https://official-joke-api.appspot.com/jokes/random/451')
    .then(response => response.json())
    .then(data => {
        setup.innerText = data[0].setup;
        punchline.innerText = data[0].punchline;
        revealBtn.style.display = 'block';
    })    
    .catch(err => console.log(err)
    );
    punchline.style.display = 'none';
}

function revealPunchline(){
    punchline.style.display = 'block';
}

//copyJoke()
function copyJoke(){
    navigator.clipboard.writeText(setup.innerText + '\n' + punchline.innerText);
}