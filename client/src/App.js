import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectDetails from "./projectDetails.json";

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1100px",
    padding: "1rem 2rem",
    borderBottom: "1px solid #222",
    marginBottom: "2rem",
  },
  navLinks: {
    display: "flex",
    gap: "1rem",
  },
  navLink: {
    padding: "0.8rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#000",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "1rem",
  },
  navLinkHover: {
    backgroundColor: "#ddd",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 800,
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#aaa",
    maxWidth: "800px",
    marginBottom: "3rem",
  },
  projectGallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    width: "100%",
    maxWidth: "1100px",
  },
  projectCard: {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.05)",
    textAlign: "left",
  },
  projectTitle: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  projectDescription: {
    fontSize: "0.95rem",
    color: "#ccc",
    marginBottom: "1rem",
  },
  footer: {
    marginTop: "4rem",
    fontSize: "0.9rem",
    color: "#666",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "2rem",
    maxWidth: "700px",
    color: "#fff",
    textAlign: "left",
    overflowY: "auto",
    maxHeight: "90vh",
  },
  closeBtn: {
    position: "absolute",
    top: "1rem",
    right: "1.5rem",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};

const projects = Object.values(projectDetails);

const academicPath = [
  {
    year: "2020-2021",
    title: "French Lycée Lyautey - Morocco",
    description: "French Baccaleureate in Science with highest honors.",
  },
  {
    year: "2021-2023",
    title: "Lycée Thiers CPGE - France",
    description:
      "Two-year intensive undergraduate preparation courses in advanced mathematics, physics and computer science for the entrance exams to top French Engineering schools",
  },
  {
    year: "2023-2024",
    title: "ENSTA - Year 1",
    description:
      "First year in the engineering program at ENSTA, focusing on fundamental engineering sciences.",
  },
  {
    year: "January 2024",
    title: "Observation Internship - RATP Dev",
    description:
      "Embedded systems internship. Assisted the head of maintenance for embedded systems in Brest's public transport network.",
  },
  {
    year: "2024-2025",
    title: "ENSTA - Year 2",
    description:
      "Specialization in AI, computational theory and radar technologies.",
  },
  {
    year: "Summer 2025",
    title: "Engineering Internship - Cleverlytics",
    description:
      "Real-time LiDAR-camera fusion system for smart mining truck volume analysis.",
  },
  {
    year: "Fall 2025",
    title: "Heriot Watt University - MSc in AI",
    description:
      "Exchange semester at Heriot Watt Dubai focusing on AI, Machine Learning, and Data Science. International experience in a diverse academic environment.",
  },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src="/images/ht-white-transparent.png" alt="Logo" style={{ width: "40px", height: "40px" }} />
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Hugo Tenthorey</div>
        </div>
        <nav style={styles.navLinks}>
          <a style={styles.navLink} href="#about">About</a>
          <a style={styles.navLink} href="#projects">Projects</a>
          <a style={styles.navLink} href="/Hugo_Tenthorey_Resume.pdf" download>Resume</a>
        </nav>
      </header>

      <section id="about">
        <h1 style={styles.title}>Engineering student</h1>
        <h2 style={styles.subtitle}>AI & Observation Systems</h2>
        <p style={{ ...styles.subtitle, textAlign: "justify" }}>
          I am a passionate and dedicated engineering student at ENSTA - Institut Polytechnique de Paris, specializing in Artificial Intelligence, data science, and radar-based observation systems. My academic path is driven by a deep curiosity for complex real-world problems, particularly in the fields of autonomous perception, sensor fusion, and AI-powered decision-making.
        </p>
        <p style={{ ...styles.subtitle, textAlign: "justify" }}>
          Throughout my journey, I've sought to combine theoretical excellence with practical impact. From developing a real-time detection and sensor fusion pipeline for industrial applications, to contributing to the automation of mining transport systems using LiDAR, cameras, and radar sensors during my internship at Cleverlytics (UM6P, Morocco), I thrive in building intelligent systems that bridge technology and field reality.
        </p>
        <p style={{ ...styles.subtitle, textAlign: "justify" }}>
          My experiences have been shaped by an international perspective, with projects and academic opportunities across France, Morocco, and the UAE — reinforcing my adaptability, cross-cultural awareness, and ability to contribute in diverse teams.
        </p>
        <p style={{ ...styles.subtitle, textAlign: "justify" }}>
          Previously, I served as Vice-President of ENSTA's Junior-Entreprise, where I led technical teams and coordinated innovation projects with industrial partners. While I no longer hold the position, this experience profoundly shaped my leadership approach, teaching me how to foster collaboration, accountability, and shared ambition.
        </p>
        <p style={{ ...styles.subtitle, textAlign: "justify" }}>
          What defines me is not just my technical skillset but also my ability to connect with people, share knowledge, and build solutions that make a difference.
          I am now actively looking for internships or collaborations in the field of intelligent systems, automation, AI for industry, or data science, where I can continue to learn, contribute, and grow.
        </p>
      </section>

      <section id="timeline" style={{ width: "100%", maxWidth: "900px", margin: "5rem auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>Academic Path</h2>
        <div style={{ position: "relative", margin: "0 auto", maxWidth: "600px", paddingLeft: "0px" }}>
          {academicPath.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              style={{
                marginBottom: "2.8rem",
                display: "flex",
                alignItems: "flex-start",
                position: "relative",
              }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Structured timeline into two columns */}
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                {/* Left Column: Dots and Dates */}
                <div style={{ position: "relative", width: "150px", textAlign: "right" }}>
                  <span style={{ fontSize: "1rem", fontWeight: "600", color: "#fff" }}>
                    {step.year}
                  </span>
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      border: "2px solid #000",
                      display: "inline-block",
                      marginLeft: "0.5rem",
                    }}
                  ></span>
                </div>

                {/* Separator Line */}
                <div style={{ width: "60px", backgroundColor: "#444", marginLeft: "10px" }}></div>

                {/* Right Column: Title and Description */}
                <div style={{ paddingLeft: "1rem", borderLeft: "2px solid #fff", textAlign: "left", flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#fff",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#ccc", lineHeight: "1.6" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Academic projects I have worked on</h2>
        <div style={styles.projectGallery}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={styles.projectCard}
              onClick={() => setSelectedProject(project)}
            >
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Hugo Tenthorey. Crafted with care.
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalOverlay}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: "-30px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-30px", opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button style={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                &times;
              </button>
              <div style={{ borderBottom: "1px solid #333", marginBottom: "1rem", paddingBottom: "1rem" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{selectedProject.title}</h2>
                <p style={{ fontWeight: "600", color: "#aaa" }}>{selectedProject.details.domain}</p>
              </div>

              <p style={{ color: "#ccc", marginBottom: "2rem", lineHeight: "1.6" }}>
                {selectedProject.details.summary}
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                backgroundColor: "#000",
                borderRadius: "8px",
                marginBottom: "2rem",
                padding: "1.5rem",
                gap: "1rem",
              }}>
                <div>
                  <h4 style={{ color: "#fff", marginBottom: "0.5rem" }}>LANGUAGE</h4>
                  <p style={{ color: "#aaa", lineHeight: "1.5" }}>{selectedProject.details.language}</p>
                </div>
                <div>
                  <h4 style={{ color: "#fff", marginBottom: "0.5rem" }}>KEY TOPICS</h4>
                  <p style={{ color: "#aaa", lineHeight: "1.5" }}>{selectedProject.details.keyTopics}</p>
                </div>
                <div>
                  <h4 style={{ color: "#fff", marginBottom: "0.5rem" }}>TOOLS</h4>
                  <p style={{ color: "#aaa", lineHeight: "1.5" }}>{selectedProject.details.tools}</p>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#fff" }}>Key Features</h4>
                <p style={{ color: "#aaa", lineHeight: "1.8" }}>
                  {selectedProject.details.features}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}