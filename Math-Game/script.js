const heart = document.querySelectorAll('.heart');
const score = document.querySelector('#score');
const highScore = document.querySelector('#highScore');
const question = document.querySelector('#question');
const water = document.querySelector('#water');
const form = document.querySelector('form');
const input = document.querySelector('input');
let hi = 0;
let questions = [];
let scoreText = 0;
let highScoreText = 0;

highScoreText = localStorage.getItem('highScore');
highScore.innerHTML = `High Score: ${highScoreText}`;

function randomProblem() {
    let operator = ['+', '-', '*', '/'];
    let num1 = (Math.floor(Math.random() * 20) + 2);
    let num2 = (Math.floor(Math.random() * 20) + 2);
    let operatorIndex = Math.floor(Math.random() * operator.length);

    if (operatorIndex === 2) {
        num2 = Math.floor(Math.random() * 10);
    } else if (operatorIndex === 3) {
        num2 = Math.floor(Math.random() * 5);
    }

    let prob = `${num1} ${operator[operatorIndex]} ${num2}`;
    let n = eval(prob);

    if (typeof n === 'number' && !Number.isInteger(n)) {
        return randomProblem();
    } else {
        questions.push(prob);
        return prob;
    }
}

function randomPosition() {
    let x = Math.random() * (window.innerWidth - 80);

    const problem = document.createElement('div');

    problem.id = 'problem';
    problem.textContent = randomProblem();

    problem.classList.add(
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'w-[80px]',
        'h-[80px]',
        'bg-blue-200',
        'absolute'
    );

    // set left position properly
    problem.style.left = `${x}px`;

    question.appendChild(problem);



    // problem.forEach((p) => {
    //     p.style.top = '0px';
    // });
}

let interval50 = setInterval(() => {
    const problems = document.querySelectorAll('#problem');

    problems.forEach((problem) => {
        if (hi < 3) {
            if (problem.getBoundingClientRect().bottom > 650) {
                heart[hi].classList.remove('text-red-500');
                problem.remove();
                hi++;
            }
        } else {
            question.innerHTML = '';
            let h1 = document.createElement('h1');
            let button = document.createElement('button');
            button.textContent = 'Play Again';
            question.classList.add('flex', 'items-center', 'justify-center', 'flex-col');
            button.classList.add('text-2xl', 'font-bold', 'text-red-500', 'cursor-pointer');
            h1.classList.add('text-4xl', 'font-bold', 'text-red-500');
            h1.textContent = 'Game Over';
            question.appendChild(h1);
            question.appendChild(button);
            clearInterval(interval);
            button.addEventListener('click', () => {
                location.reload();
            })
        }
    });

}, 50);



randomPosition();

let interval = setInterval(() => {
    randomPosition();
    
}, 5000);

form.addEventListener('submit', (e) => {
    let problems = document.querySelectorAll('#problem');
    e.preventDefault();
    // console.log(input.value);

    questions.forEach((e) => {

        let n = eval(e);
        console.log(n);
        
        if (n === Number(input.value)) {
            scoreText += 10;
            problems.forEach((i) => {
                if(i.textContent === e){
                    i.remove();
                }
            })
            score.textContent = `Score: ${scoreText}`;
            if(scoreText > highScoreText){
                localStorage.setItem('highScore', scoreText);
                highScoreText = scoreText;
                highScore.textContent = `High Score: ${highScoreText}`;
            }
        }else{
            console.log('wrong');
        }
    })
    
    input.value = '';
});

