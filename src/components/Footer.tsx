import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="footer-container"
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        marginTop: "auto",
      }}
    >
      <div
        className="social-links"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <a href="https://github.com/" target="_blank" style={{ color: "#333" }}>
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          style={{ color: "#0077b5" }}
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          style={{ color: "#e4405f" }}
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://wa.me/5569993002747"
          target="_blank"
          style={{ color: "#25D366" }}
        >
          <MessageCircle size={24} />
        </a>
      </div>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Hitalu da Costa.
      </p>
    </footer>
  );
}
