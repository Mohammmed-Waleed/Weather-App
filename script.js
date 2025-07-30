const apiKey = "your_api_key_here";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "Please enter a city.";
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      const { name, main, weather } = data;
      result.innerHTML = `
        <strong>City:</strong> ${name} <br>
        <strong>Temperature:</strong> ${main.temp}°C <br>
        <strong>Condition:</strong> ${weather[0].main}
      `;
    })
    .catch(() => {
      result.innerHTML = "Could not fetch weather data. Please check the city name.";
    });
}
