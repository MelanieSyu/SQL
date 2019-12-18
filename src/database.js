import Pool from 'pg';

class DataBase {
    constructor() {
        DATABASE_URL = 'postgres://[db-user]:[password]@http://127.0.0.1:59813/browser/';
        this.pool = new Pool({
            connectionString: DATABASE_URL
        });
    }

    query = text => {
        return new Promise((resolve, reject) => {
        this.pool
            .query(text)
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        });
    }
}
// your credentials



// a generic query, that executes all queries you send to it
export default DataBase;