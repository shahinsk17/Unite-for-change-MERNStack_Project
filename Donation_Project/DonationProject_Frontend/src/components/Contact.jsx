import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
                onChange={(e) => {
                  setName(e.target.value);
                }}
                maxLength="30"
                title="Only letters and spaces are allowed"
              />

              <input
                type="email"
                value={mail}
                placeholder="Your Email"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                required
              />

              <input
                type="tel"
                value={phone}
                placeholder="Your Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                maxLength="10"
                required
              />
            </div>
            <textarea
              rows={10}
              value={message}
              placeholder="Your message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
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
