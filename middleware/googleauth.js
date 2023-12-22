

const statusCodeInfo = require('../utils/stausCodes.json');
const gTokenDecode= require('../utils/googleTokenDecode')
module.exports = async(req, res, next) => {
    try {
        console.log("hiii")
        let token = req.headers["x-access-token"] || req.headers["authorization"];
        // Check for token
        if (token && token.startsWith("Bearer ")) {
            // console.log(token);
            // Removing Bearer from token
            token = token.slice(7, token.length);
// console.log('###############################################################################');
            // Removing Bearer from token
            // Verifying token 
            const decoded  = await  gTokenDecode(token);
                if (decoded) {
                    req.headers.user={}
                    req.headers.user["emailId"] = decoded.unique_name
                    // req.headers['oid'] = decoded.oid
                    req.headers.user['Name'] = decoded.name
                    next();
                } else {
                    return res.status(statusCodeInfo.UNAUTHORIZED.statusCode).json({
                        status: statusCodeInfo.UNAUTHORIZED.status,
                        message: "Token is not valid",
                    })
                }
            // })
        } else {
            return res.status(statusCodeInfo.UNAUTHORIZED.statusCode).json({
                status: statusCodeInfo.UNAUTHORIZED.status,
                message: "Token is empty",
            })
        }
    } catch (err) {
        return res.status(statusCodeInfo.INTERNAL_SERVER_ERROR.statusCode).json({
            status: statusCodeInfo.INTERNAL_SERVER_ERROR.status,
            message: err.message,
        })
    }
}