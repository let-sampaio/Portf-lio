const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000; // Use a porta definida pelo ambiente ou 3000 como padrão

app.use(express.static(path.join(__dirname, '')));

app.get('', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('let-sampaio.github.io/Portf-lio/projetos', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'projetos.html'));
});

app.get('let-sampaio.github.io/Portf-lio/skills', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'skills.html'));
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
