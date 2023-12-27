const express = require('express');
const app = express();

const port = 3001;

app.get('/', (req, res) => {
    return res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Porta sendo iniciada, ${port}`);
})