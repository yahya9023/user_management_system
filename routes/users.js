const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController')

router.get('/',usersController.getUsers)

router.get('/delete/:id',usersController.deleteUser) 

router.get('/edit/:id',usersController.editUser)
router.post('/edit/:id',usersController.updateUser)

router.get('/add',usersController.addUser)
router.post('/add',usersController.createUser)



module.exports = router;