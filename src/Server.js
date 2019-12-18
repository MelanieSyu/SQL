import http from 'http';
import App from './App';

class Server {
    constructor(port) { 
        this._port = port;

        this._app = new App();
        this._server = http.createServer(this._app.getApp());
    }

    init = () => {
        console.log('Server Has Been Started on port: ', this._port);
        this._server.listen(this._port);
    }
}

export default Server;