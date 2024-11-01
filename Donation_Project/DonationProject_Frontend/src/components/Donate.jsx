import React, { useState } from "react";
import axios from "axios";

function Donate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    const amountInPaisa = amount * 100;

    try {
      // Create a new order on the server
      const result = await axios.post(
        "http://localhost:4000/api/payment/create-order",
        {
          amount: amountInPaisa, // Amount in paisa
        }
      );

      // Check if result.data has the expected properties
      if (!result.data || !result.data.amount || !result.data.id) {
        throw new Error("Invalid response from server.");
      }

      const { amount: orderAmount, id: order_id, currency } = result.data;

      const options = {
        key: "rzp_test_R11WeAzTKMFoUe", // Your Razorpay API Key
        amount: orderAmount, // Amount in paisa
        currency: "INR",
        name: "Volunteering Community",

        description: "Donation for a good cause",
        handler: function (response) {
          // Handle payment success
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
        },
        theme: {
          color: "#FF4433",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order. Please try again later.");
      setDisableBtn(false); // Re-enable button on error
    }
  };

  return (
    <section className="donate">
      <form onSubmit={handlePayment}>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label>No one has ever become poor by giving!</label>
        </div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter donation amount (INR)"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message (optional)"
        />
        <button type="submit" className="btn" disabled={disableBtn}>
          Donate {amount ? `₹${amount}` : "₹0"}
        </button>
      </form>
    </section>
  );
}

export default Donate;
