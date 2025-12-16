import { Github, ExternalLink, Code2 } from "lucide-react";
import "../styles/Projects.css";

export function Projects() {
  const projects = [
    {
      title: "Dashboard Administrativo",
      description:
        "Painel de controle completo para gestão, com gráficos, tabelas e indicadores. Focado em usabilidade e design limpo.",
      tags: ["HTML", "CSS", "JavaScript", "Admin"],
      // Caminho para o arquivo na pasta public
      demoUrl: "https://dashboard-admin-srgm.vercel.app/",
      githubUrl: "https://github.com/htldacosta/dashboard-admin", // Coloque o link real se tiver
      image: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", // Placeholder bonito
    },
    {
      title: "Site Institucional - Escola",
      description:
        "Portal educacional completo com áreas para cursos, professores e blog. Design responsivo e moderno.",
      tags: ["Bootstrap", "JQuery", "Responsive"],
      demoUrl: "/portfolio/escola/index.html",
      githubUrl: "https://github.com/SEU_USER/site-escola",
      image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
      title: "Landing Page - Loja Whey",
      description:
        "Página de vendas de alta conversão para produtos de suplementação. Otimizada para mobile e velocidade.",
      tags: ["HTML5", "CSS3", "Animation"],
      demoUrl: "/portfolio/loja-whey/index.html",
      githubUrl: "https://github.com/SEU_USER/loja-whey",
      image: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Meus Projetos</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Área clicável da imagem/preview */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-preview-link"
            >
              <div
                className="project-preview"
                style={{ background: project.image }}
              >
                <div className="preview-overlay">
                  <span>Ver Projeto Real</span>
                  <ExternalLink size={24} />
                </div>
              </div>
            </a>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="links">
                {/* Botão Ver Projeto */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link demo"
                  title="Abrir Projeto"
                >
                  <ExternalLink size={18} /> Ver Online
                </a>

                {/* Botão GitHub (Opcional) */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link github"
                  title="Ver Código"
                >
                  <Github size={18} /> Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
