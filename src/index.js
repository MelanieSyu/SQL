import Server from './Server';

const init = () => {
    const port = 2020;
    const server = new Server(port);
    server.init();
};

init();