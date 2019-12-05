const axios = require('axios');
const darkSkyURL = 'https://api.darksky.net/forecast/bfa36b7c01ae0cd4e9ef4b9eb33cd08b/';

const getTemperatureForCurrentLocation = async (locationCoordinates, locationDenomination) => {
    const latitude = locationCoordinates[1];
    const longitude = locationCoordinates[0];
    return await axios.get(`${darkSkyURL}${latitude},${longitude}?units=si`)
        .then(response => {
            return `<p>Right now, in ${locationDenomination}, there are <b>${response.data.currently.temperature}</b> Celsius.</p>`;
        })
        .catch(error => console.log(error))
}

exports.getTemperatureForCurrentLocation = getTemperatureForCurrentLocation