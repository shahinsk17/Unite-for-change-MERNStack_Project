import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import paymentRoute from "./router/paymentRoute.js"; // If you're using this, make sure to import and use it

const app = express();

dotenv.config({ path: "./config.env" });
app.use(cors({
    origin: ['http://localhost:5173', 'https://unite-for-change-mern-stack-project.vercel.app'],
    methods: ["POST"],
    credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

app.post('/api/payment/create-order', (req, res) => {
    const { amount } = req.body;  
    const order = {
        id: 'order_' + new Date().getTime(), // Generate a unique order ID
        amount: amount,  
        currency: 'INR', 
    };
    return res.status(200).json(order); // Return order directly
});

// Database connection
dbConnection();

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

export default app;
