const addProductsLogic = require('../../logics/admin/addProducts')
const {failureResponse,successResponse}= require('../../utils/responseSchema')
const statusCode= require('../../utils/stausCodes.json')
const addProducts = async (req, res) => {
    try {
    
        const name= req.body.name;
        const url1=req.body.url1;
        const url2=req.body.url2;
        const url3=req.body.url3;
        const url4=req.body.url4;
        const description=req.body.description;
        const price=req.body.price;
        const stock=req.body.stock;
        const category=req.body.category;
        

        await addProductsLogic(name, url1,url2,url3,url4,description,price,stock,category).then(data => {
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
module.exports = addProducts