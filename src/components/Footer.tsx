import "../styles/Header.css"; // Reutilizando estilos de links sociais se houver, ou apenas o global

export function Footer() {
  return (
    <footer
      className="footer"
      style={{
        borderTop: "1px solid #222",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div className="social-links" style={{ marginBottom: "15px" }}>
        <a
          href="https://github.com/htldacosta"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/h-roberto-d-5109a828b/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
      <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
