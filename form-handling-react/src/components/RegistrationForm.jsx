import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      alert("Kindly fill all the required fields.");
      return;
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
