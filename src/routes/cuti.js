const express = require('express')
const router = express.Router()

const CutiController = require('../controllers/cutiController')

router.get('/', CutiController.findAll)
router.get('/:id', CutiController.findById)
router.post('/', CutiController.create)
router.put('/:id', CutiController.update)
router.delete('/:id', CutiController.delete)

module.exports = router