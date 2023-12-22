const dbQuery = require('../../helpers/dbQuery.json')
const Products = require('../../models/Products')
const mongoose = require('mongoose')
const addProducts = async (name, url1, url2, url3, url4, description, price, stock, category) => {
    
    return new Promise(async (resolve, reject) => {
        try {
            const newProduct = new Products({
                name: name,
                url1: url1,
                url2: url2,
                url3: url3,
                url4: url4,
                description: description,
                price: price,
                stock: stock,
                category: category
            })
            newProduct.save().then(data=>[
                resolve({message:data, status:'OK'})
            ])
        } catch (error) {
            reject({
                status: 'INTERNAL_SERVER_ERROR',
                message: error.message
            })
        }
    })
}

module.exports = addProducts

