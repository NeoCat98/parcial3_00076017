var mongo = require('mongoose')
var bancoModelo = mongo.Schema();

bancoModelo = {
    nombre: String,
    cadena: String,
    annio: String
}


module.exports = bancoModelo;