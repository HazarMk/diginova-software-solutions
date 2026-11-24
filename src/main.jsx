import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Check, Code2, LayoutDashboard, MapPin, Menu, Smartphone, Sparkles, X } from 'lucide-react';
import './styles.css';

const services = [
  {
    number: '01',
    title: 'Applications web',
    text: 'Des expériences web claires et performantes, conçues pour vos clients comme pour vos équipes.',
    Icon: LayoutDashboard,
  },
  {
    number: '02',
    title: 'Solutions mobiles',
    text: 'Vos services à portée de main, avec des parcours simples et une attention portée à chaque écran.',
    Icon: Smartphone,
  },
  {
    number: '03',
    title: 'Outils sur mesure',
    text: 'Des outils adaptés à votre activité pour simplifier le quotidien et faire grandir vos idées.',
    Icon: Sparkles,
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a className="brand" href="#accueil" aria-label="Diginova, accueil" onClick={closeMenu}>
        <img src="/logo-diginova.png" alt="Diginova Software Solutions" />
      </a>
      <button
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">
        <a href="#expertises" onClick={closeMenu}>Expertises</a>
        <a href="#apropos" onClick={closeMenu}>À propos</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="https://wa.me/21627590950" target="_blank" rel="noreferrer">
          Parlons de votre projet <ArrowUpRight size={17} />
        </a>
      </nav>
    </header>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Illustration abstraite évoquant la création numérique">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-grid" />
      <div className="art-label label-top">
        <span className="label-icon">✳</span><span>Des idées<br /><b>en mouvement</b></span>
      </div>
      <div className="code-card">
        <div className="card-top"><span /><span /><span /><small>DIGI / 01</small></div>
        <div className="code-content">
          <div className="code-glyph">D<span>✳</span></div>
          <div className="code-lines"><i /><i /><i /><i /></div>
        </div>
        <div className="card-caption">Créer · Connecter · Évoluer</div>
      </div>
      <div className="art-label label-bottom">
        <span className="spark">✦</span><span>Le prochain pas<br />commence <b>ici.</b></span>
      </div>
      <div className="floating-square square-a" />
      <div className="floating-square square-b" />
      <div className="floating-square square-c" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Studio logiciel · Gabès, Tunisie</div>
        <h1>Vos idées méritent<br />un <span>bel avenir numérique.</span></h1>
        <p className="hero-lead">Diginova accompagne les entreprises dans la création de solutions logicielles utiles, soignées et pensées pour durer.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Démarrer une conversation <ArrowUpRight size={17} /></a>
          <a className="text-link" href="#expertises">Découvrir nos expertises <ArrowDown size={15} /></a>
        </div>
        <div className="hero-note"><span className="note-line" /><span>À vos côtés, de la première idée au prochain chapitre.</span></div>
      </div>
      <HeroArt />
      <div className="hero-index"><span>01</span><span className="index-rule" /><span>05</span></div>
    </section>
  );
}

function Ticker() {
  return (
    <section className="ticker" aria-label="Nos valeurs">
      <div className="ticker-track">
        {[0, 1].map((group) => (
          <div className="ticker-group" key={group} aria-hidden={group === 1}>
            <span>Technologie utile</span><i>✳</i><span>Idées ambitieuses</span><i>✳</i><span>Réalisations soignées</span><i>✳</i>
          </div>
        ))}
      </div>
    </section>
  );
}

function Expertises() {
  return (
    <section className="expertises section-wrap" id="expertises">
      <div className="section-heading">
        <div><div className="eyebrow"><span className="eyebrow-number">01 /</span> Ce que nous faisons</div><h2>Le bon outil<br />change <em>tout.</em></h2></div>
        <p>Chaque projet commence par une question simple : comment le numérique peut-il vous aider, concrètement ?</p>
      </div>
      <div className="service-grid">
        {services.map(({ number, title, text, Icon }) => (
          <article className="service-card" key={number}>
            <span className="service-num">{number}</span>
            <div className="service-icon"><Icon size={36} strokeWidth={1.5} /></div>
            <h3>{title}</h3><p>{text}</p>
            <a href="#contact" aria-label={`Parler de ${title.toLowerCase()}`}><ArrowUpRight size={18} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="apropos">
      <div className="about-inner">
        <div className="about-stamp">DIGI<br /><b>NOVA</b><span>SOFTWARE SOLUTIONS</span></div>
        <div className="about-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-number">02 /</span> Notre approche</div>
          <h2>La technologie<br />doit <em>vous ressembler.</em></h2>
          <p>Chez Diginova, nous croyons que les meilleures solutions naissent d’une bonne écoute. Nous prenons le temps de comprendre votre activité pour imaginer un numérique qui lui ressemble.</p>
          <a href="#contact" className="light-link">Faisons connaissance <ArrowUpRight size={16} /></a>
        </div>
        <div className="about-decoration">D<span>✳</span></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-intro">
        <div className="eyebrow"><span className="eyebrow-number">03 /</span> À votre écoute</div>
        <h2>Une idée en tête ?<br /><em>On vous écoute.</em></h2>
        <p>Un projet, une question ou simplement envie d’échanger ? Rabeb et l’équipe Diginova sont là pour en parler.</p>
        <a className="button button-primary" href="https://wa.me/21627590950" target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowUpRight size={17} /></a>
      </div>
      <div className="contact-details">
        <div className="contact-person"><div className="avatar">RD</div><div><b>Rabeb DABEGHI</b><span>CEO · Diginova</span></div></div>
        <a className="contact-row" href="tel:+21627590950"><span className="contact-symbol"><Smartphone size={16} /></span><span><small>Téléphone & WhatsApp</small>+216 27 590 950</span><b><ArrowUpRight size={16} /></b></a>
        <a className="contact-row" href="mailto:diginova2727@gmail.com"><span className="contact-symbol">✉</span><span><small>Courriel</small>diginova2727@gmail.com</span><b><ArrowUpRight size={16} /></b></a>
        <a className="contact-row" href="https://instagram.com/diginova_software_solutions" target="_blank" rel="noreferrer"><span className="contact-symbol">◎</span><span><small>Instagram</small>@diginova_software_solutions</span><b><ArrowUpRight size={16} /></b></a>
        <div className="contact-row address"><span className="contact-symbol"><MapPin size={16} /></span><span><small>Nous trouver</small>Rue Abou El Kacem Chebbi, Immeuble Yasmine,<br />1er étage, Chentech, 6011 Gabès, Tunisie</span></div>
        <a className="flyer-link" href="/flyer-diginova.pdf" target="_blank" rel="noreferrer">Consulter notre flyer <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a className="footer-brand" href="#accueil"><img src="/logo-diginova.png" alt="Diginova" /></a>
      <span>Des solutions logicielles, pensées pour vous.</span>
      <span>© {new Date().getFullYear()} Diginova Software Solutions</span>
      <a href="#accueil" className="back-top">Retour en haut ↑</a>
    </footer>
  );
}

function App() {
  return <><Header /><main><Hero /><Ticker /><Expertises /><About /><Contact /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
