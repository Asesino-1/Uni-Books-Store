// require('dotenv').config()
const bcrypt = require('bcrypt')

const router = require('express').Router()
// const jwt = require('jsonwebtoken')
let User = require('../models/user.model')

router.route('/get').get((req, res) => {
  var email = req.body.email
  User.findOne({ email: email })
  .then(users => console.log((users))) 
})
 router.route('/login').post(async(req, res) => {
    var newUser = {};
    newUser.email = req.body.email;
 var x = newUser.email
    newUser.password = req.body.password;
     User.findOne({ email: newUser.email })
      .then(async profile => {
        if (!profile) {
          res.send("User not exist");
        }else if(await bcrypt.compare(newUser.password, profile.password)){
            res.send({ status: "success" , profile:profile});
        }
        else if(newUser.password === profile.password){
          res.send({status:"success" , profile:profile})
        }
        else if((newUser.password !== profile.password)){
          res.send("wrong");
          }
      })
      .catch(err => res.status(400).json('Erorr: ' + err))
        
})

router.route('/add').post(async(req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const username = req.body.username
    const email = req.body.email
    const password = hashedPassword
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
