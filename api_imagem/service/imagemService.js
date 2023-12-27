const fs = require('fs');

function obterImagens() {
    return JSON.parse(fs.readFileSync("imagem.json"));
}

module.exports = { obterImagens }