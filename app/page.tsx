"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const whatsappBase = "https://wa.me/5551999999999";
const whatsapp = `${whatsappBase}?text=${encodeURIComponent("Olá, encontrei o site da Clínica Sorriso Essencial e gostaria de agendar uma avaliação.")}`;

const treatments = [
  { n: "01", title: "Prevenção & limpeza", text: "Cuidado periódico para manter a saúde da gengiva, prevenir cáries e preservar seu sorriso por muito mais tempo.", tag: "Para toda a família" },
  { n: "02", title: "Clareamento", text: "Um plano seguro e personalizado para iluminar o sorriso com naturalidade, respeitando a sensibilidade de cada paciente.", tag: "Estética natural" },
  { n: "03", title: "Ortodontia", text: "Alinhadores e aparelhos com acompanhamento próximo para melhorar função, conforto e harmonia do sorriso.", tag: "Adultos e crianças" },
  { n: "04", title: "Implantes", text: "Planejamento cuidadoso para recuperar segurança ao falar e mastigar, com explicações claras em cada etapa.", tag: "Confiança renovada" },
];

const testimonials = [
  { quote: "Eu adiava a consulta por medo. Fui ouvida com muita calma e tudo foi explicado antes de começar. Saí aliviada e já marquei meu retorno.", name: "Mariana F.", detail: "Paciente de prevenção" },
  { quote: "Levei meu filho para a primeira avaliação e a experiência foi leve do início ao fim. Ele voltou para casa orgulhoso do próprio sorriso.", name: "Carla e Pedro", detail: "Atendimento infantil" },
  { quote: "O planejamento do meu implante foi muito claro. Saber o que aconteceria em cada etapa me trouxe a segurança que eu precisava.", name: "Roberto L.", detail: "Paciente de implante" },
];

