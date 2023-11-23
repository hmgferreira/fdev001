import UsuariosModel from '../models/UsuariosModel.js';
import jwt from 'jsonwebtoken';
import apiKey from '../config/apiKey.js';

class LoginController {

    async authenticate(request, response) {

        const data = request.body;
        const login = data.login;
        const senha = data.senha;

        const usuarioModel = new UsuariosModel();
        const usuario = await usuarioModel.authenticate(login, senha);

        console.log(typeof usuario);

        if(usuario.length > 0) {

            const dados_usuario = usuario[0];
            const dados = {
                id: dados_usuario.id,
                login: dados_usuario.login,
            };
            
            const token = jwt.sign(dados, apiKey, { expiresIn: 60 * 60 });
            return response.json({token: token})
        }

        return response.json({message: "Login ou senha incorreto."})
    }
}

export default LoginController;