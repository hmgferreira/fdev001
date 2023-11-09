import mysql from 'mysql';
import { makeDb } from 'mysql-async-simple';

class Connection {
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'caixapay'
        });

        this.db = makeDb();
    }
    // https://dontpad.com/iw
    async query(sql, dados) {
        await this.db.connect(this.connection);
        try {
            const data = await this.db.query(this.connection, sql, dados);
            return data;
        } catch(e) {
            throw e;
        } finally {
            await this.db.close(this.connection);
        }
    }
}


export default Connection;
