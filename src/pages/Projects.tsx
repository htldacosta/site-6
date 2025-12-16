import { Github, Globe, Book } from "lucide-react";
import "../styles/Projects.css";

export function Projects() {
  const projects = [
    {
      title: "Dashboard Administrativo React",
      description:
        "Painel de controle completo com gráficos, tabelas e gestão de usuários. Desenvolvido com React, TailwindCSS e ApexCharts.",
      tags: ["React", "TypeScript", "Tailwind"],
      links: {
        demo: "https://seu-dashboard.vercel.app",
        github: "https://github.com/SEU_USER/dashboard-admin",
        docs: "#",
      },
    },
    {
      title: "Chatbot WhatsApp MVP",
      description:
        "Assistente virtual para triagem automática de clientes utilizando Typebot e Evolution API.",
      tags: ["Node.js", "Typebot", "AWS"],
      links: {
        demo: "https://wa.me/5569993002747",
        github: "#",
        docs: "#",
      },
    },
    {
      title: "Portfólio Profissional",
      description:
        "Landing page moderna para apresentação de serviços e projetos.",
      tags: ["React", "Vite", "CSS"],
      links: {
        demo: "#",
        github: "#",
        docs: "#",
      },
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Meus Projetos</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-preview">Preview</div>
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
              {project.links.github !== "#" && (
                <a href={project.links.github} target="_blank">
                  <Github size={20} />
                </a>
              )}
              {project.links.demo !== "#" && (
                <a href={project.links.demo} target="_blank">
                  <Globe size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
