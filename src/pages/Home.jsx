import React from "react";
import "./Home.css";
import myPhoto from "../assets/d.jpg";

function Home() {
  const skills = [
    "HTML", "CSS", "JavaScript", "Python", "MySQL",
    "React.js", "Excel", "Power BI", "MS Office", "SEO", "Database"
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>
            Hi, I’m <span>Deepak Verma</span>
          </h1>
          <p>
            Welcome to my portfolio. I'm a frontend developer passionate about
            building beautiful web apps.
          </p>
        </div>
        <img src={myPhoto} alt="Deepak Verma" className="profile-pic" />
      </div>

      {/* Skills Slider */}
      <div className="skills-slider">
        <div className="slider-track">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
