import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import { fetchUserData } from "../services/githubService";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUserSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>
      <SearchForm onSearch={handleUserSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
