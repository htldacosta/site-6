import { useEffect } from "react";
import "../styles/About.css";

export function About() {
  // Dados da timeline (Fácil de editar)
  const timelineData = [
    {
      id: 1,
      title: "1# Meu começo...",
      text: "Minha jornada no mundo da programação começou em 2017, motivada pela curiosidade e pelo desejo de construir um App e publicar na Play Store. Foi através de um curso online de Java, do canal Curso em Vídeo, que dei meus primeiros passos na lógica e na sintaxe de programação. Essa paixão inicial foi um marco, mas minha evolução foi interrompida em 2019 por conta de problemas de saúde. O tempo longe do código me mostrou a importância de persistir, e em 2021 retornei à programação, desta vez focado em JavaScript, HTML5 e CSS3.",
    },
    {
      id: 2,
      title: "2# Carreira Freelancer",
      text: "O ano de 2022 marcou um ponto de virada: iniciei minha carreira como desenvolvedor freelancer. Nos dois anos seguintes, mergulhei no universo do desenvolvimento front-end, criando interfaces web com React.js e entregando projetos personalizados. Foi uma fase de intenso aprendizado prático. Ao final de 2023, percebi a necessidade de me aprofundar no desenvolvimento back-end para construir aplicações mais robustas, iniciando meus estudos em Java e Spring Boot.",
    },
    {
      id: 3,
      title: "3# Consolidação como Desenvolvedor Backend",
      text: "Minha busca por conhecimento técnico se aprofundou com o início da graduação em Engenharia de Software em 2024. A faculdade me proporcionou uma base sólida em arquitetura de computadores e estruturas de dados. Hoje, sou desenvolvedor Backend voltado para performance e escalabilidade, com conhecimentos em microsserviços, APIs RESTful, Docker, AWS e Kubernetes, além de práticas como SOLID e TDD.",
    },
  ];

  // Lógica da Animação (Scroll Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Opcional: Parar de observar depois que aparecer
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Dispara quando 10% do card estiver visível
    );

    // Seleciona todos os cards renderizados
    const cards = document.querySelectorAll(".timeline-card");
    cards.forEach((card) => observer.observe(card));

    // Limpeza (boa prática no React ao desmontar o componente)
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="sobre-mim-section">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="timeline-container">
          {timelineData.map((item) => (
            <article className="timeline-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
