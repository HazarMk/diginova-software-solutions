import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Code2, LayoutDashboard, MapPin, Menu,
  Smartphone, Sparkles, X,
} from 'lucide-react';
import './styles.css';
import './sectors.css';
import './map.css';
import BackendSection from './BackendSection.jsx';

const services = [
  { number: '01', title: 'Applications web', text: 'Des expériences web claires et performantes, conçues pour vos clients comme pour vos équipes.', Icon: LayoutDashboard },
  { number: '02', title: 'Solutions mobiles', text: 'Vos services à portée de main, avec des parcours simples et une attention portée à chaque écran.', Icon: Smartphone },
  { number: '03', title: 'Outils sur mesure', text: 'Des outils adaptés à votre activité pour simplifier le quotidien et faire grandir vos idées.', Icon: Sparkles },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="topbar">
      <a className="brand" href="#accueil" aria-label="Diginova, accueil" onClick={closeMenu}>
        <img src="/logo-diginova-transparent.png" alt="Diginova Software Solutions" />
      </a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">
        <a href="#expertises" onClick={closeMenu}>Expertises</a>
        <a href="#backend" onClick={closeMenu}>Backend</a>
        <a href="#secteurs" onClick={closeMenu}>Secteurs</a>
        <a href="#apropos" onClick={closeMenu}>À propos</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="https://wa.me/21627590950" target="_blank" rel="noreferrer">Parlons de votre projet <ArrowUpRight size={16} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Studio logiciel <span className="eyebrow-divider">/</span> Gabès, Tunisie</div>
        <h1>Le numérique<br />à la hauteur de<br /><span>vos ambitions.</span></h1>
        <p className="hero-lead">Diginova imagine des solutions logicielles utiles, soignées et pensées pour accompagner votre activité.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Parlons de votre projet <ArrowUpRight size={16} /></a>
          <a className="text-link" href="#expertises">Explorer nos expertises <ArrowDown size={14} /></a>
        </div>
        <div className="hero-note"><span className="note-line" /> Des idées bien pensées. Des solutions qui avancent.</div>
      </div>
      <div className="hero-visual" aria-label="Diginova transforme les idées en solutions numériques">
        <div className="visual-grid" />
        <div className="visual-ring ring-outer" /><div className="visual-ring ring-inner" />
        <div className="visual-orb"><span>D</span><i>✳</i></div>
        <div className="visual-tag tag-web"><LayoutDashboard size={15} /><span>Solutions web</span></div>
        <div className="visual-tag tag-mobile"><Smartphone size={15} /><span>Mobile &amp; sur mesure</span></div>
        <div className="visual-caption"><span className="caption-index">D / 01</span><span>De l’idée à l’impact.</span><ArrowUpRight size={15} /></div>
        <span className="visual-spark spark-one">✳</span><span className="visual-spark spark-two">✦</span>
      </div>
      <div className="hero-index"><span>01</span><i /><span>03</span></div>
    </section>
  );
}

function Ticker() {
  return <div className="ticker"><div className="ticker-track"><div className="ticker-group"><span>Technologie utile</span><i>✳</i><span>Idées ambitieuses</span><i>✳</i><span>Réalisations soignées</span><i>✳</i></div><div className="ticker-group" aria-hidden="true"><span>Technologie utile</span><i>✳</i><span>Idées ambitieuses</span><i>✳</i><span>Réalisations soignées</span><i>✳</i></div></div></div>;
}

