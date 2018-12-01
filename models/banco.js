var mongo = require('mongoose')
var bancoModelo = mongo.Schema();

bancoModelo = {
    id: {
        type: String,
        unique
    },
    nombre: String,
    cadena: String,
    annio: String
}


module.exports = modelo;