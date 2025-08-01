// components/SearchForm.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
    setLocation(e.target.value);
    setMinRepos(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    try {
      const userData = await fetchUserData({ username, location, minRepos });
      setUsers(userData);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
          className="form-input"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
          placeholder="Location"
          className="form-input"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          className="form-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      {users.length > 0 && (
        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} width={80} />
              <h3>{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
