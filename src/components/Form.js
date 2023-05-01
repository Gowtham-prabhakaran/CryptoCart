import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:support@example.com?subject=New message from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
        <p className="contact-heading">Contact Us</p>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email ID:</label>
                <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                className="form-control"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  );
}

export default ContactForm;
