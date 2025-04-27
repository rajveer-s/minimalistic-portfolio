// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { posts } from "../data/posts";
import { motion } from "framer-motion";
import useTitle from "../components/UseTitle";
import profileimg from "../assets/images/profile.jpg";

// Variants for elements sliding up (from below)
const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// Variant for social links sliding in from the left
const slideLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

// Container variant for staggering children (for social links)
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Home() {

    useTitle("rajveer.");

  return (
    <main className="container">
      {/* Intro Section */}
      <motion.section
        className="intro"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image and Name */}
        <motion.div variants={slideUpVariant}>
          <img
            src={profileimg}
            alt="Profile"
            className="profile-image"
          />
        <h1 className="intro-text">
            Hello, I’m <span className="name-hover">Rajveer</span>
        </h1>

        </motion.div>

        {/* Intro Paragraphs */}
        <motion.div variants={slideUpVariant}>
          <p>
            I design and build apps and websites that help early-stage companies
            launch impactful solutions quickly.
          </p>
          <p>
            By blending thoughtful design with robust architecture, I create
            scalable, user-focused applications in weeks, not months.
          </p>
        </motion.div>

        {/* Social Links (animate staggered from left) */}
        <motion.div
          className="intro-social-links"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: "Resume", href: "/resume" },
            { label: "Youtube", href: "https://youtube.com/your-channel" },
            { label: "GitHub", href: "https://github.com/rajveer-s" },
            { label: "Twitter", href: "https://twitter.com/rajxidhu" },
            { label: "LinkedIn", href: "https://linkedin.com/in/rajveer-s" },
            { label: "Email", href: "mailto:rajveersiidhu@gmail.com" },
            { label: "Blog", href: "/blog" },
            { label: "Schedule a call", href: "https://calendly.com/your-calendly" }
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : ""}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
              variants={slideLeftVariant}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Three-Column Section */}
      <motion.section
        className="lists"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5 }}
        variants={slideUpVariant}
      >
        <div className="lists-container">
          {/* Currently Building */}
          <div className="list">
            <h2>Currently Building.</h2>
            <ul>
              <li>
                <Link to="/project/ui-research-lab">ui-research-lab</Link>
              </li>
              <li>
                <Link to="/project/react-shopify-starter">
                  react-shopify-starter
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="list">
            <h2>Projects.</h2>
            <ul>
              {projects.map((proj) => (
                <li key={proj.id} className="project-link">
                  <Link to={`/project/${proj.id}`}>{proj.title}</Link>
                  <div className="hover-card">
                    <h4>{proj.title}</h4>
                    <p>This is a short description about {proj.title}.</p>
                    <p>It can have multiple lines, highlighting the main points.</p>
                    <p>Hover over the link to see this card.</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiments */}
          <div className="list">
            <h2>Experiments.</h2>
            <ul>
              <li>
                <Link to="/project/experiment-1">experiment-1</Link>
              </li>
              <li>
                <Link to="/project/experiment-2">experiment-2</Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Blog / Posts Section */}
      <motion.section
        className="blog"
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.8, delay: 1 }}
        variants={slideUpVariant}
      >
        <h2>Latest Posts</h2>
        <ul>
          {posts.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
              <span className="date">{post.date}</span>
            </li>
          ))}
        </ul>
        <Link to="/blog" className="view-all">
          View all posts →
        </Link>
      </motion.section>
    </main>
  );
}

export default Home;
