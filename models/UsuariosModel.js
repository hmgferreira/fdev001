import Connection from "../config/Connection.js";
import Paginate from '../config/PaginateConfig.js';
class UsuariosModel {

    async authenticate(login, senha) {
        const connection = new Connection();
        const sql = "SELECT * FROM usuarios WHERE login = ? AND senha = ?";
        const retorno = await connection.query(sql, [login, senha]);
        return retorno;
    }

    async getTotalRegister() {
        
        const connection = new Connection();
        const sql = `SELECT count(id) as total FROM usuarios`;
        const retorno = await connection.query(sql, {});
        if(retorno[0] !== undefined) {
            return retorno[0].total;
        }
        return 0;
    }
    
    async findAll(page, filter){

        const total = await this.getTotalRegister();
        const paginate = Paginate.getConfigPaginate(page, total, Paginate.limit);

        let where = '';
        if(filter.nome != undefined && filter.nome != '') {
            where = where + ` AND nome like '%${filter.nome}%'`;
        }

        if(filter.login != undefined && filter.login != '') {
            where = where + ` AND login like '%${filter.login}%'`;
        }

        const connection = new Connection();
        const sql = `SELECT * 
            FROM usuarios 
            WHERE 1 = 1 ${where}
            LIMIT ${paginate.limite} OFFSET ${paginate.offset}`;
        
        const retorno = await connection.query(sql, {});
        return retorno;
    }

    async findOne(id){
        const connection = new Connection();
        const sql = "SELECT * FROM usuarios WHERE id = "+ id;
        const retorno = await connection.query(sql, {});
        return retorno;
    }

    async create(data){
        // regras

        const connection = new Connection();
        const sql = "INSERT INTO usuarios SET ?";
        const retorno = await connection.query(sql, data);
        return retorno;
    }

    async update(data, id){
        // regras

        const connection = new Connection();
        const sql = "UPDATE usuarios SET ? WHERE id = ?";
        const retorno = await connection.query(sql, [data, id]);
        return retorno;
    }

    async delete(id){
        // regras
        
        const connection = new Connection();
        const sql = "DELETE FROM usuarios WHERE id = " + id;
        const retorno = await connection.query(sql, {});
        return retorno;
    }
}

export default UsuariosModel;