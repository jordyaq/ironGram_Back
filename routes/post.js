const express = require('express');
const router  = express.Router();

const Post = require('../models/Post')
const User = require('../models/User')

const multer = require('multer')
const upload = multer({ dest: './public/pics/' })



router.post('/post'), (req,res,next) => {
Post.create()
.then(post =>{
  console.log(post)

})
.catch(e=>res.json(e))

res.status(200).json(post)


}









router.get('/', (req,res,next) => {
  console.log('si')
  Post.find()
    .then(data => {
      return res.status(200).json({
        ok: true,
        data

      })
    })
})




module.exports = router