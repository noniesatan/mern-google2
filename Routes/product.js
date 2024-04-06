const express = require('express')

const router = express.Router()

router.get('/product',(req,res)=>{
    
    res.send('Heelo reoutes product')
})

module.exports = router