import { Router } from "express"

export default {
    id: 'root',
    /**
     * @param { Router } router 
     */
    exec: async (router) => {
        router.get('/', (req, res) => {
            return res.json({ ok: true });
        });
    }
}