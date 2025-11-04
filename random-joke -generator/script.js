let setup = document.querySelector('#setup');
let punchline = document.querySelector('#punchline');
let revealBtn = document.querySelector('#revealBtn');
let categories = document.querySelector('#category');
let getJokeBtn = document.querySelector('.get-joke');             





    function getJoke() {
        // let category = categories.value;
        console.log(categories.value);
        if (categories.value === 'random') {
            fetch(`https://official-joke-api.appspot.com/jokes/random`)
            .then(response => response.json())
            .then(data => {
                joke = Array.isArray(data) ? data[0] : data;
                setup.innerText = joke.setup;
                punchline.innerText = joke.punchline;
                revealBtn.style.display = 'block';
            })
            .catch(err => console.log(err)
            );
        punchline.style.display = 'none';
        }
        else{
            let category = categories.value;
            fetch(`https://official-joke-api.appspot.com/jokes/${category}/random`)
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
    }

categories.addEventListener('change', getJoke);
getJokeBtn.addEventListener('click', getJoke);




function revealPunchline() {
    punchline.style.display = 'block';
    revealBtn.style.display = 'none';
}

//copyJoke()
function copyJoke() {
    navigator.clipboard.writeText(setup.innerText + '\n' + punchline.innerText);
}   