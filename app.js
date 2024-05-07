const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');


const PORT = 4000;

app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}`);
});

// Body Parser 
app.use(bodyParser.urlencoded({extended: false}));

// Conexão com o banco de dados 
db.authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
        console.error("Ocorreu um erro ao conectar:", err); // Use console.error para mensagens de erro
    });

// Rotas 
app.get('/', (req, res) => {
    res.send("Está funcionando 2");
});

// Rotas de jobs 


