const express = require('express');
const router  = express.Router();
const path = require('path')
const Formulario = require('../models/Formulario')
const {verifyToken} =require('../helpers/jwt')
//
const multer = require('multer')
const upload = multer({ dest: './public/pics/' })


router.post('/', verifyToken, (req,res,next)=>{
    //if(req.file) req.body.link = '/pics/' + req.file.originalname
    req.body.user = req.user._id
    Formulario.create(req.body)
    .then(pic=>res.status(200).json(pic))
    .catch(e=>next())
})

router.get('/',(req,res,next)=>{
    Formulario.find()
        .then((formGet) => {
            return res.status(200).json({
                ok: true,
                formGet
            })
        })
})

module.exports = router