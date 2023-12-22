const jwt = require('jsonwebtoken');
const appRoot = require('app-root-path');
const statusCodeInfo = require('../utils/stausCodes.json');
module.exports = (req, res, next) => {
    try {
        let token = req.headers["x-access-token"] || req.headers["authorization"];
        // Check for token
        if (token && token.startsWith("Bearer ")) {
            // Removing Bearer from token
            token = token.slice(7, token.length);
            // Verifying token 
            const decoded  = jwt.decode(token);
                if (decoded) {
                    req.headers["mail"] = decoded.unique_name
                    req.headers['oid'] = decoded.oid
                    req.headers['name'] = decoded.name
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