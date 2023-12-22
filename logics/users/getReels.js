

const dbQuery = require('../../helpers/dbQuery.json')
const Reels = require('../../models/Reels')
const mongoose = require('mongoose')


const getReels = async () => {

    return new Promise(async (resolve, reject) => {

       
        try {
            Reels.find({}, (err, reels) => {
                if (err) {
                    reject({
                        status: 'INTERNAL_SERVER_ERROR',
                        message: err.message
                    })
                } else {
                    resolve({
                        message:reels,
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

module.exports = getReels

