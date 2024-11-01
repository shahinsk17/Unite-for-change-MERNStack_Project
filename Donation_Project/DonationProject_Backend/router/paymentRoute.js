import express from "express";
import { createOrder } from "../controllers/paymentController.js";

const router = express.Router();

// Route to create a Razorpay order
router.post("/createOrder", createOrder);

export default router;
