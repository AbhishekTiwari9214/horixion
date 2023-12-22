const Joi = require('joi');
const {failureResponse,successResponse}= require('../utils/responseSchema')
const statusCode= require('../utils/stausCodes.json')


const validation = (schema) => {
  return (req, res, next) => {
    
    const options = {
      abortEarly: false, 
      allowUnknown: true, 
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join(', ');
      return res.status(400).json({ message: errorMessage });
    }

    
    
    next();
  };
};

module.exports = validation;


