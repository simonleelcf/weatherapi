const axios = require('../utils/axios');
const City = require('./City');
const ForecastWeather = require('./ForecastWeather');
const CurrentWeather = require('./CurrentWeather');

class Weather {
    constructor() {}

    getData(city, country, weatherType) {
        // const key = `${city}/co`
        return Promise.all([
            axios.get(`/weather?q=${city},${country}`),
            axios.get(`/forecast?q=${city},${country}`),
        ]).then((dataArray) => {
            const current = dataArray[0].data;
            const forecast = dataArray[1].data;
            const weather = {
                city: new City(forecast.city),
                current: new CurrentWeather(current),
                forecast: forecast.list.map((i) => new ForecastWeather(i)),
            };
            filterData(weather, weatherType);
            return weather;
        });
    }
}
module.exports = Weather;

function filterData(data, weatherType) {
    if (weatherType === 'current') {
        delete data.forecast;
    }
    if (weatherType === 'forecast') {
        delete data.current;
    }
}
