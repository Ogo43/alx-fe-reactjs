import React, { useState } from "react";

const SearchForm = ({onSearch}) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
        onSearch(username);   // call parent function to fetch user
        setUsername("");   // clear the field
    }
  };

  return 
  <div>
    <h1>GitHub Login</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username"/>
        <button type="button">Submit</button>
    </form>
  </div>;
};

export default SearchForm;
