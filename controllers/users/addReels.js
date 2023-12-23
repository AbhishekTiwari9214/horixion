const addReelsLogic = require('../../logics/users/addReels.js')
const {failureResponse,successResponse}= require('../../utils/responseSchema')
const statusCode= require('../../utils/stausCodes.json')
const addReels = async (req, res) => {
    try {
        const emailId= req.body.emailId
        const reel= req.body.reel
        const productId= req.body.productId
        await addReelsLogic(emailId,reel,productId).then(data => {
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
module.exports = addReels