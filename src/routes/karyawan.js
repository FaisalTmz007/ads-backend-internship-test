const express = require('express')
const router = express.Router()

const karyawanController = require('../controllers/karyawanController')

router.get('/', karyawanController.findAll)
router.get('/:id', karyawanController.findById)
router.post('/', karyawanController.create)
router.put('/:id', karyawanController.update)
router.delete('/:id', karyawanController.delete)

module.exports = router