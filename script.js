const apiKey = '5faf94bd8a8b4fb5a8f25543251401';
const city = 'Los Angeles'; // Change to your city

// Fetch weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a67cf6d363515cb40b423e94ada80733&units=imperial`)
    .then(response => response.json())
    .then(data => {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        document.getElementById('weather').innerText = `Los Angeles: ${weatherDescription}, ${temperature}°F`;
    })
    .catch(error => console.error('Error:', error));

// Fetch moon phase data
fetch(`https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
        const moonPhase = data.astronomy.astro.moon_phase;
        document.getElementById('moon-phase').innerText = `Moon Phase: ${moonPhase}`;
    })
    .catch(error => console.error('Error:', error));



