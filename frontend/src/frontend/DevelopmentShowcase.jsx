import React from 'react';
import { ArrowUpRight, Code2, LayoutDashboard, Smartphone } from 'lucide-react';
import './showcase.css';

const developmentAreas = [
  { image: '/development-web.jpeg', title: 'Applications web', detail: 'Des outils accessibles depuis votre navigateur.', href: '/expertises', Icon: LayoutDashboard, tone: 'web' },
  { image: '/development-custom.jpeg', title: 'Applications sur mesure', detail: 'Des fonctionnalités adaptées à votre métier.', href: '/secteurs', Icon: Smartphone, tone: 'custom' },
  { image: '/development-tech.jpeg', title: 'Développement logiciel', detail: 'Du frontend au backend, selon votre projet.', href: '/expertises', Icon: Code2, tone: 'software' },
];

export default function DevelopmentShowcase() {
  return (
    <section className="development-showcase section-wrap" aria-labelledby="development-title">
      <div className="section-heading">
        <div><div className="eyebrow"><span className="eyebrow-number">LE SAVOIR-FAIRE DIGINOVA</span></div><h2 id="development-title">Nous donnons forme<br /><em>à vos idées.</em></h2></div>
        <p>Des interfaces claires et des outils bien pensés pour simplifier le quotidien de votre activité.</p>
      </div>
      <div className="development-grid">
        {developmentAreas.map(({ image, title, detail, href, Icon, tone }) => (
          <a className={`development-card development-${tone}`} href={href} key={title}>
            <img src={image} alt={`Illustration : ${title.toLowerCase()}`} loading="lazy" />
            <span className="development-overlay" />
            <span className="development-card-content"><span className="development-icon"><Icon size={18} /></span><b>{title}</b><small>{detail}</small></span>
            <span className="development-card-arrow"><ArrowUpRight size={17} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}
