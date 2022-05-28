const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const { protect } = require("../middleware/authMiddleware");

router.post('/register', userCtrl.register)//register success

router.post('/login', userCtrl.login)//login success

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth,  userCtrl.getUser)

router.get('/', protect,  userCtrl.allUsers)// search all users succes

module.exports = router 