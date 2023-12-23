

const dbQuery = require('../../helpers/dbQuery.json')
const Users = require('../../models/Users')
const Orders = require('../../models/Orders')

const mongoose = require('mongoose')


const getOrders = async (emailId) => {

    return new Promise(async (resolve, reject) => {

       
        try {
            Users.find({emailId:emailId}).then(data=>{
                if(data.length){
                    Orders.find({userid:data[0]._id}).then(data=>{
                        resolve({message:data, status:'OK'})
                    }).catch(e=>{
                        reject({message:e.message, status:'OK'})
                    })

                }else{
                    reject({
                        message:'no user found',
                        status:'NOT_FOUND'
                    })
                }
            })
        } catch (error) {
    reject({
                status: 'INTERNAL_SERVER_ERROR',
                message: error.message
            })
        }
    })
}

module.exports = getOrders

