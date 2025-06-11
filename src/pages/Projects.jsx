// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using React. It highlights my frontend skills, showcases my work, and includes contact information.",
      link: "https://your-portfolio-link.com",
    },
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce website using Python and Django with a dynamic shopping system and integrated database.",
      link: "https://your-weather-app.com",
    },
    {
      title: "Task Manager",
      description:
        "A to-do/task manager built with React and localStorage. Includes responsive design and a modern UI.",
      link: "https://your-task-manager.com",
    },
    {
      title: "Blog Platform",
      description:
        "A full-stack blog using React and Node.js. Features include live demos, contact section, and a modern design.",
      link: "https://your-blog-platform.com",
    },
    {
      title: "Power BI Dashboard",
      description:
        "An interactive Power BI dashboard analyzing general store profit/loss data with filters and visual drilldowns.",
      link: "https://your-ecommerce.com",
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
