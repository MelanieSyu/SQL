import DAL from './DAL';
import pg, { Client }  from 'pg';

class Postgree_DAL extends DAL {
    constructor() {
        super();
        this.connect();
    }

    connect = async () => {
        this.client = new Client({
            user: 'user',
            host: 'localhost',
            database: 'hw',
            password: '1111',
            port: 5432,
        });
        await client.connect();
    }

    read = async () => {
        const query = 'select * from persons';
        const result = await this.client.query(query);
        console.log(result);
        
    }
}

export default Postgree_DAL;