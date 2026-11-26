import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, ChevronDown, Code2, LayoutDashboard, MapPin, Menu,
  Smartphone, Sparkles, X, HeartPulse, Scale, Users, CalendarPlus, Share2, Search, Send,
} from 'lucide-react';
import './styles.css';
import './sectors.css';
import './map.css';
import BackendSection from './backend/BackendSection.jsx';
import TeamSection from './frontend/TeamSection.jsx';
import LawyerGallery from './frontend/LawyerGallery.jsx';
import DevelopmentShowcase from './frontend/DevelopmentShowcase.jsx';
import './institutional.css';
import './pages.css';
import './design-refresh.css';

const services = [
  { number: '01', title: 'Applications web', text: 'Des expériences web claires et performantes, conçues pour vos clients comme pour vos équipes.', Icon: LayoutDashboard },
  { number: '02', title: 'Solutions mobiles', text: 'Vos services à portée de main, avec des parcours simples et une attention portée à chaque écran.', Icon: Smartphone },
  { number: '03', title: 'Outils sur mesure', text: 'Des outils adaptés à votre activité pour simplifier le quotidien et faire grandir vos idées.', Icon: Sparkles },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState(() => window.localStorage.getItem('diginova-language') || 'fr');
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageNames = { fr: 'Français', en: 'English', ar: 'العربية' };
  const setSiteLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    setLanguageOpen(false);
    window.localStorage.setItem('diginova-language', nextLanguage);
  };
  const closeMenu = () => { setMenuOpen(false); setActiveMenu(null); };
  const toggleMenu = (name) => setActiveMenu((current) => current === name ? null : name);
  const text = (fr, en, ar) => language === 'en' ? en : language === 'ar' ? ar : fr;
  const searchItems = [
    { title: 'Accueil', description: 'Bienvenue chez Diginova', href: '/' },
    { title: 'TopAvocat', description: 'Gestion de cabinet juridique', href: '/solutions' },
    { title: 'TopDoctor', description: 'Solution pour les professionnels de santé', href: '/secteurs#sante' },
    { title: 'Expertises', description: 'Web, mobile et développement logiciel', href: '/expertises' },
    { title: 'Notre équipe', description: 'Les personnes derrière Diginova', href: '/equipe' },
    { title: 'Contact', description: 'Parlons de votre projet', href: '/contact' },
  ];
  const visibleSearchItems = searchItems.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 4);
  return (
    <header className={`topbar navbar-language-${language}`} dir={language === 'ar' ? 'rtl' : 'ltr'} onMouseLeave={() => setActiveMenu(null)}>
      <div className="topbar-utility" aria-label="Liens secondaires">
        <a href="/a-propos" onClick={closeMenu}>{text('À propos', 'About us', 'من نحن')}</a>
        <a href="/equipe" onClick={closeMenu}>{text('Notre équipe', 'Our team', 'فريقنا')}</a>
        <a href="/contact" onClick={closeMenu}>{text('Contact', 'Contact', 'اتصل بنا')}</a>
      </div>
      <div className="topbar-main">
      <a className="brand" href="/" aria-label="Diginova, accueil" onClick={closeMenu}>
        <img src="/logo-diginova-transparent.png" alt="Diginova Software Solutions" />
      </a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => { setMenuOpen(!menuOpen); setActiveMenu(null); }}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">
        <a href="/" onClick={closeMenu}>{text('Accueil', 'Home', 'الرئيسية')}</a>
        <button className={`nav-dropdown-trigger ${activeMenu === 'solutions' ? 'active' : ''}`} aria-expanded={activeMenu === 'solutions'} onClick={() => toggleMenu('solutions')} onMouseEnter={() => setActiveMenu('solutions')}>
          {text('Produits', 'Products', 'المنتجات')} <ChevronDown size={14} />
        </button>
        <a href="/expertises" aria-current={window.location.pathname === '/expertises' ? 'page' : undefined} onClick={closeMenu}>{text('Expertises', 'Expertise', 'خبراتنا')}</a>
        <a href="/secteurs" aria-current={window.location.pathname === '/secteurs' ? 'page' : undefined} onClick={closeMenu}>{text('Secteurs', 'Industries', 'القطاعات')}</a>
        <button className={`nav-dropdown-trigger ${activeMenu === 'entreprise' ? 'active' : ''}`} aria-expanded={activeMenu === 'entreprise'} onClick={() => toggleMenu('entreprise')} onMouseEnter={() => setActiveMenu('entreprise')}>
          Diginova <ChevronDown size={14} />
        </button>
        <a className="nav-mobile-contact" href="/contact" onClick={closeMenu}>{text('Parlons de votre projet', 'Let’s talk about your project', 'لنتحدث عن مشروعك')} <ArrowUpRight size={16} /></a>
      </nav>
      <div className="nav-tools">
        <button className={`nav-icon-button nav-search-toggle ${searchOpen ? 'active' : ''}`} type="button" aria-label={searchOpen ? 'Fermer la recherche' : 'Ouvrir la recherche'} aria-expanded={searchOpen} onClick={() => { setSearchOpen((open) => !open); setActiveMenu(null); }}><Search size={22} /></button>
        <a className="nav-contact-quick" href="/contact" aria-label={text('Contacter Diginova', 'Contact Diginova', 'اتصل بديجينوفا')} onClick={closeMenu}><span>{text('Contact', 'Contact', 'اتصل بنا')}</span><Send size={20} /></a>
        <div className={`nav-language-wrap ${languageOpen ? 'open' : ''}`}>
          <button className="nav-language" type="button" title={languageNames[language]} aria-label={`Langue : ${languageNames[language]}`} aria-expanded={languageOpen} onClick={() => setLanguageOpen((open) => !open)}>{language.toUpperCase()}<ChevronDown size={12} /></button>
          {languageOpen && <div className="nav-language-menu" role="menu" aria-label="Choisir une langue">
            {Object.entries(languageNames).map(([code, name]) => <button type="button" role="menuitemradio" aria-checked={language === code} className={language === code ? 'selected' : ''} key={code} onClick={() => setSiteLanguage(code)}>{name}<span>{code.toUpperCase()}</span></button>)}
          </div>}
        </div>
        {searchOpen && <div className="nav-search-panel" role="search">
          <label htmlFor="site-search">{text('Rechercher sur le site', 'Search the site', 'ابحث في الموقع')}</label>
          <input id="site-search" autoFocus value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Escape') setSearchOpen(false); }} placeholder={text('Rechercher', 'Search', 'بحث')} />
          <div className="nav-search-results">
            {visibleSearchItems.length ? visibleSearchItems.map((item) => <a href={item.href} key={item.title} onClick={() => { setSearchOpen(false); closeMenu(); }}><b>{item.title}</b><small>{item.description}</small><ArrowUpRight size={14} /></a>) : <p>{text('Aucun résultat', 'No results', 'لا توجد نتائج')}</p>}
          </div>
        </div>}
      </div>
      </div>
      {activeMenu && <div className="mega-menu" role="region" aria-label={activeMenu === 'solutions' ? 'Menu des solutions' : 'Menu Diginova'}>
        {activeMenu === 'solutions' ? <>
          <div className="mega-intro"><span className="mega-kicker">DES SOLUTIONS CONCRÈTES</span><h3>Le numérique<br /><em>à votre service.</em></h3><p>Des applications utiles, pensées pour votre métier et vos objectifs.</p></div>
          <div className="mega-links"><a href="/solutions" onClick={closeMenu}><span className="mega-icon"><Scale size={18} /></span><span><b>TopAvocat</b><small>Gestion de cabinet juridique</small></span><ArrowUpRight size={15} /></a><a href="/secteurs#sante" onClick={closeMenu}><span className="mega-icon"><HeartPulse size={18} /></span><span><b>TopDoctor</b><small>Gestion de cabinet médical</small></span><ArrowUpRight size={15} /></a><a href="/secteurs#sante" onClick={closeMenu}><span className="mega-icon"><HeartPulse size={18} /></span><span><b>Solutions santé</b><small>Applications pour les professionnels médicaux</small></span><ArrowUpRight size={15} /></a><a href="/expertises" onClick={closeMenu}><span className="mega-icon"><Code2 size={18} /></span><span><b>Sur mesure</b><small>Web, mobile, backend et API</small></span><ArrowUpRight size={15} /></a></div>
          <div className="mega-product-features">
            <a className="mega-feature mega-feature-logo mega-product-tile" href="/solutions" onClick={closeMenu}><img src="/topavocat-logo.png" alt="Logo TopAvocat" /><span><small>PRODUIT JURIDIQUE</small><b>TopAvocat</b><i>Voir le produit <ArrowUpRight size={12} /></i></span></a>
            <a className="mega-feature mega-feature-logo mega-product-tile" href="/secteurs#sante" onClick={closeMenu}><img src="/topdoctor-logo.png" alt="Logo TopDoctor" /><span><small>PRODUIT SANTÉ</small><b>TopDoctor</b><i>Voir le produit <ArrowUpRight size={12} /></i></span></a>
          </div>
        </> : <>
          <div className="mega-intro"><span className="mega-kicker">L’ÉQUIPE DIGINOVA</span><h3>Une équipe<br /><em>à votre écoute.</em></h3><p>De l’idée à la mise en ligne, nous avançons avec vous.</p></div>
          <div className="mega-links"><a href="/a-propos" onClick={closeMenu}><span className="mega-icon"><Sparkles size={18} /></span><span><b>Notre approche</b><small>Une méthode centrée sur vos besoins</small></span><ArrowUpRight size={15} /></a><a href="/equipe" onClick={closeMenu}><span className="mega-icon"><Users size={18} /></span><span><b>Notre équipe</b><small>Les personnes derrière vos projets</small></span><ArrowUpRight size={15} /></a><a href="/expertises#methode" onClick={closeMenu}><span className="mega-icon"><LayoutDashboard size={18} /></span><span><b>Notre méthode</b><small>Les étapes de votre projet</small></span><ArrowUpRight size={15} /></a></div>
          <div className="mega-contact"><span className="status-dot" /><div><small>DISPONIBLES POUR ÉCHANGER</small><b>Vous avez une idée ?</b><a href="/contact" onClick={closeMenu}>Contactez-nous <ArrowUpRight size={14} /></a></div></div>
        </>}
      </div>}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero hero-reimagined" id="accueil">
      <div className="hero-visual hero-photo-panel">
        <img src="/hero-development.jpg" alt="Illustration de logiciels, d'applications mobiles et de programmation" />
        <div className="hero-photo-shade" />
        <span className="hero-photo-index">01 <i /> DIGITAL STUDIO</span>
        <div className="hero-photo-caption"><span className="hero-caption-mark">D.</span><span><b>De l'idée au produit.</b><small>Des outils numériques faits pour vos usages.</small></span><ArrowUpRight size={20} /></div>
      </div>
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Studio logiciel <span className="hero-location">/ Gabès, Tunisie</span></div>
        <h1 className="hero-animated-copy">Le numérique<br />qui fait avancer<br /><span>vos projets.</span></h1>
        <p className="hero-lead hero-animated-copy">Diginova conçoit et développe des applications web et mobiles adaptées à votre métier, de la première idée à la mise en ligne.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/contact">Parlons de votre projet <ArrowUpRight size={16} /></a>
          <a className="text-link" href="/expertises">Découvrir nos expertises <ArrowDown size={14} /></a>
        </div>
        <div className="hero-note"><span className="note-line" /> Web <i /> Mobile <i /> Solutions sur mesure</div>
      </div>
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
        <div><div className="eyebrow"><span className="eyebrow-number">03 /</span> Nos expertises</div><h2>Des outils utiles.<br /><em>Un vrai impact.</em></h2></div>
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
        <article className="sector-card sector-medical" id="sante">
          <div className="sector-card-head"><span className="sector-icon">✳</span><span className="sector-index">01 — SANTÉ</span></div>
          <img className="sector-product-illustration" src="/topdoctor-illustration.png" alt="Illustration de Top Doctor, solution de gestion pour les médecins" loading="lazy" />
          <h3>Pour les médecins</h3>
          <p>Des applications métier pour organiser l’activité du cabinet, simplifier le suivi des rendez-vous et faciliter la gestion au quotidien.</p>
          <a href="/contact">Imaginer une solution médicale <ArrowUpRight size={15} /></a>
        </article>
        <article className="sector-card sector-legal" id="juridique">
          <div className="sector-card-head"><span className="sector-icon"><Code2 size={23} /></span><span className="sector-index">02 — JURIDIQUE</span></div>
          <img className="sector-product-illustration" src="/topavocat-illustration.png" alt="Illustration de TopAvocat, solution de gestion pour les avocats" loading="lazy" />
          <h3>Pour les avocats</h3>
          <p>Des outils numériques pour structurer le suivi des dossiers, les échéances et les tâches liées à l’activité juridique.</p>
          <a href="/solutions">Découvrir TopAvocat <ArrowUpRight size={15} /></a>
        </article>
      </div>
      <div className="sector-other"><span className="other-spark">✳</span><p><b>Votre secteur est différent ?</b><br />Nous concevons aussi des applications web et mobiles sur mesure pour d’autres métiers et domaines d’activité. Parlez-nous de votre besoin.</p><a href="/contact" aria-label="Parler de votre projet"><ArrowUpRight size={18} /></a></div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="apropos">
      <div className="about-inner">
        <div className="about-mark"><img src="/logo-diginova-transparent.png" alt="" /><span>La technologie doit rester humaine.</span></div>
        <div className="about-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-number">07 /</span> Notre approche</div>
          <h2>On commence par<br />bien <em>vous écouter.</em></h2>
          <p>Les meilleures solutions naissent d’une bonne compréhension de votre activité. Nous prenons le temps de saisir vos besoins pour imaginer un numérique qui vous ressemble.</p>
          <a href="/contact" className="light-link">Faisons connaissance <ArrowUpRight size={16} /></a>
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
        <div className="eyebrow"><span className="eyebrow-number">08 /</span> Contact</div>
        <h2>Votre prochain<br />projet commence <em>ici.</em></h2>
        <p>Un projet, une question ou simplement envie d’échanger ? Rabeb et l’équipe Diginova sont à votre écoute.</p>
        <a className="button button-primary" href="https://wa.me/21627590950" target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowUpRight size={16} /></a>
      </div>
      <div className="contact-details">
        <div className="contact-card-brand"><img src="/logo-diginova-transparent.png" alt="Diginova Software Solutions" /></div>
        <div className="contact-person">
          <div className="avatar"><img src="/team-hanen.jpeg" alt="Portrait de Rabeb Dabeghi" /></div>
          <div className="contact-person-info"><small>VOTRE INTERLOCUTRICE</small><b>Rabeb DABEGHI</b><span>CEO - Diginova</span></div>
          <a className="contact-person-action" href="https://wa.me/21627590950" target="_blank" rel="noreferrer" aria-label="Contacter Rabeb sur WhatsApp"><ArrowUpRight size={18} /></a>
        </div>
        <a className="contact-row" href="tel:+21627590950"><span className="contact-symbol"><Smartphone size={16} /></span><span><small>Téléphone</small>+216 27 590 950</span><b><ArrowUpRight size={16} /></b></a>
        <a className="contact-row" href="https://wa.me/21627590950" target="_blank" rel="noreferrer"><span className="contact-symbol">W</span><span><small>WhatsApp</small>+216 27 590 950</span><b><ArrowUpRight size={16} /></b></a>
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
        <div><div className="eyebrow"><span className="eyebrow-number">09 /</span> Nous trouver</div><h2 id="map-title">Diginova à <em>Gabès.</em></h2></div>
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
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block"><a className="footer-brand" href="/"><img src="/logo-diginova-transparent.png" alt="Diginova" /></a><p>Des solutions logicielles pensées pour votre activité.</p><a className="footer-email" href="mailto:diginova2727@gmail.com">diginova2727@gmail.com <ArrowUpRight size={14} /></a></div>
        <div className="footer-link-group"><b>Découvrir</b><a href="/solutions">TopAvocat</a><a href="/secteurs">Nos secteurs</a><a href="/expertises">Nos expertises</a></div>
        <div className="footer-link-group"><b>Diginova</b><a href="/a-propos">Notre approche</a><a href="/equipe">Notre équipe</a><a href="/contact">Nous contacter</a></div>
        <a className="footer-cta" href="/contact">Parlons de votre projet <ArrowUpRight size={16} /></a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Diginova Software Solutions · Gabès, Tunisie</span><a href="/">Retour à l’accueil ↑</a></div>
    </footer>
  );
}

