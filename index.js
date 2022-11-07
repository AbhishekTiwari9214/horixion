const express= require('express')
const app=express()
const mongoose= require('mongoose')
const contactroute=require('./routes/contactform')
const path = require('path')
const hbs=require('hbs')
const bodyParser = require("body-parser")
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
hbs.registerPartials(__dirname + '/views/partials');
                      
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs')

app.use(express.json())
app.listen(9000,()=>{
    console.log('server has started')
})

mongoose.connect('mongodb+srv://ecomapi:Abhi9214@cluster0.0mbwxs0.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('database has been connected')
})

// hbs.registerPartials(__dirname + '/views/partials');
// app.get('/about',(req,res)=>{
// res.render('about')

// })
// app.get('/',(req,res)=>{
//     res.render('contact')
    
//     })
    
app.get('/services',(req,res)=>{
        res.render('services')
        
})
app.get('/',(req,res)=>{
            res.render('index')
            
            })

app.use('/',contactroute)



