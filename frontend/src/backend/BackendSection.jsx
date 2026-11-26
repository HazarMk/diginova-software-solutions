import React from 'react';
import { ArrowUpRight, Database, GitBranch, Lightbulb, Rocket } from 'lucide-react';
import './backend.css';
import '../sectors.css';

const steps = [
  { number: '01', title: 'Comprendre', text: 'Nous échangeons sur votre métier, vos objectifs et les besoins des personnes qui utiliseront la solution.', Icon: Lightbulb },
  { number: '02', title: 'Concevoir', text: 'Nous définissons ensemble les fonctionnalités, les parcours et l’organisation technique du projet.', Icon: GitBranch },
  { number: '03', title: 'Développer', text: 'Nous réalisons l’interface, le backend et les connexions nécessaires, avec des points de suivi réguliers.', Icon: Database },
  { number: '04', title: 'Faire évoluer', text: 'Après la mise en ligne, la solution peut être ajustée selon vos retours et vos nouveaux besoins.', Icon: Rocket },
];

export default function BackendSection() {
  return (
    <>
      <section className="backend-section section-wrap" id="backend">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-number">04 /</span> Développement complet</div><h2>Le moteur de votre application :<br /><em>le backend.</em></h2></div>
          <p>Au-delà de l’interface, nous pouvons développer la partie serveur qui fait fonctionner votre application et organise ses données.</p>
        </div>
        <div className="backend-panel">
          <div className="backend-copy">
            <div className="backend-icon"><Database size={23} /></div>
            <h3>Une base solide, adaptée à votre activité.</h3>
            <p>Comptes et rôles utilisateurs, règles métier, gestion des informations et échanges entre l’application et ses services : le backend est conçu selon les besoins définis avec vous.</p>
            <a href="/contact">Parler de votre projet <ArrowUpRight size={15} /></a>
          </div>
          <div className="backend-visual" aria-label="Illustration des composants backend">
            <div className="backend-node node-interface">Interface <span>web / mobile</span></div>
            <div className="backend-connector connector-a" />
            <div className="backend-node node-api">API <span>logique métier</span></div>
            <div className="backend-connector connector-b" />
            <div className="backend-node node-data">Données <span>selon le projet</span></div>
            <div className="backend-orbit orbit-a" /><div className="backend-orbit orbit-b" />
          </div>
        </div>
      </section>
      <section className="method section-wrap" id="methode">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-number">05 /</span> Organisation du travail</div><h2>Un projet bien organisé,<br /><em>étape par étape.</em></h2></div>
          <p>De la première discussion à l’évolution de l’application, nous avançons avec vous à chaque étape.</p>
        </div>
        <div className="method-grid">
          {steps.map(({ number, title, text, Icon }) => <article className="method-step" key={number}><div className="method-top"><span>{number}</span><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
    </>
  );
}
