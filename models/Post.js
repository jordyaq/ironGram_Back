const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    name: String,

    mail:String,

    country: String,

    citi:String,

    state: String,

    paymentType:{
      type:String,
     
    },

    bottleSize:{
      
      enum:['Small', 'Medium', 'Big', 'Special'],
      default:"Medium"
    },

    quantity:{
      enum: String,
      default:"0"
    }
})

module.exports = mongoose.model('Post', postSchema)