const { obterImagens } = require('../service/imagemService');

function listaImagens(req, res) {
    const imagens = obterImagens();
    res.send(imagens);  
}

module.exports = {
    listaImagens
}