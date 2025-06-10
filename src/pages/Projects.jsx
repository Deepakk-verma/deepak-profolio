// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "This is my personal portfolio built using React. It highlights my frontend skills, showcases some of the projects I’ve worked on, and includes a contact section. I built it to demonstrate my web development abilities in a real-world format.",
      link: "https://your-portfolio-link.com",
    },
    {
      title: "E-commerce Website",
      description: "Built a full stack e-commerce website using python and Django with integrated frontend and backend  and implement a dynamic shopping system using Django databse and features.",
      link: "https://your-weather-app.com",
    },
    {
      title: "Task Manager",
      description: "A to-do/task manager built with React and localStorage.and contact information. It includes a responsive design, a projects section with live demos, and a modern UI to reflect my frontend development capabilities.",
      link: "https://your-task-manager.com",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog using React and Node.js backend.and contact information. It includes a responsive design, a projects section with live demos, and a modern UI to reflect my frontend development capabilities.",
      link: "https://your-blog-platform.com",
    },
    {
      title: "Power BI Dashboard",
      description: "Utilizing a shopkeeper General store data describing how getting profit and loss by month day and year by visual presentation and creating intractive dashboard to track and online sales data.and used complex parameters to drill in worksheet and customized using filters and slicers.",
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
