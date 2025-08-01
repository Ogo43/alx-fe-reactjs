import axios from "axios";

/**
 * Fetch GitHub user data based on username.
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} - GitHub user data
 */


const fetchUserData = async({ username, location, minRepos }) => {
   
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += `location:${location}`;
  if (minRepos) query += `repos:>=${minRepos}`;

  const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  try {
    const response = await axios.get(endpoint);
    return response.data.items;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch user data" //NB: This is used to customize error message
    );
  }
}

export default fetchUserData;