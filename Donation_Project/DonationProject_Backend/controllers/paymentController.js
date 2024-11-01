import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

 
const razorpay = new Razorpay({
  key_id:"rzp_test_R11WeAzTKMFoUe",
  key_secret:"VUWln04s4cg9iHtsVaqFRlIj",
});

// Controller function to create a new order
export const createOrder = async (req, res) => {
  const { amount, currency = "INR" } = req.body;

  try {
    // Define options for the Razorpay order
    const options = {
      amount: amount * 100, // Convert amount to the smallest currency unit (e.g., paisa for INR)
      currency: currency,
      receipt: `receipt_${Math.random() * 10000}`, // Generate a unique receipt ID
    };

    // Create order using Razorpay API
    const order = await razorpay.orders.create(options);

    // Send order details back to client
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    // Handle errors and send error message to client
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
