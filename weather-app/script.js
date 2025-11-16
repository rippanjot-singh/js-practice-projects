// index.html
// Variables and querySelectors
const input = document.querySelector('input');
const button = document.querySelector('button');
const loc = document.querySelector('.location');
const temp = document.querySelector('.temp h1');
const windspeed = document.querySelector('.windspeed h1');
const winddirection = document.querySelector('.winddirection h1');
const form = document.querySelector('form');
const customCursor = document.querySelector('.cursor');

//EVENT LISTENERS
form.addEventListener('submit', (e) => {
    e.preventDefault();
    loc.innerText = (input.value).toUpperCase();
    getData();
})

//functions
async function getData() {
    try {
        let res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input.value}`);
        let data = await res.json();
        let lat = data.results[0].latitude;
        let lon = data.results[0].longitude;

        let res2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        let data2 = await res2.json();
        loc.innerText = input.value;
        temp.innerText = data2.current_weather.temperature + ' °C';
        windspeed.innerText = data2.current_weather.windspeed + ' km/h';
        winddirection.innerText = data2.current_weather.winddirection + ' °';

    }
    catch (err) {
        console.log(err);
    }
}

//EVENT LISTENERS


document.addEventListener('mousemove', (e) => {
  // Update the custom cursor's position to follow the mouse
  customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Optional: Add interactive effects on hover or click
document.addEventListener('mousedown', () => {
  customCursor.style.backgroundColor = 'rgb(83, 155, 80)'; // Example: Change color on click
});

document.addEventListener('mouseup', () => {
  customCursor.style.backgroundColor = 'rgb(32, 58, 31)'; // Example: Revert color on release
});