import Server from './Server';

const init = () => {
    const port = 80;
    const server = new Server(port);
    server.init();
};

init();