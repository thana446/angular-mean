const router = require('express').Router()
const Book = require('../models/Book')

//Add book
router.route('/add-book').post((req ,res ,next) => {
    const {body} = req;
    Book.create(body,(err ,data) => {
        if(err) {
            next(err)
        }else {
            res.json(data)
            console.log('Book add successful')
        }
    })
    
})

//Get all books
router.route('/').get((req ,res ,next) => {
    Book.find((err ,data) => {
        if(err) {
            next(err)
        }else {
            res.json(data)
        }
    })
})

//Get book
router.route('/read-book/:id').get((req ,res ,next) => {
    const {id} = req.params
    Book.findById(id ,(err ,data) => {
        if(err) {
            next(err)
        }else {
            res.json(data)
        }
    })
})

//update book
router.route('/update-book/:id').put((req ,res ,next) => {
    const {body ,params} = req
    const {id} = params
    Book.findByIdAndUpdate(id, body,(err ,data) => {
        if(err) {
            next(err)
        }else {
            res.json(data)
            console.log('Book update successful')
        }
    })
})

//delete book
router.route('/delete-book/:id').delete((req ,res ,next) => {
    const {id} = req.params
    Book.findByIdAndRemove(id ,(err ,data) => {
        if(err) {
            next(err)
        }else {
            res.json(
                {
                    msg: data
                }
            )
            console.log('Book deleted')
        }
    })
})

module.exports = router