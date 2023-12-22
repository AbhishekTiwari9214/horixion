const router = require('express').Router()
const getProducts= require('../controllers/users/getProducts')
const getReels= require('../controllers/users/getReels.js')
const addReels= require('../controllers/users/addReels.js')
const addOrders= require('../controllers/users/addOrders.js')
const getOrders= require('../controllers/users/getOrders.js')
const getUsers= require('../controllers/users/getUsers.js')


router.route('/user/products').get(getProducts)
router.route('/user/Reels').get(getReels)
router.route('/user/Reels').post(addReels)
router.route('/user/orders').post(addOrders)
router.route('/user/orders').get(getOrders)
router.route('/user/login').get(getUsers)

module.exports=router