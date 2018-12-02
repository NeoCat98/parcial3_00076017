var express = require('express');
var controlador = {};
var moduloBanco = require('../models/banco');

controlador.guardar = function(req,res){
    let data = {
        nombre: req.body.campo1,
        cadena: req.body.campo2,
        annio: req.body.campo3
    }
    moduloBanco.save(data,function(err){
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
    });
}

controlador.mostrar = function(req,res){
    moduloBanco.find({},function(req,res,err){
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
}

controlador.mostraruno = function(req,res){
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
}

controlador.modificar = function(req,res){
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
}

controlador.eliminar = function(req,res){
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
}

module.exports = controlador;