const dbQuery = require('../../helpers/dbQuery.json')
const Users = require('../../models/Users')
const mongoose = require('mongoose')

const getUsers = async (emailId) => {

    return new Promise(async (resolve, reject) => {
        try {
            Users.findOne({ emailId: emailId }, (err, user) => {
                if (err) {
                    reject({
                        status: 'INTERNAL_SERVER_ERROR',
                        message: err.message
                    })
                    return;
                }
                if (user) {
                    resolve({
                        message:user,
                        status:'OK'
                    })
                } else {
                    Users.create({emailId : emailId}, (err, result) => {
                        if (err) {
                            reject({
                                message:err.message,
                                status:'INTERNAL_SERVER_ERROR'
                            })
                            return;
                        }
                        resolve({
                            message: result,
                            status:'CREATED'
                        })
                    });
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

module.exports = getUsers

