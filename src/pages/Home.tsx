import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import profileImg from "../assets/images/minha-foto.png"; // Importando a imagem

export function Home() {
  // Estado para controlar se a animação deve rodar (igual ao slide.js)
  const [animated, setAnimated] = useState(false);

  // Lista de skills para facilitar a manutenção
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    },
    {
      name: "Spring",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    },
    {
      name: "Go",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    },
  ];

  useEffect(() => {
    // Verifica preferência de movimento do usuário
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimated(true);
    }
  }, []);

  return (
    <main>
      {/* SECTION HERO */}
      <section className="sec">
        <div
          className="sec-imagem"
          style={{ backgroundImage: `url(${profileImg})` }} // Uso correto da imagem no React
          aria-label="Foto de perfil de Hitalu"
        ></div>

        <div className="sec-content">
          <h1>Desenvolvedor de Software Backend</h1>
          <p>Java | Spring Boot | Cloud Computing</p>
          <Link to="/projetos" className="btn btn-primary">
            Ver Portfólio
          </Link>
        </div>
      </section>

      {/* SECTION PROJETOS (Resumo) */}
      <section id="projetos" className="projetos">
        <h2 className="section-title">Projetos</h2>
        <div className="projeto-grid">
          {/* Card 1 */}
          <article className="projeto-card">
            <div className="projeto-imagem-placeholder"></div>
            <h3>Projeto 1</h3>
          </article>
          {/* Card 2 */}
          <article className="projeto-card">
            <div className="projeto-imagem-placeholder"></div>
            <h3>Projeto 2</h3>
          </article>
          {/* Card 3 */}
          <article className="projeto-card">
            <div className="projeto-imagem-placeholder"></div>
            <h3>Projeto 3</h3>
          </article>
        </div>
        <Link to="/projetos" className="btn btn-primary">
          Ver Todos os Projetos
        </Link>
      </section>

      {/* SECTION COMPETÊNCIAS (Carrossel) */}
      <section id="competencias" className="skills">
        <h2 className="section-title">Competências</h2>

        <div className="scroller" data-animated={animated}>
          <ul className="skills-list">
            {/* Renderiza a lista original */}
            {skills.map((skill, index) => (
              <li className="skill-item" key={`original-${index}`}>
                <img src={skill.icon} alt={skill.name} title={skill.name} />
              </li>
            ))}
            {/* Renderiza a lista DUPLICADA se a animação estiver ativa (para criar o loop) */}
            {animated &&
              skills.map((skill, index) => (
                <li
                  className="skill-item"
                  key={`duplicated-${index}`}
                  aria-hidden="true"
                >
                  <img src={skill.icon} alt={skill.name} />
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* SECTION SOBRE (Resumo) */}
      <section id="sobre" className="sobre">
        <div className="sobre-content">
          <div className="sobre-text">
            <h2
              className="section-title"
              style={{ textAlign: "left", margin: 0 }}
            >
              Sobre mim
            </h2>
            <p style={{ marginTop: "20px" }}>
              Um profissional em busca de soluções robustas na engenharia de
              sistemas, especializado em Java e arquitetura de software
              escalável.
            </p>
          </div>
          <div className="sobre-button">
            <Link to="/sobre" className="btn btn-secondary">
              Ver perfil completo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