function QuickContactNav() {
  const [socialOpen, setSocialOpen] = useState(false);
  const pageUrl = encodeURIComponent(window.location.href);

  return (
    <nav className={"quick-contact-nav " + (socialOpen ? "is-open" : "")} aria-label="Raccourcis contact">
      <a className="quick-booking-link" href="/contact" aria-label="Prendre rendez-vous" title="Prendre RDV">
        <span className="quick-contact-label">Prendre RDV</span><CalendarPlus size={25} />
      </a>
      <div className={"quick-social-bar " + (socialOpen ? "is-open" : "")} role="group" aria-label="Reseaux sociaux et partage">
        <a className="quick-social-link social-x" href={"https://twitter.com/intent/tweet?url=" + pageUrl} target="_blank" rel="noreferrer" aria-label="Partager sur X" onClick={() => setSocialOpen(false)}>X</a>
        <a className="quick-social-link social-linkedin" href={"https://www.linkedin.com/sharing/share-offsite/?url=" + pageUrl} target="_blank" rel="noreferrer" aria-label="Partager sur LinkedIn" onClick={() => setSocialOpen(false)}>in</a>
        <a className="quick-social-link social-facebook" href={"https://www.facebook.com/sharer/sharer.php?u=" + pageUrl} target="_blank" rel="noreferrer" aria-label="Partager sur Facebook" onClick={() => setSocialOpen(false)}>f</a>
        <a className="quick-social-link social-youtube" href="https://www.youtube.com/results?search_query=Diginova+Software+Solutions" target="_blank" rel="noreferrer" aria-label="Rechercher Diginova sur YouTube" onClick={() => setSocialOpen(false)}><span aria-hidden="true">&#9654;</span></a>
        <button className="quick-share-button" type="button" onClick={() => setSocialOpen((open) => !open)} aria-expanded={socialOpen} aria-label={socialOpen ? "Fermer les reseaux sociaux" : "Afficher les reseaux sociaux"} title="Partager"><Share2 size={26} /></button>
      </div>
    </nav>
  );
}

