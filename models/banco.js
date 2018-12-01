var express = require('express');
var modulo = {};

var Schemamodulo = new Schema{
    id: {
        type: String,

    },
    nombre: String,
    cadena: String,
    annio: date
}



exports.modulo = modulo;