const express= require('express')
const app=express()
const mongoose= require('mongoose')
require('dotenv').config({path:'./config.env'})
const {users,admin}= require('./routes/index')
const fileupload= require('express-fileupload')

app.use(fileupload())

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api',users)
app.use('/api',admin)

app.get('/',(req,res)=>{
res.json({message:'hello from the server',
status:'OK'
}).status(200)
})
mongoose.connect(process.env.MONGO_CONNECTION_STRING,()=>{
    app.listen(process.env.PORT || 8002,()=>{
        console.log('server has started at :' + process.env.PORT || 8002)
     }) 
}).catch(e=>{
    console.log(e.message);
})



