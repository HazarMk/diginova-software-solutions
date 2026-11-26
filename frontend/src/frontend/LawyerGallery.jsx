import { ArrowUpRight, BriefcaseBusiness, CalendarDays, CheckCircle2, Users } from 'lucide-react';
import './lawyer-gallery.css';

export default function LawyerGallery() {
  return (
    <section className="lawyer-gallery section-wrap" id="solutions" aria-labelledby="lawyer-gallery-title">
      <div className="section-heading">
        <div><div className="eyebrow"><span className="eyebrow-number">01 /</span> Notre solution juridique</div><h2 id="lawyer-gallery-title">TopAvocat, pensé<br /><em>pour le cabinet.</em></h2></div>
        <p>Une application de gestion pour organiser les dossiers, les audiences, les tâches et les informations du cabinet.</p>
      </div>
      <div className="lawyer-product-intro">
        <div className="lawyer-product-symbol">T</div>
        <div className="lawyer-product-copy"><span>GESTION DE CABINET</span><h3>Un espace de travail clair pour suivre l’activité juridique.</h3><p>Découvrez la démonstration vidéo et explorez les fonctions pensées pour les besoins de votre cabinet.</p></div>
        <a href="/contact">Parler de TopAvocat <ArrowUpRight size={16} /></a>
      </div>
      <div className="lawyer-illustration" aria-label="Illustration de l'application TopAvocat">
        <div className="lawyer-illustration-copy"><span>TOPAVOCAT · SOLUTION JURIDIQUE</span><h3>Le cabinet, mieux organisé.</h3><p>Dossiers, audiences et tâches réunis dans un espace de travail pensé pour les avocats.</p><a href="/contact">Découvrir la solution <ArrowUpRight size={15} /></a></div>
        <img src="/topavocat-illustration.png" alt="Illustration de TopAvocat : organisation des tâches juridiques dans une application" loading="lazy" />
      </div>
      <div className="lawyer-video-showcase">
        <div className="lawyer-video-copy">
          <span>DÉMONSTRATION VIDÉO</span>
          <h3>Découvrez TopAvocat<br /><em>en action.</em></h3>
          <p>Parcourez les principaux écrans : tableau de bord, dossiers, audiences et agenda.</p>
        </div>
        <video controls preload="metadata" playsInline poster="/avocat-dashboard.jpeg" aria-label="Démonstration vidéo de TopAvocat">
          <source src="/topavocat-presentation.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture vidéo.
        </video>
      </div>
      <section className="lawyer-solution-details" aria-labelledby="lawyer-details-title">
        <div className="lawyer-details-heading">
          <span>UNE ORGANISATION PLUS SIMPLE</span>
          <h3 id="lawyer-details-title">Votre cabinet,<br /><em>au même endroit.</em></h3>
          <p>TopAvocat rassemble les informations et les tâches courantes du cabinet dans un espace de travail structuré.</p>
        </div>
        <div className="lawyer-details-list">
          <article><span><BriefcaseBusiness size={19} /></span><div><h4>Suivi des dossiers</h4><p>Classez les affaires, retrouvez rapidement leurs informations clés et gardez une vue claire sur leur avancement.</p></div></article>
          <article><span><CalendarDays size={19} /></span><div><h4>Agenda et échéances</h4><p>Planifiez les audiences et les rendez-vous, puis consultez les dates importantes du cabinet dans un agenda dédié.</p></div></article>
          <article><span><CheckCircle2 size={19} /></span><div><h4>Tâches et priorités</h4><p>Organisez les actions à réaliser, identifiez les prochaines étapes et facilitez la coordination au quotidien.</p></div></article>
          <article><span><Users size={19} /></span><div><h4>Informations du cabinet</h4><p>Rassemblez les contacts et les paramètres utiles afin d’adapter l’espace de travail aux habitudes de votre équipe.</p></div></article>
        </div>
      </section>
    </section>
  );
}
