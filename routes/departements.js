const express = require('express')
const router = express.Router()

const departementsController = require('../controllers/departementController')

router.get('/', departementsController.getDepartements)

router.get('/delete/:id', departementsController.deleteDepartement)

router.get('/edit/:id', departementsController.editDepartement)

router.post('/edit/:id',departementsController.updateDepartement)

router.get('/add', departementsController.addDepartement)

router.post('/add', departementsController.createDepartement)



module.exports = router;