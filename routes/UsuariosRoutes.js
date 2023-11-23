import express from 'express';
import UsuariosController from '../controllers/UsuariosController.js';

const UsuariosRoutes = express.Router();

const usuarioController = new UsuariosController();
// UsuariosRoutes.use(function(request, response, next) {
//     console.log("Eu sou o MIddleware do Usuarios")
//     next();
// })
UsuariosRoutes.get('/usuarios', usuarioController.findAll);
UsuariosRoutes.get('/usuarios/:id', usuarioController.findOne);
UsuariosRoutes.post('/usuarios', usuarioController.create);
UsuariosRoutes.put('/usuarios/:id', usuarioController.update);
UsuariosRoutes.delete('/usuarios/:id', usuarioController.delete);

export default UsuariosRoutes;