import express from 'express';
import jwt from 'jsonwebtoken';
import ProdutosRoutes from './ProdutosRoutes.js';
import UsuariosRoutes from './UsuariosRoutes.js';
import apiKey from '../config/apiKey.js';

const RotasPrivadas = express.Router();

// ROTAS PRIVADAS
// MIDDLEWARE
RotasPrivadas.use(function(request, response, next) {
    const token = request.headers.token;
    try {
        jwt.verify(token, apiKey);
    } catch(e) {
        return response.json({
            autorizacao: false,
            mensagem: 'Token inválido'
        });
    }
    next();
})


RotasPrivadas.use(ProdutosRoutes);
RotasPrivadas.use(UsuariosRoutes);

export default RotasPrivadas;