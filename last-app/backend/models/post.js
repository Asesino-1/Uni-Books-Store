const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    details:{
        type:String,
        required: true
    },
    img:{
         data: Buffer, contentType: String 
    },
    price:{
        type:String
    },
    phone:{
        type:String,
        required:true,
        minlength: 10
    },
    place:{
        type:String,
        required:true
    }
}, {
    timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post