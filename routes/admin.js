const router = require('express').Router()

const addProducts= require('../controllers/admin/addProducts')
router.route('/admin/Products').post(addProducts)

module.exports=router