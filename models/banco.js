var express = require('express'); 
var mongo = require('mongoose');
var bancoModelo = mongo.Schema;


var banco = new bancoModelo({
    nombre: String,
    cadena: String,
    annio: String
});


module.exports = banco;