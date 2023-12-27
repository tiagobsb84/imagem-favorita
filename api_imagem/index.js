const express = require('express');
const app = express();

const routaImagens = require('./routes/routesImagem');

const port = 3001;

app.use(express.json());

app.use('/imagens', routaImagens);

app.listen(port, () => {
    console.log(`Porta sendo iniciada, ${port}`);
})