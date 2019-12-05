const axios = require('axios');
const mapBoxToken = 'pk.eyJ1IjoiY29tYW45MDcwMTQiLCJhIjoiY2sxbTRoamNhMGJzMTNjbnN5cmxic3N1YiJ9.MPQF7Xmo6Lj68RgA65KVig';
const locationTemperature = require('./getTemperatureForCurrentLocation');

const transformUserInputIntoTemperature = async (userInputLocation) => {
    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInputLocation}.json?access_token=${mapBoxToken}`;
    // Transforming the user user input, from text to coordinates, then getting the temperature for those coordinates.
    return await axios.get(mapBoxUrl)
            .then (res => {
                return res.data.features[0].center
            })
            .then((currentLocation) => {
              return locationTemperature.getTemperatureForCurrentLocation(currentLocation, userInputLocation)
            })
            .catch(error => console.log(error))
            
    }

exports.transformUserInputIntoTemperature = transformUserInputIntoTemperature