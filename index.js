const express= require('express')
const app=express()
const mongoose= require('mongoose')
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.listen(9000,()=>{
    console.log('server has started')
})
mongoose.connect('mongodb+srv://ecomapi:Abhi9214@cluster0.0mbwxs0.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('database has been connected')
})




