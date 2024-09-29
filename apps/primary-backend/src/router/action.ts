import { Router } from 'express';
import { PrismaClient } from '@repo/db';
const client = new PrismaClient();
const router = Router();
router.get('/available', async (req, res) => {
    try {
        const availableActions = await client.availableAction.findMany();

        return res.send(200).json(availableActions);
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }

})
export const actionRouter = router;