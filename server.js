import express from 'express';
import Connection from './config/Connection.js';
import UsuariosController from './controllers/UsuariosController.js';

const app = express();
app.use(express.json());

app.get('/', function(request, response) {
    return response.send("Olá");
})

const usuarioController = new UsuariosController();
app.get('/usuarios', usuarioController.findAll);
app.get('/usuarios/:id', usuarioController.findOne);
app.post('/usuarios', usuarioController.create);
app.put('/usuarios/:id', usuarioController.update);
app.delete('/usuarios/:id', usuarioController.delete);


app.listen(8000, function() {
    console.log("Servidor executando...");
})