import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

//health check
app.get('/',(req,res)=>{
    res.json({
        message:"Server running successfully at port 3000"
    })
})


app.listen(3000);