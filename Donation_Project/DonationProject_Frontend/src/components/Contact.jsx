import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { name, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast.success(res.data.message);
    } catch (error) {
      console.error(error.response?.data);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="banner">
          <form onSubmit={handleSubmit}>
            <h2>Contact us</h2>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                value={phone}
                placeholder="Your Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <textarea
              rows={10}
              value={message}
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
