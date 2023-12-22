const mongoose= require('mongoose')

const Users= new mongoose.Schema({
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    profile:{
        type:String,
        default:null
    }
})

module.exports= new mongoose.model('Users',Users) 