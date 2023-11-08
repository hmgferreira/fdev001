import mysql from 'mysql';

class Connection {
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'caixapay'
        });
    }

    query(sql, dados, callback) {
        this.connection.connect();
        this.connection.query(sql, dados, callback);
        this.connection.end();
    }
}


export default Connection;
