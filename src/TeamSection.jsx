import React from 'react';
import { ArrowUpRight, Code2, Megaphone, Users } from 'lucide-react';
import './team.css';

const team = [
  { name: 'Rabeb Dabeghi', role: 'Manager', image: '/team-hanen.jpeg', alt: 'Portrait de Rabeb Dabeghi', Icon: Users },
  { name: 'Hazar Mokaddem', role: 'Développeuse', image: '/team-hazar.png', alt: 'Portrait de Hazar Mokaddem', Icon: Code2 },
  { name: 'Omar', role: 'Développeur', image: '/team-omar.png', alt: 'Portrait d’Omar', Icon: Code2 },
  { name: 'Hanen Ben Salem', role: 'Marketing & commercial', image: '/team-rabeb.jpeg', alt: 'Portrait de Hanen Ben Salem', Icon: Megaphone },
];

export default function TeamSection() {
  return (
    <section className="team section-wrap" id="equipe">
      <div className="section-heading">
        <div><div className="eyebrow"><span className="eyebrow-number">04 /</span> Notre équipe</div><h2>Les personnes<br /><em>derrière vos projets.</em></h2></div>
        <p>Une équipe à taille humaine qui réunit développement, coordination et accompagnement commercial.</p>
      </div>
      <div className="team-grid">
        {team.map(({ name, role, image, alt, Icon }) => {
          const title = name === 'Omar' ? 'M. ' : name === 'Rabeb Dabeghi' ? 'Mme ' : 'Mlle ';
          return (
          <article className="team-card" key={name}>
            <div className="team-photo"><img src={image} alt={alt} loading="lazy" /></div>
            <div className="team-info"><div><h3>{title}{name}</h3><p>{role}</p></div><span className="team-role-icon"><Icon size={17} /></span></div>
          </article>
          );
        })}
      </div>
      <div className="team-note"><span>✳</span><p>Une idée à développer ? Notre équipe est là pour en parler avec vous.</p><a href="#contact" aria-label="Contacter Diginova"><ArrowUpRight size={18} /></a></div>
    </section>
  );
}
