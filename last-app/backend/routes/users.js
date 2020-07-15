// require('dotenv').config()

const router = require('express').Router()
// const jwt = require('jsonwebtoken')
let User = require('../models/user.model')

router.route('/get').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Erorr: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname

    const newUser = new User({username, email, password, firstname, lastname})
    
    // const accessToken = jwt.sign(password, process.env.ACCESS_TOKEN_SECRET)
    // res.json({ accessToken: accessToken })

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Erorr: ' + err))
})

// function authToken(req, res, next){
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null ) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, password) => {
//         if (err) return res.sendStatus(403)
//         req.password = password
//         next()
//     })
// }

module.exports = router