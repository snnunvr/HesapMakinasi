const url = 'https://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid={API key}'
const key = '47c51d7adcb1e2fa62d918b2c12e7061'

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`
    
    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`
    
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].descripton

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C /
    ${Math.round(result.main.temp_max)}°C`
    
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)
