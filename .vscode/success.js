const express = require('express')
const router = express.Router()

router.use("/success",(req,res,next)=>{

    res.send('<h1> Form submitted succesfully</h1>')
})
module.exports=router