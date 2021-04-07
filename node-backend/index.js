const express = require('express')
const path = require('path')
const cors = require('cors')
const mongodb = require('./database/db')
const mongoose = require('mongoose')
const app = express()
const indexRoute = require('./routes/index.route')
const bookRoute = require('./routes/book.route')
const { static } = require('express')
const createError = require('http-errors');

//connect db
mongoose.Promise = global.Promise
mongoose.connect(mongodb.db ,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('Database connected') ,(err) => console.log('Database error: ',err))

// middle ware
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cors())
app.use(express.static(path.join(__dirname ,'dist')))

//Base route
app.use('/' ,indexRoute)

//API
app.use('/api' ,bookRoute)

//PORT
const port = process.env.PORT || 3000
app.listen(port ,() => {
    console.log(`listening on port ${port}`)
})

//404 Handler
app.use((req ,res ,next) => {
    next(createError(404))
})

//Error Handler
app.use((err ,req ,res ,next) => {
    console.error(err.message)
    res.status(err.statusCode || 500).send(err.message)
})