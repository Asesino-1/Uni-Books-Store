const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
const connection = mongoose.connection
connection.once('open', () =>{
    console.log("mongoDB connected successfully")
})

const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})