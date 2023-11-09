import Connection from "../config/Connection.js";

class UsuariosModel {
    
    async findAll(){
        const connection = new Connection();
        const sql = "SELECT * FROM usuarios";
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