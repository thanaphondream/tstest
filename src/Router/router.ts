import express from "express"
const router = express.Router()
import { api, showapitodo } from "../apitsxt/api";

router.post('/todo', api)
router.get('/todo', showapitodo)

router.get('/test', (req, res) => {
    res.send('Server is running...');
});

export default router