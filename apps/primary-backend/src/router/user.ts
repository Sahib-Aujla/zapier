import { Router } from 'express';
import { SignUpSchema } from '../zod/schema';
import { PrismaClient } from '@repo/db';
const router = Router();
const client = new PrismaClient();

router.post('/signup', async (req, res) => {
    const body = req.body;

    const parsedData = SignUpSchema.safeParse(body);;
    if (!parsedData.success) {
        return res.status(411).json({
            message: "Invalid data"
        })
    }

    try {
        const userExists = await client.user.findFirst({
            where: {
                email: parsedData.data.username
            }
        })
        if (userExists) return res.status(403).json({ message: "user already exists. Please sign in" })

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
})

router.post('/signin', async (req, res) => {

})

router.get('/user', async (req, res) => {

})



export const userRouter = router;