import { Router } from 'express';
import { PrismaClient } from '@repo/db';
const client = new PrismaClient();
const router = Router();
router.get('/available', async (req, res) => {
    try {
        const availableTriggers = await client.availableTrigger.findMany();

        return res.status(200).json(availableTriggers);
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }

})
export const triggerRouter = router;