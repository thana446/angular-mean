const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    }
})

const Book = mongoose.model('Book' ,schema ,'books')

module.exports = Book;