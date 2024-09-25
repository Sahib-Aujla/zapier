import { Router } from "express";
import { authmiddleware } from "../authmiddleware";
import { ZapCreateSchema } from "../zod/schema";
import { PrismaClient } from "@repo/db";
const client = new PrismaClient();
const router = Router();

router.post('/', authmiddleware, async (req, res) => {
    const body = req.body;
    // @ts-ignore
    const Uid = req.id;
    const parsedData = ZapCreateSchema.safeParse(body);
    if (!parsedData.success) return res.status(411).json({ message: "Invalid data" });

    try {
        const zapId = await client.$transaction(async tx => {
            const zap = await tx.zap.create({
                data: {
                    userId: Uid,
                    triggerId: "",
                    actions: {
                        create: parsedData.data.actions.map((x, index) => ({
                            actionId: x.availableActionId,
                            sortingOrder: index,
                            metadata: x.actionMetadata
                        }))
                    }
                }
            })
            const trigger = await tx.trigger.create({
                data: {
                    triggerId: parsedData.data.availableTriggerId,
                    zapId: zap.id,
                }
            });

            await tx.zap.update({
                where: {
                    id: zap.id
                },
                data: {
                    triggerId: trigger.id
                }
            })

            return zap.id;

        })

        return res.status(200).json({ zapId });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' })
    }

})


router.get('/', authmiddleware, async (req, res) => {
    //@ts-ignore
    const id = req.id;

    try {
        const zaps = await client.zap.findMany({
            where: {
                userId: id
            },
            include: {
                actions: {
                    include: {
                        type: true
                    }
                },
                trigger: {
                    include: {
                        type: true
                    }
                }
            }
        })

        return res.status(200).json(zaps);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
})

router.get('/:zapId', authmiddleware, async (req, res) => {
    //@ts-ignore
    const id = req.id;
    const zapId = req.params.zapId;

    try {
        const zap = await client.zap.findFirst({
            where: {
                id: zapId,
                userId: id
            }
        })
        if (!zap) return res.status(404).json({ message: "No Zap found" });
        return res.status(200).json(zap);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
})



export const zapRouter = router;