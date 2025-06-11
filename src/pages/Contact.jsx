import React from "react";
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via phone, email, or social media!</p>

        <div className="contact-links">
          <a href="tel:+917526030582" className="contact-item">
            <FaPhone /> +91 7526030582
          </a>

          <a href="mailto:mr.deepakverma7526@gmail.com" className="contact-item">
            <FaEnvelope /> mr.deepakverma7526@gmail.com
          </a>

          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/deepak-verma-3772231aa" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://www.instagram.com/de_denverr" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaInstagram /> Instagram
          </a>

          <a href="https://www.facebook.com/share/1KpB59Zzs7/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaFacebook /> Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
