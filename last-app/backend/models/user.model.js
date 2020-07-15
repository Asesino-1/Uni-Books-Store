const mongoose = require('mongoose')
const { isValidPassword } = require('mongoose-custom-validators')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 9
    },
    password: {
         type: String, 
         required: [true,'Empty password are not allowed'],
         trim: true,
         validate: {
            validator: isValidPassword,
            message: 'Password must have at least: 10 letters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.'
          },
         },
         firstname:{
             type: String,
             required: true,
             trim: true
         },
         lastname:{
             type: String,
             required: true,
             trim: true
         }

}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User