const router= require('express').Router()
const Contact= require('../models/contactus')
const mongoose=require('mongoose')




router.post('/',async(req,res)=>{
    console.log(req);
    // res.render('contact')
    const formdata= new Contact({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message
    })

    try { 
        
        const data = await formdata.save()
        res.render('index')
        console.log(data)
        
    } catch (error) {
        res.json(error)
        
    }
    
}) 
module.exports=router