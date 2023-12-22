

const dbQuery = require('../../helpers/dbQuery.json')
const Products = require('../../models/Products')
const mongoose = require('mongoose')


const getProducts = async () => {

    return new Promise(async (resolve, reject) => {

       
        try {
            Products.find({}, (err, products) => {
                if (err) {
                    reject({
                        status: 'INTERNAL_SERVER_ERROR',
                        message: err.message
                    })
                } else {
                    resolve({
                        message:products,
                        status:'OK'
                    })  
                }
              });
        } catch (error) {
    reject({
                status: 'INTERNAL_SERVER_ERROR',
                message: error.message
            })
        }
    })
}

module.exports = getProducts

