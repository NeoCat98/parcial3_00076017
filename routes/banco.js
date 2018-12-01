var express = require('express');
var router = express.Router();
var moduloBanco = require('../models/banco');
var controladorBank = require('../controller/controllerBank')
//Agregar
router.post('/',controladorBank.guardar);

//Mostrar
router.get('/',controladorBank.mostrar);

router.get('/:id',controladorBank.mostraruno);

//Modificar
router.put('/:id',controladorBank.modificar);

//Eliminar
router.delete('/:id',controladorBank.eliminar);

module.exports = router;