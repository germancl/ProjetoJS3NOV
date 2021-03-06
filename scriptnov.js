let weather = {
    "apiKey": "cb004f3d4a095350e5e1521bab64ac8d",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey

        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },   
    displayWeather:function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "O tempo em " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Umidade: " + humidity + "%";
        document.querySelector(".wind").innerText = "Velocidade do vento: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
      weather.search();
  }
})

weather.fetchWeather("Uberaba");