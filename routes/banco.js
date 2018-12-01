var express = require('express');
var router = express.Router();
var moduloBanco = require('../models/banco');
var controladorBank = require('../controller/controllerBank')
//Agregar
router.post('/',controladorBank.guardar);

//Mostrar
router.get('/',controladorBank.mostrar);

router.get('/:id',function(req,res){
    moduloBanco.findOne({_id: req.params.id},function(req,res,err){
        if(err){
            status(500);
            res.json({
                status: 500,
                err
            })
        }
        else{
            res.json({
                status: ok
            })
        }
    })
});

//Modificar
router.put('/:id',function(req,res){
    update = {
        nombre: req.body.nombre,
        cadena: req.body.cadena,
        annios: req.body.annios,
    }
    moduloBanco.findByIdAndUpdate(req.params.id,update,function(req,res,err){
        if(err){
            status(500);
            res.json({
                status:500,
                err
            });
        }
        else{
            res.json({
                status: ok
            });
        }
    })
});

//Eliminar
router.delete('/:id',function(req,res){
    moduloBanco.findByIdAndRemove(req.params.id,function(req,res,err){
        if(err){
            status(500);
            res.json({
                status:500,
                err
            });
        }
        else{
            res.json({
                status: ok
            });
        }
    })
});

module.exports = router;