function PageTitle({ eyebrow, title, description }) {
  return <section className="page-title"><div className="page-title-inner"><div className="eyebrow"><span className="status-dot" />{eyebrow}</div><h1>{title}</h1><p>{description}</p></div><img className="page-title-mark" src="/logo-diginova-transparent.png" alt="" aria-hidden="true" /></section>;
}

function HomePage() {
  const pages = [
    { number: '01', title: 'Nos solutions', text: 'Découvrez TopAvocat et les applications conçues pour les métiers.', href: '/solutions', Icon: Scale },
    { number: '02', title: 'Nos secteurs', text: 'Des outils adaptés aux professions médicales, juridiques et autres domaines.', href: '/secteurs', Icon: HeartPulse },
    { number: '03', title: 'Nos expertises', text: 'Web, mobile, backend : les compétences réunies pour votre projet.', href: '/expertises', Icon: Code2 },
    { number: '04', title: 'Notre équipe', text: 'Faites connaissance avec les personnes derrière Diginova.', href: '/equipe', Icon: Users },
  ];
  return <><Hero /><Ticker /><DevelopmentShowcase /><section className="home-directory section-wrap"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-number">BIENVENUE CHEZ DIGINOVA</span></div><h2>Que souhaitez-vous<br /><em>découvrir ?</em></h2></div><p>Parcourez nos solutions, nos expertises et les secteurs que nous accompagnons.</p></div><div className="directory-grid">{pages.map(({ number, title, text, href, Icon }) => <a className="directory-card" href={href} key={number}><div className="directory-card-top"><span>{number}</span><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><span className="directory-card-link">Découvrir <ArrowUpRight size={15} /></span></a>)}</div></section><section className="home-contact-band"><div><span>UNE IDÉE À DÉVELOPPER ?</span><h2>Parlons de votre prochain projet.</h2></div><a href="/contact">Nous contacter <ArrowUpRight size={16} /></a></section></>;
}

