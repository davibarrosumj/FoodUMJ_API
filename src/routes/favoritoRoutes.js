const express = require('express');
const router = express.Router();
const favoritoController = require('../controllers/favoritoController');

router.get('/', favoritoController.listarFavoritos);
router.post('/', favoritoController.adicionarFavorito);
router.delete('/:id', favoritoController.removerFavorito);

module.exports = router;
