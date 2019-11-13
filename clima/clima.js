const axios = require('axios');

const getClima = async ( lat, lng ) => {

    try {
        
        const OPENWEATHER_UNITS = 'metric'
        const OPENWEATHER_API_KEY = 'a9000ba2fdde61917a31e582e88d29b9';
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${OPENWEATHER_API_KEY}&units=${OPENWEATHER_UNITS}`;
        const resultado = await axios.get(url);
        return resultado.data;
    } catch (error) {
        console.log(error.response);
        throw new Error('error al obtener clima');
    }
};

module.exports = {
    getClima,
}