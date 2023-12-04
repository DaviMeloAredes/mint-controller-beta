import { Router } from "express"

export default {
    id: 'root',
    /**
     * @param { Router } router 
     */
    exec: async (router) => {
        router.get('/', (req, res) => {
            const homePage = '../lib/public/views/index.ejs';

            return res.render(homePage);
        });
    }
}