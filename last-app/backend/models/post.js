const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    details:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post