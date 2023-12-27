const { Router } = require('express');
const router = Router();

const { listaImagens } = require('../controller/imagemController');

router.get('/', listaImagens);

module.exports = router