import express from 'express';
import jwt from 'jsonwebtoken';
import LoginController from '../controllers/LoginController.js';

const RotasPublicas = express.Router();

// ROTAS PUBLICAS
RotasPublicas.get('/', function(request, response) {

    const dados = {
        id: 1,
        login: 'admin',
        tempo_login: 30
    };
    
    const tokenExemplo = jwt.sign(dados, apiKey);
    
    const tokenDescriptografado = jwt.verify(tokenExemplo, apiKey);
    
    return response.send("TOKEN JWT: " + tokenExemplo + "<br><br> " + JSON.stringify(tokenDescriptografado));
})

const loginController = new LoginController();
RotasPublicas.post('/login', loginController.authenticate);

export default RotasPublicas;