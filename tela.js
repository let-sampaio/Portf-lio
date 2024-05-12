const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, '')));


app.get('', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/projetos',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'projetos.html'));
});

app.get('/skills',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'skills.html'));
});
app.listen(port, () => console.log(`listening on port ${port}!`));