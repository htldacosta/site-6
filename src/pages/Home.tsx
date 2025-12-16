import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
// SE SUA FOTO FOR .jpg, MUDE O FINAL DESTA LINHA PARA .jpg
import myPhoto from "../assets/images/minha-foto.png";
import "../styles/Home.css";

export function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <span className="greeting">Olá, eu sou</span>
          <h1 className="name">Hitalu da Costa</h1>
          <h2 className="role">
            Desenvolvedor Fullstack & Especialista em Chatbots
          </h2>
          <p className="description">
            Transformo ideias em soluções digitais de alta performance.
            Especializado em Java, React e Automação com IA.
          </p>

          <div className="cta-buttons">
            <a
              href="https://wa.me/5569993002747"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>

            <Link to="/projetos" className="btn-secondary">
              Ver Projetos <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={myPhoto} alt="Hitalu da Costa" />
          </div>
        </div>
      </section>
    </div>
  );
}
