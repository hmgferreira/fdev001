import UsuariosModel from "../models/UsuariosModel.js";

class UsuariosController {

    async findAll(request, response) {
        const usuariosModel = new UsuariosModel();
        const page = request.query.page || 1; // IF..ELSE TERNARIO

        const data = await usuariosModel.findAll(page, request.query);
        return response.json(data);
    }

    async findOne(request, response) {
        const id = request.params.id;
        const usuariosModel = new UsuariosModel();
        const data = await usuariosModel.findOne(id);
        return response.json(data);
    }

    async create(request, response) {
        const body = request.body;
        const usuariosModel = new UsuariosModel();
        const data = await usuariosModel.create(body);
        return response.json(data);
    }

    async update(request, response) {
        const body = request.body;
        const id = request.params.id;

        const usuariosModel = new UsuariosModel();
        const data = await usuariosModel.update(body, id);
        return response.json(data);
    }

    async delete(request, response) {
        const id = request.params.id;

        const usuariosModel = new UsuariosModel();
        const data = await usuariosModel.delete(id);
        return response.json(data);
    }

}

export default UsuariosController;