import express from 'express';
import { PrismaClient } from '@repo/db';
 
const client = new PrismaClient();
const app=express();
app.use(express.json());

app.post('/hooks/catch/:userId/:zapId',async(req,res)=>{
    const {userId, zapId} = req.params;
    const body=req.body;

    
})

app.listen(3000);