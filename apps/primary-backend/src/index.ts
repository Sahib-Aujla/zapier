import express from "express";
import cors from 'cors';
import { userRouter } from "./router/user";
import { zapRouter } from "./router/zap";

const app = express();

app.use(express.json());
app.use(cors());

//health check
app.get('/', (req, res) => {
    res.json({
        message: "Server running successfully at port 3000"
    })
})

app.use('/api/v1/user', userRouter);
app.use('/api/v1/zap', zapRouter);



app.listen(3001);