const mongoose= require('mongoose')

const Orders= new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    productid:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    delivered:{
        type:Boolean,
        default:false
    },
    canceled:{
        type:Boolean,
        default:false
    }
},{ timestamps: true } )

module.exports= new mongoose.model('Orders', Orders)