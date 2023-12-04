import express from 'express';

class App {
    app;

    constructor () {
        this.app = express();
    }

    configure () {
        this.app.use(express.json());
    }
}

export default new App();