const cityInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
// const apiURL = "https://pro.openweathermap.org/data/2.5/forecast/climate?q=" + searchTerm + "&appid=81de0a25e101e669923b3eb2ce22b22e";
const url2 = 'https://public-holiday.p.rapidapi.com/2023/US';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f0c60bbd10mshd668c1982900867p1bc36ejsnfd2c1b4ba2c3',
        'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
    }
};
async function fetchFed() {
    try {
        const response = await fetch(url2, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchFed()
searchButton.addEventListener('click', function () {
    const searchTerm = cityInput.value.trim();
    getWeatherForecast(searchTerm)
    getMarsForecast()
})
function getWeatherForecast(searchTerm) {
    const apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchTerm + "&appid=1b379b898c61194663dd2297173af6e3&units=imperial";
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
    }
    function getMarsForecast() {
        const apiURL = "https://api.nasa.gov/insight_weather/?api_key=osI8fvHtbbF0ydXbH8DpUDeMsu8739ODLRjZXZaE&feedtype=json&ver=1.0"
        fetch(apiURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
            });
        }