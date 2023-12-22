const addOrdersLogic = require('../../logics/users/addOrders.js')
const {failureResponse,successResponse}= require('../../utils/responseSchema')
const statusCode= require('../../utils/stausCodes.json')
const addOrders = async (req, res) => {
    try {
    
        const emailId= req.body.emailId

        await addOrdersLogic(emailId).then(data => {
            

            let successresponse = successResponse(data.message, statusCode[data.status].statusCode)
            res.status(successresponse.statusCode).json(successresponse.body)
        }).catch(e => {

            let failureresponse = failureResponse(e.status, e.message, statusCode[e.status])
            res.status(failureresponse.statusCode.statusCode).json(failureresponse.body)
        })
    } catch (error) {        
        
        let failureresponse = failureResponse(statusCode['INTERNAL_SERVER_ERROR'], error.message, 500)        
        res.status(failureresponse.statusCode).json(failureresponse.body)
    }
}
module.exports = addOrders