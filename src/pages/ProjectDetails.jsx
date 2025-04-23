// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import MarkdownRenderer from "../components/MarkdownRenderer";
import { motion } from "framer-motion";
import useTitle from "../components/UseTitle";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="container">
        <h2>Project not found</h2>
        <Link to="/">← Back to Home</Link>
      </main>
    );
  }

  useTitle(project ? `Project - ${project.title}` : "Project Not Found");

  return (
    <motion.main
      className="container project-details"
      initial={{ opacity: 0, x: -50 }}       // Start 50px left, hidden
      animate={{ opacity: 1, x: 0 }}        // Slide to its natural position
      transition={{ duration: 0.8 }}
    >
      <h1>{project.title}</h1>

      {/* Screenshot */}
      <div className="screenshot">
        <img src={project.screenshotUrl} alt={project.title} />
      </div>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <>
          <h2>Tech Stack</h2>
          <ul>
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </>
      )}

      {/* Description rendered with Markdown */}
      <h2>Description</h2>
      <div className="description-section">
        <p>{project.description}</p>
        <MarkdownRenderer content={project.code} />
      </div>

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </motion.main>
  );
}

export default ProjectDetails;
