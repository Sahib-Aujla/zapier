import { Router } from 'express';
import { SignInSchema, SignUpSchema } from '../zod/schema';
import { PrismaClient } from '@repo/db';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import { authmiddleware } from '../authmiddleware';

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
        if (userExists) return res.status(403).json({ message: "user already exists. Please sign in" });

        await client.user.create({
            data: {
                email: parsedData.data.username,
                name: parsedData.data.name,
                password: parsedData.data.password
            }
        })

        return res.status(200).json({ message: "Used created successfully" });


    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
})

router.post('/signin', async (req, res) => {
    const body = req.body;
    const parsedData = SignInSchema.safeParse(body);
    if (!parsedData.success) return res.status(411).json({ message: "Invalid data" });

    try {
        const user = await client.user.findFirst({
            where: {
                email: parsedData.data.username,
                password: parsedData.data.password
            }
        })
        if (!user) return res.status(403).json({ message: "Incorrect username or password" });

        const token = jwt.sign({
            id: user.id
        }, JWT_SECRET);
        return res.status(200).json({ token: token });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }


})

router.get('/', authmiddleware, async (req, res) => {
    try {
        //@ts-ignore
        const id = req.id;

        const user = await client.user.findFirst({
            where: {
                id
            },
            select: {
                email: true,
                name: true
            }
        })

        return res.status(200).json({ user: user });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
})



export const userRouter = router;