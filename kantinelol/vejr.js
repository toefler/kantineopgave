document.addEventListener('DOMContentLoaded', () => {
    const forecastElement = document.getElementById('forecast');
  
    // Fetch data from the API
    fetch('https://65ddd3abdccfcd562f558d61.mockapi.io/api/v1/forecast/')
      .then(response => response.json())
      .then(data => {
        // Get a random forecast
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomForecast = data[randomIndex];
  
        // Display the forecast
        const forecastHTML = `
          <h2>${randomForecast.sky}</h2>
          <p>Temperature: ${randomForecast.temperature}°C</p>
          <p>Nedbør: ${randomForecast.rain_mm}mm</p>
        `;
        forecastElement.innerHTML = forecastHTML;
      })
      .catch(error => {
        console.error('Error fetching forecast:', error);
        forecastElement.innerHTML = '<p>Failed to fetch weather data.</p>';
      });
  });
  