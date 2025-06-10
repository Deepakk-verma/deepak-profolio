import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects"; // ✅ only this one should stay
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <nav className="navbar">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Deepak Verma. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
