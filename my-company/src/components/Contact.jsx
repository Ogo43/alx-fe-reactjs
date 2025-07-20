import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form
        style={{
          maxWidth: "400px",
          margin: "100px auto",
          padding: "30px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          style={{
            color: "black",
            marginRight: "1rem",
            display: "block",
          }}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#bbc0c6ff",
          }}
          value={formData.name}
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          style={{
            color: "black",
            marginRight: "1rem",
            display: "block",
          }}
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#bbc0c6ff",
          }}
          value={formData.email}
          onChange={handleChange}
        />
        <label
          htmlFor="message"
          style={{
            color: "black",
            marginRight: "1rem",
            display: "block",
          }}
        >
          Message
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#bbc0c6ff",
          }}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
