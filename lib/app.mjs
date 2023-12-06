import dotenv from 'dotenv';
import express from 'express';
import fg from 'fast-glob';
import cors from 'cors';

dotenv.config();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

class App {
    app;
    router;

    constructor () {
        this.app = express();
        this.router = express.Router();
    }

    configure () {
        this.app.use(express.json());
        this.app.use(this.router);
        this.app.use(cors(corsOptions));
    }

    startServer (cb) {
        const PORT = process.env.APP_PORT || 3000;

        this.app.listen(PORT, cb(PORT));
    }

    async initializeRoutes () {
        const directories = await fg('lib/routes/**/**.mjs');

        for (let i in directories) {
            const dir = directories[i];
            const fileProperties = await import(`../${dir}`);
            const def = fileProperties.default;

            await def.exec(this.router);
        }
    }
}

export default new App();