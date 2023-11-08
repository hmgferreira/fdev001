import express from 'express';
import Connection from './config/Connection.js';

const app = express();
app.use(express.json());


app.get('/', function(request, response) {
    return response.send("Olá");
})

app.get('/teste/:id/:outro', function(request, response) {
    // ACESSE PARA TESTAR
    // http://localhost:8000/teste/15151/456
    const id = request.params.id;
    const outro = request.params.outro;
    return response.send("TEste " + id + " Outro " + outro);
});

app.get('/querys', function(request, response) {
    // ACESSE PARA TESTAR
    // http://localhost:8000/querys?nome=Marcio&sobrenome=Ferreira
    const nome = request.query.nome;
    const sobrenome = request.query.sobrenome;
    return response.send("Querys " + nome + sobrenome);
})

app.get('/teste2', function(request, response) {
    return response.send("Test 23");
})


// CRUD - USUARIOS
// https://dontpad.com/iw
app.get('/usuarios', function(request, response) {
    const connect = new Connection();
    connect.query("SELECT * FROM usuarios", {}, function(error, results) {
        response.json(results);
    })
});

app.get('/usuarios/:id', function(request, response) {
    const id = request.params.id;
    const connect = new Connection();
    connect.query("SELECT * FROM usuarios WHERE id = "+id, {}, function(error, results) {
        response.json(results);
    })
});

app.post('/usuarios', function(request, response) {
    const body = request.body;
    const connect = new Connection();
    connect.query("INSERT INTO usuarios SET ?", body, function(error, results) {
        response.json(results);
    })
});

app.put('/usuarios/:id', function(request, response) {
    const id = request.params.id;
    const body = request.body;
    const connect = new Connection();
    connect.query("UPDATE usuarios SET ? WHERE id = ?", [body, id], function(error, results) {
        response.json(results);
    })
});


app.delete('/usuarios/:id', function(request, response) {
    const id = request.params.id;
    const connect = new Connection();
    connect.query("DELETE FROM usuarios WHERE id = ?", [id], function(error, results) {
        response.json(results);
    })
});

app.listen(8000, function() {
    console.log("Servidor executando...");
})