function Expertises() {
  return (
    <section className="expertises section-wrap" id="expertises">
      <div className="section-heading">
        <div><div className="eyebrow"><span className="eyebrow-number">01 /</span> Nos expertises</div><h2>Des outils utiles.<br /><em>Un vrai impact.</em></h2></div>
        <p>Le numérique est plus efficace quand il répond à un besoin réel. Nous concevons des solutions adaptées à votre quotidien.</p>
      </div>
      <div className="service-grid">
        {services.map(({ number, title, text, Icon }) => (
          <article className="service-card" key={number}>
            <div className="service-card-top"><span className="service-num">{number}</span><span className="service-arrow"><ArrowUpRight size={17} /></span></div>
            <div className="service-icon"><Icon size={26} strokeWidth={1.6} /></div>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Secteurs() {
  return (
    <section className="sectors section-wrap" id="secteurs">
      <div className="section-heading">
        <div><div className="eyebrow"><span className="eyebrow-number">02 /</span> Applications métier</div><h2>Des solutions pensées<br /><em>pour votre terrain.</em></h2></div>
        <p>Nous développons des applications adaptées aux réalités de chaque profession, avec les outils et les fonctionnalités qui facilitent le travail au quotidien.</p>
      </div>
      <div className="sector-grid">
        <article className="sector-card sector-medical">
          <div className="sector-card-head"><span className="sector-icon">✳</span><span className="sector-index">01 — SANTÉ</span></div>
          <h3>Pour les médecins</h3>
          <p>Des applications métier pour organiser l’activité du cabinet, simplifier le suivi des rendez-vous et faciliter la gestion au quotidien.</p>
          <a href="#contact">Imaginer une solution médicale <ArrowUpRight size={15} /></a>
        </article>
        <article className="sector-card sector-legal">
          <div className="sector-card-head"><span className="sector-icon"><Code2 size={23} /></span><span className="sector-index">02 — JURIDIQUE</span></div>
          <h3>Pour les avocats</h3>
          <p>Des outils numériques pour structurer le suivi des dossiers, les échéances et les tâches liées à l’activité juridique.</p>
          <a href="#contact">Imaginer une solution juridique <ArrowUpRight size={15} /></a>
        </article>
      </div>
      <div className="sector-other"><span className="other-spark">✳</span><p><b>Votre secteur est différent ?</b><br />Nous concevons aussi des applications web et mobiles sur mesure pour d’autres métiers et domaines d’activité. Parlez-nous de votre besoin.</p><a href="#contact" aria-label="Parler de votre projet"><ArrowUpRight size={18} /></a></div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="apropos">
      <div className="about-inner">
        <div className="about-mark"><img src="/logo-diginova-transparent.png" alt="" /><span>La technologie doit rester humaine.</span></div>
        <div className="about-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-number">03 /</span> Notre approche</div>
          <h2>On commence par<br />bien <em>vous écouter.</em></h2>
          <p>Les meilleures solutions naissent d’une bonne compréhension de votre activité. Nous prenons le temps de saisir vos besoins pour imaginer un numérique qui vous ressemble.</p>
          <a href="#contact" className="light-link">Faisons connaissance <ArrowUpRight size={16} /></a>
        </div>
        <div className="about-decoration" aria-hidden="true">D<span>✳</span></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-intro">
        <div className="eyebrow"><span className="eyebrow-number">04 /</span> Contact</div>
        <h2>Votre prochain<br />projet commence <em>ici.</em></h2>
        <p>Un projet, une question ou simplement envie d’échanger ? Rabeb et l’équipe Diginova sont à votre écoute.</p>
        <a className="button button-primary" href="https://wa.me/21627590950" target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowUpRight size={16} /></a>
      </div>
      <div className="contact-details">
        <div className="contact-person"><div className="avatar">RD</div><div><b>Rabeb DABEGHI</b><span>CEO · Diginova</span></div></div>
        <a className="contact-row" href="tel:+21627590950"><span className="contact-symbol"><Smartphone size={16} /></span><span><small>Téléphone &amp; WhatsApp</small>+216 27 590 950</span><b><ArrowUpRight size={16} /></b></a>
        <a className="contact-row" href="mailto:diginova2727@gmail.com"><span className="contact-symbol">✉</span><span><small>Courriel</small>diginova2727@gmail.com</span><b><ArrowUpRight size={16} /></b></a>
        <a className="contact-row" href="https://instagram.com/diginova_software_solutions" target="_blank" rel="noreferrer"><span className="contact-symbol">◎</span><span><small>Instagram</small>@diginova_software_solutions</span><b><ArrowUpRight size={16} /></b></a>
        <div className="contact-row address"><span className="contact-symbol"><MapPin size={16} /></span><span><small>Nous trouver</small>Rue Abou El Kacem Chebbi, Immeuble Yasmine,<br />1er étage, Chentech, 6011 Gabès, Tunisie</span></div>
      </div>
    </section>
  );
}

function MapSection() {
  const position = '33.8722638,10.1099075';
  return (
    <section className="location-map" aria-labelledby="map-title">
      <div className="location-map-heading">
        <div><div className="eyebrow"><span className="eyebrow-number">05 /</span> Nous trouver</div><h2 id="map-title">Diginova à <em>Gabès.</em></h2></div>
        <a href={`https://www.google.com/maps/@${position},16z`} target="_blank" rel="noreferrer">Ouvrir dans Google Maps <ArrowUpRight size={15} /></a>
      </div>
      <iframe
        title="Emplacement de Diginova dans Google Maps"
        src={`https://maps.google.com/maps?q=${position}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}

function Footer() {
  return <footer><a className="footer-brand" href="#accueil"><img src="/logo-diginova-transparent.png" alt="Diginova" /></a><span>Des solutions logicielles, pensées pour vous.</span><span>© {new Date().getFullYear()} Diginova Software Solutions</span><a href="#accueil" className="back-top">Retour en haut ↑</a></footer>;
}

function App() {
  return <><Header /><main><Hero /><Ticker /><Expertises /><BackendSection /><Secteurs /><About /><Contact /><MapSection /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
