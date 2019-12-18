import express from 'express';
import path from 'path';

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../public')));

        // this._app.get('/', this.onGet);
        // this._app.post('/', this.onPost);
        // this._app.put('/', this.onPut);
    }

    // onGet = (request, response) => {
    //     const { body } = request;

    //     response.end();
    // }

    // onPost = (request, response) => {
    //     const { body } = request;

    //     response.end();
    // }

    // onPut = (request, response) => {
    //     const { body } = request;

    //     response.end();
    // }

    getApp = () => this._app;
}

export default App;