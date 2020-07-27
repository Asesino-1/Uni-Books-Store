const router = require('express').Router()

let Post = require('../models/post')
const { db } = require('../models/post')

router.route('/get').get(function(req ,res){ 
    Post.find({},function(err,posts){
        res.json(posts)
    })
    .catch(err => console.error(`Failed to find documents: ${err}`))
  })

router.route('/add').post((req, res) => {
  
      const details = req.body.details
      const phone = req.body.phone
      const place = req.body.place
  
      const newPost = new Post({details,phone,place})
      
      // const accessToken = jwt.sign(password, process.env.ACCESS_TOKEN_SECRET)
      // res.json({ accessToken: accessToken })
  
      newPost.save()
      .then(() => res.json('Post added!'))
      .catch(err => res.status(400).json('Erorr: ' + err))
  })
  
  module.exports = router
