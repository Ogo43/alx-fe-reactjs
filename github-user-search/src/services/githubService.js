import axios from "axios";

/**
 * Fetch GitHub user data based on username.
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} - GitHub user data
 */


const fetchUserData = async(username) => {
  const endpoint = `https://api.github.com/users/{username}`;

  try {
    const response = await async.get(endpoint);
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch user data" //NB: This is used to customize error message
    );
  }
}

export default fetchUserData;