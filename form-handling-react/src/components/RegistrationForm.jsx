import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!username) validationErrors.username = "Username is required.";
    if (!email) validationErrors.email = "Email is required.";
    if (!password) validationErrors.password = "Password is required.";

    setError(validationErrors);

    // If there are errors, stop submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Clear errors if all good
    setError({});
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {error.username && <p style={{ color: "red" }}>{error.username}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
