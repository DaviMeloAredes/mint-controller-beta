import { Router } from "express"

export default {
    id: 'press_key',
    /**
     * @param { Router } router 
     */
    exec: async (router) => {
        router.post('/press-key', (req, res) => {
            const { key, type } = req.body;

            return res.json({ success: true });
        });
    }
}