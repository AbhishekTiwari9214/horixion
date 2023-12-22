const mongoose= require('mongoose')

const Reels= new mongoose.Schema({
    uploadedBy:{
        type:String,
        required:true
    },
    reelUrl:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true,
    },
},{timestamps:true})

module.exports= new mongoose.model('Reels',Reels)