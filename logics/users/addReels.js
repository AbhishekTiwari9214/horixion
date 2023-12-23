

const dbQuery = require('../../helpers/dbQuery.json')

const  Users = require('../../models/Users')
const Reels= require('../../models/Reels')
const mongoose = require('mongoose')


const addReels = async (emailId,reelUrl,productId) => {

    return new Promise(async (resolve, reject) => {
        
       
        try {
            Users.find({emailId:emailId}).then(data=>{
                if(data.length){
                    Reels.create({uploadedBy:data[0]._id,reelUrl:reelUrl,productId: productId}).then(data=>{
                        resolve({
                            message:data,
                            status:'CREATED'
                        })
                    }).catch(e=>{
                        reject({
                            status: 'INTERNAL_SERVER_ERROR',
                            message: e.message
                        })
                    })                    
                }else{
                    reject({
                        message:'no USER found',
                        status:'NOT_FOUND'
                    })
                }
            }).catch(e=>{
                reject({
                    status: 'INTERNAL_SERVER_ERROR',
                    message: e.message
                })
            })
        } catch (error) {
    reject({
                status: 'INTERNAL_SERVER_ERROR',
                message: error.message
            })
        }
    })
}

module.exports = addReels

