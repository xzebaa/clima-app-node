
const axios = require('axios');

const headers = {
    'x-rapidapi-key' : '469dc05f0cmshd374b7ff5eac740p192adajsnbdd8ebdeea48',
}

const getLugarLatLng = async ( direccion ) => {

    let instance = axios.create({
        baseURL : `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
        timeout: 10000,
        headers
    });
    
    try {
        const respuesta = await instance.get();
        const { Results:resultados = [] } = respuesta.data
    
        if( resultados.length === 0 ) throw new Error(`no hay resultados para la direccion ${direccion}`)
    
        const { lat, lon : lng, name} = resultados[0];
        return { lat, lng, name};
    } catch (error) {
        console.log('error', error);
        throw new Error('Error al obtener ubicacion de ciudad');
    }
}

module.exports = {
    getLugarLatLng,
}