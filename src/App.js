import express, { response } from 'express';
import path from 'path';
import Postgree_DAL from './postgree_DAL';

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use('/',express.static(path.resolve(__dirname, '../public')));
        this._db = new Postgree_DAL();
        this._app.get('/persons', this.onGet);
        this._app.post('/persons', this.onPost);
        this._app.put('/persons', this.onPut);
        this._app.delete('/persons', this.onDelete);
    }

    onGet = (request, response) => {
        this._db.read(request.query);
        response.end();
    }

    onPost = (request, response) => {
        this._db.create(request.body);
        response.end();
    }

    onPut = (request, response) => {
        this._db.update(request.body);
        response.end();
    }

    onDelete = (request, response) => {
        this._db.delete(request.body);
        response.end();
    }

    getApp = () => this._app;
}

export default App;