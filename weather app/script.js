// function getWeather() {
//     const city = document.getElementById('city').value;
//     const apiKey = 'd3f80bc3435d4af09e6202531231007'; // Replace with your OpenWeatherMap API key
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
//     fetch(apiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('City not found');
//         }
//         return response.json();
//       })
//       .then(data => {
//         const weatherInfo = document.getElementById('weather-info');
//         const { name, main, weather } = data;
  
//         const weatherHTML = `
//           <h2>${name}</h2>
//           <p>Temperature: ${main.temp}°C</p>
//           <p>Weather: ${weather[0].main}</p>
//         `;
//         weatherInfo.innerHTML = weatherHTML;
//       })
//       .catch(error => {
//         const weatherInfo = document.getElementById('weather-info');
//         weatherInfo.innerHTML = `<p>${error.message}</p>`;
//       });
//   }
  
function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'd3f80bc3435d4af09e6202531231007'; // Replace with your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        const { location, current } = data;
  
        const weatherHTML = `
          <h2>${location.name}, ${location.country}</h2>
          <p>Temperature: ${current.temp_c}°C</p>
          <p>Weather: ${current.condition.text}</p>
        `;
        weatherInfo.innerHTML = weatherHTML;
      })
      .catch(error => {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
      });
  }
  