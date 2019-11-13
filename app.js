const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const getCiudad = async () => {

    try {
        const direccion = encodeURI( argv.direccion );
        const city = await getLugarLatLng(direccion);
        const weather_city = await getClima( city.lat, city.lng )
        console.log(`El clima de ${city.name} es de ${weather_city.main.temp} ºC`);
    } catch (error) {
        console.log(`no se pudo determonar el clima de ${argv.direccion}`);
    }
    
}

getCiudad();
