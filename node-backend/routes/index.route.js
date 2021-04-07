const router = require('express').Router()
const path = require('path')

router.route('/').get((req ,res ,next) => {
    res.sendFile(path.join(__dirname ,'dist/index.html'))
})

module.exports = router