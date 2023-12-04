import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

class App {
    app;

    constructor () {
        this.app = express();
    }

    configure () {
        this.app.use(express.json());
    }

    startServer (cb) {
        const PORT = process.env.APP_PORT || 3000;

        this.app.listen(PORT, cb(PORT));
    }
}

export default new App();