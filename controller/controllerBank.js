var express = require('express');
var controlador = {};
var moduloBanco = require('../models/banco');

controlador.guardar = function(req,res){
    let data = {
        nombre: req.body.campo1,
        cadena: req.body.campo2,
        annio: req.body.campo3
    }
    moduloBanco.create({data},function(err){
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
    oduloBanco.find({},function(req,res,err){
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

module.exports = controlador;