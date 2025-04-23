// src/pages/BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import {motion} from "framer-motion";
import useTitle from "../components/UseTitle";

function BlogList() {

    useTitle("My Posts");


  return (
    <motion.main
    className="container"
    initial={{ opacity: 0, y: 50 }}         // Start slightly below, hidden
    animate={{ opacity: 1, y: 0 }}          // Animate to fully visible
    transition={{ duration: 1.2 }}
    >
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "1rem" }}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
            <br />
            <span style={{ fontSize: "0.9rem", color: "#999" }}>
              {post.date}
            </span>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </motion.main>
  );
}

export default BlogList;
