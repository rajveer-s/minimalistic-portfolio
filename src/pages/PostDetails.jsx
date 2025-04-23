// src/pages/PostDetails.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";
import MarkdownRenderer from "../components/MarkdownRenderer";
import { motion } from "framer-motion";
import useTitle from "../components/UseTitle";

function PostDetails() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="container">
        <h2>Post not found</h2>
        <Link to="/">← Back to Home</Link>
      </main>
    );
  }

  useTitle(post ? `Post - ${post.slug}` : "Post Not Found - My Blog");

  return (
    <motion.main
    className="container post-details"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    >
      {/* TOP NAV: Back to all posts */}
      <div className="top-links">
        <Link to="/blog" className="back-to-blog">
          ← Back to all posts
        </Link>
      </div>

      {/* Title */}
      <h1>{post.title}</h1>

      {/* YouTube Embed (responsive) */}
      {post.youtubeUrl && (
        <div className="youtube-embed">
          <div className="iframe-container">
            <iframe
              src={post.youtubeUrl}
              title="YouTube video player"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Introduction */}
      <h2>Introduction</h2>
      <p>{post.introduction}</p>

      {/* Prerequisites */}
      {post.prerequisites && post.prerequisites.length > 0 && (
        <>
          <h2>Prerequisites</h2>
          <ul>
            {post.prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Main Markdown Content */}
      <div className="content-section">
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Conclusion / Social Links */}
      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          That’s all for now! Hopefully, you learned something new. Feel free to
          connect with me on social media:
        </p>
        <div className="social-links">
          <a
            href="https://your-portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </section>

      {/* Bottom link(s) */}
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </motion.main>
  );
}

export default PostDetails;
