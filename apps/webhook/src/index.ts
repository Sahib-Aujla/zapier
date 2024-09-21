import express from 'express';
import { PrismaClient } from '@repo/db/client';


const app = express();
const db = new PrismaClient();