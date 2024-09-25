import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "./config";
export function authmiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization as unknown as string;
        const payload = jwt.verify(token, JWT_SECRET);
        //@ts-ignore
        req.id = payload.id;
        next();
    } catch (error) {
        return res.status(403).json({ message: "invalid token" });
    }
}