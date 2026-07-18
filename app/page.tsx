"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const whatsappBase = "https://wa.me/5551999999999";
const defaultMessage = "Olá, encontrei o site da Clínica Sorriso Essencial e gostaria de agendar uma avaliação.";
const whatsapp = `${whatsappBase}?text=${encodeURIComponent(defaultMessage)}`;

const services = [
  { icon: "◡", title: "Clínica geral", text: "Consultas, limpeza e prevenção para manter sua saúde bucal sempre em dia." },
  { icon: "✦", title: "Estética dental", text: "Clareamento e soluções estéticas para um sorriso bonito e natural." },
  { icon: "◆", title: "Restaurações", text: "Recupere dentes danificados com técnicas modernas e acabamento cuidadoso." },
  { icon: "⌁", title: "Ortodontia", text: "Aparelhos e alinhadores para melhorar função, conforto e alinhamento." },
  { icon: "♢", title: "Implantes dentários", text: "Planejamento seguro para recuperar confiança ao sorrir e mastigar." },
  { icon: "◇", title: "Atendimento infantil", text: "Cuidado leve e acolhedor para criar boas experiências desde cedo." },
];

const benefits = [
  ["♙", "Equipe experiente"],
  ["♢", "Tecnologia atual"],
  ["♡", "Ambiente confortável"],
  ["☆", "Atendimento bem avaliado"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá, encontrei o site da Clínica Sorriso Essencial. Meu nome é ${data.get("nome")}, meu telefone é ${data.get("telefone")}, procuro ${data.get("servico")} e prefiro atendimento em ${data.get("periodo")}.`;
    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <>
      <header className="header">
        <a className="logo" href="#inicio" aria-label="Clínica Sorriso Essencial — início">
          <span className="logo-icon">S</span>
          <span>Clínica <b>Sorriso Essencial</b></span>
        </a>
        <button className="menu-button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/></button>
        <nav className={menuOpen ? "open" : ""} aria-label="Navegação principal">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a>
          <a href="#tratamentos" onClick={() => setMenuOpen(false)}>Tratamentos</a>
          <a href="#avaliacoes" onClick={() => setMenuOpen(false)}>Avaliações</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="header-button" href={whatsapp} target="_blank" rel="noreferrer"><span>▣</span> Agendar avaliação</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden="true"/>
          <div className="hero-content">
            <p className="kicker">Odontologia humana em Salvador do Sul</p>
            <h1>Dentes saudáveis.<br/><em>Você mais confiante.</em></h1>
            <p>Atendimento odontológico completo, acolhedor e moderno para você e toda a sua família.</p>
            <div className="hero-actions">
              <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer"><span>▣</span> Agendar avaliação</a>
              <a className="button secondary" href="#sobre"><span>▶</span> Conheça a clínica</a>
            </div>
          </div>
          <div className="benefit-bar">{benefits.map(([icon, label]) => <div key={label}><span>{icon}</span><b>{label}</b></div>)}</div>
        </section>

        <section className="services section" id="tratamentos">
          <div className="section-title"><span>Nossos tratamentos</span><h2>Cuidado completo para você e sua família</h2><i/></div>
          <div className="service-grid">{services.map(service => <article key={service.title}><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><a href={whatsapp} target="_blank" rel="noreferrer">Saiba mais <span>→</span></a></article>)}</div>
        </section>

        <section className="about-booking section" id="sobre">
          <div className="about-copy">
            <span className="label">Sobre nós</span>
            <h2>Seu sorriso é a nossa paixão</h2><i className="title-line"/>
            <p>Na Clínica Sorriso Essencial, unimos conhecimento, tecnologia e uma abordagem verdadeiramente humana para oferecer um cuidado odontológico seguro e tranquilo.</p>
            <ul><li>Profissionais experientes e atenciosos</li><li>Estrutura moderna e confortável</li><li>Planos de tratamento personalizados</li><li>Explicações claras em todas as etapas</li></ul>
            <a className="small-button" href="#contato">Conheça nosso atendimento</a>
          </div>
          <div className="about-image"><Image fill unoptimized sizes="(max-width: 760px) 100vw, 35vw" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85" alt="Dentista atendendo paciente com cuidado"/></div>
          <form className="booking" id="contato" onSubmit={submitBooking}>
            <div className="booking-title"><span>▣</span><div><h2>Agende sua avaliação</h2><p>Nossa equipe entrará em contato com você.</p></div></div>
            <div className="form-row"><label>Nome completo<input name="nome" required placeholder="Digite seu nome"/></label><label>Telefone<input name="telefone" type="tel" required placeholder="(51) 99999-9999"/></label></div>
            <div className="form-row"><label>Tratamento desejado<select name="servico" required defaultValue=""><option value="" disabled>Selecione</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label><label>Melhor período<select name="periodo" required defaultValue=""><option value="" disabled>Selecione</option><option>pela manhã</option><option>à tarde</option></select></label></div>
            <label>Mensagem<textarea name="mensagem" placeholder="Conte brevemente como podemos ajudar"/></label>
            <button type="submit">Enviar pedido de agendamento</button>
            <small>♡ Seus dados são usados somente para responder ao seu contato.</small>
          </form>
        </section>

        <section className="social-proof section" id="avaliacoes">
          <div className="review"><span className="label">O que nossos pacientes dizem</span><blockquote>“Fui atendida com muita calma e atenção. Tudo foi explicado de forma simples e me senti segura durante toda a consulta.”</blockquote><b>— Mariana F., Salvador do Sul</b><div className="dots"><i/><i/><i/></div></div>
          <div className="stats"><div><span>☆</span><b>5,0 / 5</b><small>Avaliação média</small></div><div><span>♙</span><b>Atendimento</b><small>Adultos e crianças</small></div><div><span>▣</span><b>Seg–Sáb</b><small>Horários flexíveis</small></div></div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div><a className="logo footer-logo" href="#inicio"><span className="logo-icon">S</span><span>Clínica <b>Sorriso Essencial</b></span></a><p>Odontologia de qualidade em um ambiente confortável, acolhedor e próximo de você.</p></div>
          <div><h3>Links rápidos</h3><a href="#inicio">Início</a><a href="#sobre">Sobre nós</a><a href="#tratamentos">Tratamentos</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a></div>
          <div><h3>Tratamentos</h3><a href="#tratamentos">Clínica geral</a><a href="#tratamentos">Estética dental</a><a href="#tratamentos">Ortodontia</a><a href="#tratamentos">Implantes</a><a href="#tratamentos">Atendimento infantil</a></div>
          <div><h3>Contato</h3><p>⌖ Rua das Acácias, 128<br/>Centro — Salvador do Sul, RS</p><a href="tel:+5551999999999">☎ (51) 99999-9999</a><a href="mailto:ola@sorrisoessencial.com.br">✉ ola@sorrisoessencial.com.br</a><p>◷ Seg–Sex: 8h–18h<br/>Sábado: 8h–12h</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Clínica Sorriso Essencial. Site demonstrativo.</span><span>Dados fictícios · Personalize antes de publicar</span></div>
      </footer>

      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">◉</a>
    </>
  );
}
