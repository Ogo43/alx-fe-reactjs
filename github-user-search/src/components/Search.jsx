// components/SearchForm.jsx
import React, { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const locationHandler = (e) => {
    setLocation(e.target.value);
  }

  const minReposHandler = (e) => {
    setMinRepos(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    try {
      const userData = await fetchUserData({ username, location, minRepos });
      setUsers(userData);
    } catch (error) {
      setError("Looks like we cant find the user", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 bg-white shadow-md rounded-lg max-w-md mx-auto"
      >
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={locationHandler}
          placeholder="Location"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={minReposHandler}
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 border p-4 rounded-md shadow-sm mb-2"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
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
