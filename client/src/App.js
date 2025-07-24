import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "IoT Network Resilience",
      description: "Graph-based models for resilient topologies using clustering analysis.",
      details: {
        domain: "Computer Science – 2024",
        summary:
          "Modeling IoT topologies as dynamic graphs to simulate sensor failures and recoveries, ensuring optimal information flow in case of device loss.",
        language: "Python (OOP), Qt Designer",
        keyTopics: "IoT, Graph Theory, Clustering, Resilience",
        tools: "KNN, NetworkX, GraphLib",
        features: [
          "Dynamic graph-based topology",
          "Real-time resilience metrics",
          "GUI-based simulation control",
        ],
      },
    },
    {
      title: "Multi-Camera Object Detection",
      description: "YOLOv8 + DeepSORT for real-time abandoned luggage detection across multiple RTSP streams.",
      details: {
        domain: "AI & Computer Vision – 2024",
        summary:
          "Surveillance system detecting and tracking abandoned objects in crowded scenes via cross-stream fusion.",
        language: "Python, OpenCV, PyTorch",
        keyTopics: "Object Detection, Multi-Cam, Tracking",
        tools: "YOLOv8, DeepSORT, OpenCV",
        features: [
          "Multi-camera fusion",
          "Abandoned object detection logic",
          "Real-time RTSP streaming support",
        ],
      },
    },
  ];

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
          <a style={styles.navLink} href="/hugo_tenthorey_resume.pdf" download>Resume</a>
        </nav>
      </header>

      <section id="about">
        <h1 style={styles.title}>Engineering student</h1>
        <h2 style={styles.subtitle}>AI & Observation Systems</h2>
        <p style={{ ...styles.subtitle, textAlign: "justify" }}>
          I am a passionate and dedicated student at ENSTA,
          specializing in the transformative fields of machine
          learning, data science, and radar technologies. My
          journey has been defined by a relentless curiosity for
          solving complex problems and an unwavering
          commitment to personal and professional growth.
          As the vice-president of the Junior-Entreprise, I've
          honed my leadership skills by guiding teams through
          innovative projects and fostering an environment of
          collaboration and excellence. Balancing the demands of
          academic rigor with hands-on experiences, I've
          cultivated a strong work ethic that drives me to deliver
          impactful results.
          What sets me apart is my ability to blend technical
          expertise with a human touch—whether it's mentoring
          peers, leading group initiatives, or diving into the
          intricacies of AI-driven systems. I thrive at the
          intersection of technology and teamwork, always
          seeking ways to bridge ideas with implementation.
        </p>
      </section>

      <section id="projects" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Projects I have worked on</h2>
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
              <h2>{selectedProject.title}</h2>
              <div style={styles.projectDetailSection}>
                <div style={styles.detailHeading}>Domain</div>
                <div style={styles.detailContent}>{selectedProject.details.domain}</div>

                <div style={styles.detailHeading}>Summary</div>
                <div style={styles.detailContent}>{selectedProject.details.summary}</div>

                <div style={styles.detailHeading}>Languages</div>
                <div style={styles.detailContent}>{selectedProject.details.language}</div>

                <div style={styles.detailHeading}>Topics</div>
                <div style={styles.detailContent}>{selectedProject.details.keyTopics}</div>

                <div style={styles.detailHeading}>Tools</div>
                <div style={styles.detailContent}>{selectedProject.details.tools}</div>

                <div style={styles.detailHeading}>Main Features</div>
                <ul style={{ paddingLeft: "1.2rem", color: "#aaa" }}>
                  {selectedProject.details.features.map((f, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>{f}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}