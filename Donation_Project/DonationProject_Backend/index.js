import express, { urlencoded }  from "express";
import dotenv from "dotenv";
import cors from "cors"
import {dbConnection} from  "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js"

 

const app=express();
dotenv.config({path: "./config.env"});
app.use(cors({
    origin:[process.env.FRONTEND_URL],methods:["POST"],
    credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/message",messageRouter);

app.use(cors({ origin: 'https://unite-for-change-mern-stack-project.vercel.app' }));


dbConnection();





export default app;