function PageContent() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return <HomePage />;
  if (path === '/solutions') return <><PageTitle eyebrow="Nos produits" title="TopAvocat" description="Une application pour organiser les dossiers, l’agenda et les tâches du cabinet." /><LawyerGallery /></>;
  if (path === '/secteurs') return <><PageTitle eyebrow="Nos secteurs" title="Le numérique adapté à votre métier." description="Nous créons des applications métier et accompagnons aussi des projets dans d’autres domaines." /><Secteurs /></>;
  if (path === '/expertises') return <><PageTitle eyebrow="Nos expertises" title="Du premier écran au backend." description="Une organisation simple : nous concevons l’interface, construisons le backend adapté, puis faisons évoluer votre application avec vous." /><section className="expertise-roadmap section-wrap" aria-label="Organisation des expertises"><div><span>01</span><b>Interface</b><small>Ce que voient vos utilisateurs</small></div><i /><div><span>02</span><b>Backend</b><small>Les règles et données de l’application</small></div><i /><div><span>03</span><b>Évolution</b><small>Les améliorations selon vos retours</small></div></section><Expertises /><BackendSection /></>;
  if (path === '/a-propos') return <><PageTitle eyebrow="À propos" title="La technologie doit vous ressembler." description="Nous prenons le temps de comprendre votre activité pour concevoir des outils utiles et adaptés." /><About /></>;
  if (path === '/equipe') return <><PageTitle eyebrow="Notre équipe" title="Les personnes derrière vos projets." description="Rencontrez les membres de l’équipe Diginova et découvrez leurs rôles." /><TeamSection /></>;
  if (path === '/contact') return <><PageTitle eyebrow="Contact" title="Parlons de votre projet." description="Une question ou une idée en tête ? Rabeb et l’équipe Diginova sont à votre écoute." /><Contact /><MapSection /></>;
  return <section className="not-found section-wrap"><div className="eyebrow">PAGE INTROUVABLE</div><h1>Cette page n’existe pas.</h1><a className="button button-primary" href="/">Retour à l’accueil <ArrowUpRight size={16} /></a></section>;
}

function App() {
  const route = window.location.pathname;
  useEffect(() => {
    const targets = document.querySelectorAll('.section-heading, .service-card, .backend-panel, .sector-card, .sector-other, .lawyer-product-intro, .lawyer-screen, .team-card, .team-note, .about-copy, .contact-intro, .contact-person, .contact-row, .location-map-heading, .method-step, .directory-card, .development-card');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' });
    targets.forEach((target) => { target.classList.add('reveal-item'); observer.observe(target); });
    return () => observer.disconnect();
  }, [route]);
  return <><Header /><main key={route}><PageContent /></main><Footer /><QuickContactNav /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
