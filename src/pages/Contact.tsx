import { useState, FormEvent } from "react";
import "../styles/Contact.css";

export function Contact() {
  // Estados para guardar os valores dos campos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Estados para guardar as mensagens de erro
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Validação do Nome
  const validateName = (value: string) => {
    if (value.trim().length < 3) {
      setNameError("O nome deve conter ao menos 3 caracteres.");
      return false;
    }
    setNameError("");
    return true;
  };

  // Validação do Email (Regex simples)
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("O email inserido é inválido.");
      return false;
    }
    setEmailError("");
    return true;
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);

    if (isNameValid && isEmailValid) {
      // Sucesso!
      alert("Mensagem enviada com sucesso! (Simulação)");

      // Limpar formulário
      setName("");
      setEmail("");
      setMessage("");
    } else {
      // Se tentar enviar com erro, validamos os campos visuais novamente
      validateName(name);
      validateEmail(email);
    }
  };

  return (
    <main>
      <section className="contact-section">
        <h2 className="section-title">Entre em Contato</h2>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
              className={nameError ? "input-error" : ""}
              required
            />
            <span className="error-message">{nameError}</span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className={emailError ? "input-error" : ""}
              required
            />
            <span className="error-message">{emailError}</span>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              Enviar Email
            </button>
            <a
              href="https://wa.me/5569993002747?text=Ol%C3%A1,%20eu%20gostaria%20de%20conversar%20sobre%20meu%20projeto%20web..."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
