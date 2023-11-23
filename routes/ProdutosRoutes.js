import express from 'express';
import UsuariosController from '../controllers/UsuariosController.js';

const ProdutosRoutes = express.Router();

const usuarioController = new UsuariosController();
ProdutosRoutes.get('/produtos', usuarioController.findAll);
ProdutosRoutes.get('/produtos/:id', usuarioController.findOne);
ProdutosRoutes.post('/produtos', usuarioController.create);
ProdutosRoutes.put('/produtos/:id', usuarioController.update);
ProdutosRoutes.delete('/produtos/:id', usuarioController.delete);

export default ProdutosRoutes;