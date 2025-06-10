import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ name: "", email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login process
    if (form.email === "test@example.com" && form.password === "123456") {
      setMessage(`Welcome back, ${form.name || "User"}!`);
    } else {
      setMessage("Invalid credentials. Try email: test@example.com, password: 123456");
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "linear-gradient(135deg, #1e1e2f 0%, #0f1624 100%)", overflow: "hidden" }}>
      {/* Animated Background SVG shapes */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="20" cy="20" r="10" fill="#00d8ff" />
        <circle cx="80" cy="80" r="15" fill="#007acc" />
        <circle cx="50" cy="50" r="7" fill="#00d8ff" />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "relative",
          maxWidth: "400px",
          margin: "5rem auto",
          backgroundColor: "#292b3c",
          padding: "2.5rem",
          borderRadius: "14px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          color: "#fff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          zIndex: 10,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#00d8ff", fontWeight: "700" }}>
          Virtual Login
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <InputWithIcon
            icon={<FaUserAlt />}
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <InputWithIcon
            icon={<FaEnvelope />}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div style={{ position: "relative" }}>
            <InputWithIcon
              icon={<FaLock />}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#00d8ff",
                fontSize: "1.1rem",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", userSelect: "none" }}>
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              style={{ cursor: "pointer" }}
            />
            Remember me
          </label>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#00d8ff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              padding: "0.9rem",
              borderRadius: "10px",
              border: "none",
              fontWeight: "700",
              fontSize: "1.1rem",
              cursor: "pointer",
              backgroundColor: "#007acc",
              color: "#fff",
              transition: "all 0.3s ease",
            }}
          >
            Login
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginTop: "1.5rem", textAlign: "center", color: "#00ff99" }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

function InputWithIcon({ icon, ...props }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1f2233",
        borderRadius: "10px",
        padding: "0.75rem 1rem",
        color: "#fff",
      }}
    >
      <span style={{ marginRight: "10px", fontSize: "1.2rem", color: "#00d8ff" }}>{icon}</span>
      <input
        {...props}
        style={{
          flex: 1,
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          fontSize: "1rem",
          color: "#fff",
        }}
      />
    </div>
  );
}
