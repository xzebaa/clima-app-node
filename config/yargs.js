const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad',
        demand: true,
    }
}).argv;

module.exports = {
    argv,
}