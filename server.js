import express from 'express';
import Connection from './config/Connection.js';

const app = express();
app.use(express.json());


app.get('/', function(request, response) {
    return response.send("Olá");
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