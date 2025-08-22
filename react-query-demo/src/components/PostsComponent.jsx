import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

function PostsComponent() {
    // Use the useQuery hook to handle data fetching and caching
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Data stays fresh for 5s
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

   // Handle loading state
  if (isLoading) return <p>Loading posts...</p>;
  // Handle error state
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
        Refetch Posts
      </button>
      <ul>
        {data.map(post => (
            <li key={post.id}>
                <strong>{post.title}</strong>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
