

const dbQuery = require('../../helpers/dbQuery.json')
const Orders = require('../../models/Orders')
const Users = require('../../models/Users')

const mongoose = require('mongoose')
const addOrders = async (emailId, productId, quantity) => {
    return new Promise(async (resolve, reject) => {
        try {
            Users.findOne({ emailId: emailId }).then(data=>{
                if(data.length){
                    Orders.create({userid:data[0]._id,productid:productId, quantity:quantity}).then(status=>{
                        resolve({
                            message:status,
                            status:'CREATED'
                        })
                    }).catch(e=>{
                        reject({
                            message:e.message,
                            status:'INTERNAL_SERVER_ERROR'
                        })
                    })
                }
            }).catch(e=>{
                reject({
                    message:e.message,
                    status:'INTERNAL_SERVER_ERROR'
                })
            });
        } catch (error) {
    reject({
                status: 'INTERNAL_SERVER_ERROR',
                message: error.message
            })
        }
    })
}

module.exports = addOrders

