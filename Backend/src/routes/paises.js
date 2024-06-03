const express = require('express');
const router = express.Router();
const paisesController = require('../controllers/paisesController');

router.post('/agregarPaises', paisesController.agregarPaises);

router.get('/listarPaises', paisesController.listarPaises);



module.exports = router;