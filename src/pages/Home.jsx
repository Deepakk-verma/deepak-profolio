import React from "react";
import "./Home.css";
import myPhoto from "../assets/d.jpg";
import { FaArrowDown, FaPhone } from "react-icons/fa";

function Home() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Python", "MySQL", 
    "Power BI", "Excel", "SEO", "Git", "Firebase"
  ];

  return (
    <div className="home-wrapper">
      <div className="intro-section">
        <img src={myPhoto} alt="Deepak Verma" className="hero-img" />
        <h1>Hi, I’m <span>Deepak Verma</span></h1>
        <p>Hi, I’m Deepak Verma, a passionate and detail-oriented Software Engineer with a strong foundation in frontend development and problem-solving. I specialize in building modern, responsive web applications using technologies like HTML, CSS, JavaScript, React, and Python.</p>

        <div className="btn-group">
          <a href="/d.pdf" download className="btn download">
            <FaArrowDown /> Download My CV
          </a>
          <a href="tel:+917526030582" className="btn contact">
            <FaPhone /> Contact Me
          </a>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
