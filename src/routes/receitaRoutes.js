const express = require('express');
const router = express.Router();
const receitaController = require('../controllers/receitaController');

router.get('/', receitaController.listarReceitas);
router.get('/:id', receitaController.detalharReceita);

module.exports = router;
