import { Router } from "express"
import { KeyHandler } from "../modules/KeyHandler.mjs";

export default {
    id: 'press_key',
    /**
     * @param { Router } router 
     */
    exec: async (router) => {
        router.post('/press-key', (req, res) => {
            const { key, type } = req.body;
            const keyHandler = new KeyHandler();

            if (typeof key != 'undefined' && typeof type != 'undefined') {
                keyHandler.pressKey(key, type);
            }

            return res.json({ success: true });
        });
    }
}