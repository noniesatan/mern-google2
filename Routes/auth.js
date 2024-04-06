const express = require('express')

const router = express.Router()
const {createAndUpdateUser,currentUser} = require('../Controllers/auth')
const {authCheck} = require('../Middleware/authCheck')


//http://localhost:5003/api/auth
router.post('/auth',authCheck,createAndUpdateUser)
router.post('/current-user',authCheck,currentUser)

module.exports = router