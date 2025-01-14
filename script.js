console.log('Script loading...');

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
        const moonRise = data.astronomy.astro.moonrise;
        document.getElementById('moon-phase').innerText = `Moon Phase: ${moonPhase}`;
    })
    .catch(error => console.error('Error:', error));

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing particles...');
    
    if (typeof particlesJS !== 'function') {
        console.error('particles.js not loaded properly');
        return;
    }

    try {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 160,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
        console.log('Particles initialized successfully');
    } catch (error) {
        console.error('Error initializing particles:', error);
    }
});



