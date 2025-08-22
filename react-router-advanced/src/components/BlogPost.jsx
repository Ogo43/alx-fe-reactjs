import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <p>This is content for blog post ID: {postId}</p>
    </div>
  );
}

export default BlogPost;
