import "../styles/Projects.css";

export function Projects() {
  // Dados dos projetos (Fica muito mais fácil adicionar ou remover itens aqui)
  const projectsData = [
    {
      id: 1,
      title: "Serviço de E-mail",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      techs: ["Java", "Spring Boot", "AWS"],
      docLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      title: "Newsletter",
      description:
        "Sistema de envio de newsletters automatizado com integração de banco de dados NoSQL para alta performance.",
      techs: ["Java", "Spring", "MongoDB", "AWS"],
      docLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      title: "Cadastro de Alunos",
      description:
        "Aplicação completa para gestão escolar, permitindo cadastro, edição e remoção de alunos e professores.",
      techs: ["Java", "PostgreSQL", "Spring"],
      docLink: "#",
      repoLink: "#",
    },
    {
      id: 4,
      title: "API de Investimentos",
      description:
        "Simulador de investimentos que calcula rendimentos baseados em taxas variáveis e fixas.",
      techs: ["PostgreSQL", "Spring Boot", "Java"],
      docLink: "#",
      repoLink: "#",
    },
    {
      id: 5,
      title: "Dashboard Financeiro",
      description:
        "Interface para visualização de gastos e receitas, com gráficos interativos e relatórios.",
      techs: ["React.js", "Spring Boot", "PostgreSQL"],
      docLink: "#",
      repoLink: "#",
    },
    {
      id: 6,
      title: "Microsserviço de Pagamentos",
      description:
        "Arquitetura de microsserviços para processar pagamentos de forma assíncrona e segura.",
      techs: ["Go", "RabbitMQ", "Docker"],
      docLink: "#",
      repoLink: "#",
    },
  ];

  return (
    <main>
      <section className="portfolio-section">
        <h2 className="section-title">Meus Projetos</h2>

        <div className="portfolio-grid">
          {projectsData.map((project) => (
            <article className="portfolio-card" key={project.id}>
              <div className="card-imagem-placeholder">
                {/* Futuramente você pode colocar uma imagem real aqui */}
                <span>Imagem do Projeto</span>
              </div>

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="card-tech">
                  {project.techs.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-buttons">
                  <a
                    href={project.docLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Documentação
                  </a>
                  <a
                    href={project.repoLink}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
