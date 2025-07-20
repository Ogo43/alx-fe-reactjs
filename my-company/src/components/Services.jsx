import React from "react";

const Services = () => {
  return (
    <div
      style={{
        paddingTop: "100px",
        textAlign: "center",
        backgroundColor: "white",
        height: "100vh",
        color: "#333",
      }}
    >
      <h1>Our Services</h1>
      <ul style={{ display: "flex", justifyContent: "center", gap: "1rem", listStyleType: "none", padding: 0, marginTop: "1rem", border: "1px solid gray"}}>
        <li>🌐 Web Development</li>
        <li>📱 Mobile App Development</li>
        <li>🎨 UI/UX Design</li>
        <li>🧠 Consulting Services</li>
      </ul>
    </div>
  );
};

export default Services;