const faqs = [
  ["Tenho medo de dentista. Como funciona o atendimento?", "Começamos com uma conversa sem pressa. Você conta suas experiências e limites, e cada etapa é explicada antes de qualquer procedimento. Pausas são sempre respeitadas."],
  ["A clínica atende crianças?", "Sim. O atendimento infantil é conduzido de forma lúdica e gradual, criando uma relação positiva com o cuidado odontológico desde cedo."],
  ["A avaliação já inclui algum procedimento?", "A primeira consulta é dedicada à escuta, exame clínico e definição das prioridades. Caso seja indicado algum procedimento simples, a equipe explica previamente e combina com você."],
  ["Quais são as formas de pagamento?", "A clínica oferece opções de pagamento à vista e parcelado. As condições variam conforme o tratamento e são apresentadas com transparência após a avaliação."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [slide, setSlide] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyAddress = async () => {
    await navigator.clipboard.writeText("Rua das Acácias, 128 — Centro, Salvador do Sul — RS");
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Clínica Sorriso Essencial — início"><span className="brand-mark">S</span><span>Clínica <b>Sorriso Essencial</b></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu"><span/><span/></button>
        <nav className={menuOpen ? "open" : ""} aria-label="Menu principal">
          <a href="#tratamentos" onClick={() => setMenuOpen(false)}>Tratamentos</a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>Nossa experiência</a>
          <a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar avaliação <span>↗</span></a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span/> Odontologia gentil em Salvador do Sul</p>
            <h1>Feita para cuidar do seu <em>sorriso.</em> Feita para acolher <em>você.</em></h1>
            <p className="hero-lead">Atendimento odontológico completo para adultos e crianças, com olhar atento, planejamento claro e uma experiência que respeita o seu ritmo.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span>↗</span></a>
              <a className="text-link" href="#tratamentos">Conhecer tratamentos <span>↓</span></a>
            </div>
            <div className="trust-row"><div className="faces"><span>MF</span><span>RL</span><span>CA</span></div><div><b>5,0 <span className="stars">★★★★★</span></b><small>Avaliações de pacientes</small></div></div>
          </div>
          <div className="hero-visual reveal">
            <div className="arch-image"><Image fill priority unoptimized sizes="(max-width: 760px) 90vw, 45vw" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85" alt="Paciente sorrindo durante atendimento odontológico" /></div>
            <div className="hero-stamp">cuidado que<br/><i>acolhe</i></div>
            <form className="hero-booking" onSubmit={(e) => { e.preventDefault(); const d = new FormData(e.currentTarget); const message = `Olá, encontrei o site da Clínica Sorriso Essencial. Meu nome é ${d.get("nome")}, meu WhatsApp é ${d.get("telefone")} e gostaria de agendar uma avaliação.`; window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank"); }}>
              <div><span className="pulse"/><p><b>Agende sua avaliação</b><small>Retornamos pelo WhatsApp.</small></p></div>
              <label><span>Nome</span><input name="nome" required placeholder="Como podemos chamar você?" /></label>
              <label><span>WhatsApp</span><input name="telefone" type="tel" required placeholder="(51) 99999-9999" /></label>
              <button type="submit">Quero agendar <span>↗</span></button>
            </form>
          </div>
        </section>

        <section className="welcome-strip" aria-label="Diferenciais"><p>Da primeira conversa ao acompanhamento</p><div><span>Escuta atenta</span><span>Planejamento individual</span><span>Cuidado em família</span><span>Ambiente tranquilo</span></div></section>

        <section className="comfort" id="experiencia">
          <div className="comfort-photo reveal"><Image fill unoptimized sizes="(max-width: 760px) 90vw, 38vw" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85" alt="Consultório odontológico claro, moderno e acolhedor"/><span className="photo-label">Um ambiente pensado para você respirar tranquilo.</span></div>
          <div className="comfort-copy reveal"><p className="eyebrow"><span/> Uma experiência diferente</p><h2>Ir ao dentista pode ser mais <em>leve</em> do que você imagina.</h2><p>Sabemos que cada pessoa chega com uma história. Por isso, a consulta começa ouvindo você — suas dúvidas, expectativas e até seus receios.</p><div className="principles"><article><b>01</b><div><h3>Sem julgamentos</h3><p>Você é acolhido exatamente como está, mesmo que faça tempo desde sua última consulta.</p></div></article><article><b>02</b><div><h3>Sem surpresas</h3><p>Explicamos opções, prioridades e investimentos antes de qualquer decisão.</p></div></article><article><b>03</b><div><h3>No seu tempo</h3><p>O plano respeita sua rotina e seu conforto, com acompanhamento próximo.</p></div></article></div></div>
        </section>

        <section className="treatments" id="tratamentos">
          <div className="section-head reveal"><div><p className="eyebrow light"><span/> Cuidado completo</p><h2>Tratamentos para cada fase do seu <em>sorriso.</em></h2></div><p>Da prevenção à reabilitação, combinamos técnica, delicadeza e um plano construído junto com você.</p></div>
          <div className="treatment-list reveal">{treatments.map((t) => <article key={t.n}><span className="t-number">{t.n}</span><div><h3>{t.title}</h3><p>{t.text}</p></div><span className="t-tag">{t.tag}</span><a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Agendar avaliação para ${t.title}`}>↗</a></article>)}</div>
          <p className="treatment-more">Também cuidamos de restaurações, próteses, tratamento de canal e urgências odontológicas.</p>
        </section>

        <section className="journey">
          <div className="journey-copy reveal"><p className="eyebrow"><span/> Como cuidamos de você</p><h2>Uma jornada simples, com você no <em>centro.</em></h2><p>Sem decisões apressadas. Primeiro entendemos, depois planejamos e só então começamos.</p><a className="btn btn-outline" href={whatsapp} target="_blank" rel="noreferrer">Quero dar o primeiro passo <span>↗</span></a></div>
          <ol className="timeline reveal"><li><span>01</span><div><h3>Conversa inicial</h3><p>Você conta o que sente e o que deseja mudar.</p></div></li><li><span>02</span><div><h3>Avaliação cuidadosa</h3><p>Examinamos sua saúde bucal e esclarecemos dúvidas.</p></div></li><li><span>03</span><div><h3>Plano transparente</h3><p>Você recebe opções claras, prioridades e próximos passos.</p></div></li><li><span>04</span><div><h3>Cuidado contínuo</h3><p>Acompanhamos sua evolução durante e após o tratamento.</p></div></li></ol>
        </section>

        <section className="testimonials">
          <div className="testimonial-card reveal"><span className="quote-mark">“</span><div className="stars">★★★★★</div><blockquote>{testimonials[slide].quote}</blockquote><div className="person"><span>{testimonials[slide].name.split(" ").map(x => x[0]).join("")}</span><div><b>{testimonials[slide].name}</b><small>{testimonials[slide].detail}</small></div></div><div className="slider-nav"><button onClick={() => setSlide((slide + testimonials.length - 1) % testimonials.length)} aria-label="Depoimento anterior">←</button><span>{slide + 1} / {testimonials.length}</span><button onClick={() => setSlide((slide + 1) % testimonials.length)} aria-label="Próximo depoimento">→</button></div></div>
          <div className="testimonial-intro reveal"><p className="eyebrow"><span/> Histórias reais, sorrisos tranquilos</p><h2>Confiança se constrói em cada <em>detalhe.</em></h2><p>O melhor resultado começa quando você se sente seguro para cuidar de si.</p></div>
        </section>

        <section className="faq" id="duvidas"><div className="faq-intro reveal"><p className="eyebrow"><span/> Antes da sua visita</p><h2>Dúvidas que podem estar passando pela sua <em>cabeça.</em></h2><p>Se a sua pergunta não estiver aqui, fale com a nossa equipe. Será um prazer ajudar.</p></div><div className="accordion reveal">{faqs.map((f, i) => <article key={f[0]} className={activeFaq === i ? "active" : ""}><button onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}><span>{f[0]}</span><i>{activeFaq === i ? "−" : "+"}</i></button><div><p>{f[1]}</p></div></article>)}</div></section>

        <section className="contact" id="contato">
          <div className="location reveal"><p className="eyebrow light"><span/> Perto de você</p><h2>Um cuidado próximo, no coração de <em>Salvador do Sul.</em></h2><div className="address"><span>⌖</span><div><b>Rua das Acácias, 128 — Centro</b><p>Salvador do Sul — RS • CEP 95750-000</p></div></div><div className="location-actions"><button onClick={copyAddress}>{copied ? "Endereço copiado!" : "Copiar endereço"}</button><a href="https://www.google.com/maps/search/?api=1&query=Salvador+do+Sul+RS" target="_blank" rel="noreferrer">Abrir rota ↗</a></div><div className="hours"><span className="pulse"/><div><b>Atendimento hoje</b><p>Seg–Sex: 8h–18h · Sábado: 8h–12h</p></div></div></div>
          <div className="booking reveal"><p className="eyebrow"><span/> Agende sua avaliação</p><h2>Vamos conversar sobre o seu sorriso?</h2><p>Preencha os dados e abra uma conversa com nossa equipe no WhatsApp.</p><form onSubmit={(e) => { e.preventDefault(); const d = new FormData(e.currentTarget); const message = `Olá, encontrei o site da Clínica Sorriso Essencial. Meu nome é ${d.get("nome")}, procuro ${d.get("atendimento")} e prefiro o horário da ${d.get("horario")}. Gostaria de agendar uma avaliação.`; window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank"); }}><label>Seu nome<input name="nome" required placeholder="Como podemos chamar você?"/></label><label>Tipo de atendimento<select name="atendimento" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Avaliação geral</option><option>Limpeza e prevenção</option><option>Clareamento</option><option>Ortodontia</option><option>Implantes</option><option>Atendimento infantil</option></select></label><label>Melhor horário<select name="horario" required defaultValue=""><option value="" disabled>Selecione um período</option><option>manhã</option><option>tarde</option></select></label><button className="btn btn-primary" type="submit">Enviar pelo WhatsApp <span>↗</span></button><small>Ao enviar, você será direcionado ao WhatsApp. Seus dados não ficam armazenados neste site.</small></form></div>
        </section>

        <section className="final-cta"><p>Seu próximo sorriso começa com uma conversa.</p><a href={whatsapp} target="_blank" rel="noreferrer">Agendar minha avaliação <span>↗</span></a></section>
      </main>

      <footer><div className="footer-brand"><a href="#inicio" className="brand"><span className="brand-mark">S</span><span>Clínica <b>Sorriso Essencial</b></span></a><p>Odontologia acolhedora para cuidar do que há de mais espontâneo em você: o seu sorriso.</p></div><div><h3>Navegue</h3><a href="#tratamentos">Tratamentos</a><a href="#experiencia">Experiência</a><a href="#duvidas">Dúvidas</a></div><div><h3>Contato</h3><a href="tel:+5551999999999">(51) 99999-9999</a><a href="mailto:ola@sorrisoessencial.com.br">ola@sorrisoessencial.com.br</a><p>Salvador do Sul — RS</p></div><div className="footer-note"><p>© 2026 Clínica Sorriso Essencial</p><p>Site demonstrativo · Dados fictícios</p></div></footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp"><span>◉</span><b>Fale conosco</b></a>
    </>
  );
}
