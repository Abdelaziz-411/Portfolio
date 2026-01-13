import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Particle from "../Particle";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaClock,
  FaBullseye,
  FaQuestionCircle,
  FaUsers,
  FaTools,
  FaCode,
  FaWix,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaListAlt,
  FaGraduationCap,
  FaCamera,
  FaEnvelope
} from "react-icons/fa";
import {
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiJavascript,
  SiGithub,
  SiGooglesheets
} from "react-icons/si";
import "./Stage.css";
// Import des images du stage
import configurateurInterfaceClient from "../../Assets/stage/configurateur-interface-client.png";
import configurateurAdmin from "../../Assets/stage/configurateur-admin.png";
import wixAvantApres from "../../Assets/stage/wix-avant-apres.png";
import entreprise from "../../Assets/stage/entreprise.png";

const stageInfo = {
  entreprise: "La Bicoque Atelier",
  annee: "Mai-Juin 2025",
  poste: "Développeur web stagiaire",
  duree: "5 semaines",
  localisation: "Montbizot (72)"
};

const companyInfo = {
  presentation:
    "La Bicoque conçoit et aménage des utilitaires modulaires (VUL) pour les artisans et les particuliers en recherchant des aménagements légers, modulaires et rapidement configurables.",
  activite:
    "Conception de kits, pose et vente de véhicules aménagés, création de catalogues de configurations et suivi des demandes de devis.",
  taille: "PME de 3 personnes (gérant, assistante, stagiaire).",
  secteur: "Mobilité et aménagement de véhicules utilitaires.",
  illustrations: 
    [
      {
        src: entreprise,
        alt: "Photo représentative de l'entreprise",
        legend: "Photo représentative de l'entreprise"
      }
    ]
};

const contexteStage = {
  contexte:
    "Le gérant produisait ses devis via des tableurs et voulait passer à un configurateur en ligne permettant aux prospects de composer un utilitaire puis d’obtenir un devis immédiat.",
  objectif:
    "Livrer un configurateur web complet et administrable, puis aligner le site vitrine Wix avec l’offre réelle (kits, tarifs, formulaires).",
  problematique:
    "Automatiser la génération des devis tout en sécurisant les données (tarifs, options) et en gardant la main sur les mises à jour sans développeur.",
  place:
    "Travail en autonomie, rendez-vous hebdomadaires avec le gérant pour valider les priorités, démonstrations intermédiaires et ajustements rapides."
};

// Mapping des outils vers leurs icônes
const outilsAvecIcones = [
  { nom: "PHP 8", icon: SiPhp },
  { nom: "MySQL", icon: SiMysql },
  { nom: "Bootstrap 5", icon: SiBootstrap },
  { nom: "JavaScript", icon: SiJavascript },
  { nom: "PHPMailer", icon: FaEnvelope },
  { nom: "GitHub", icon: SiGithub },
  { nom: "Wix Editor", icon: FaWix },
  { nom: "Google Sheets", icon: SiGooglesheets }
];

const missions = [
  {
    id: "configurateur",
    titre: "Configurateur de devis d'utilitaires aménagés",
    icon: FaCode,
    technologies: ["PHP 8", "MySQL", "Bootstrap 5", "PHPMailer", "GitHub"],
    description:
      "Conception et développement d’une application web permettant de configurer un utilitaire (marque/modèle, kits d’aménagement, options) et de générer un devis immédiat envoyé par mail.",
    outils: [
      "Modélisation et création de la base MySQL (entités véhicules, kits, options, tarifs)",
      "Interfaces admin sécurisées pour gérer marques, modèles et kits",
      "Interface client guidée avec calcul automatique des prix et génération de devis PDF/mail",
      "Hébergement mutualisé + mise en ligne et sécurisation basique (CAPTCHA, rôles)"
    ],
    resultats: [
      "Catalogue administrable (véhicules/kits/options) avec droits d’accès",
      "Calcul automatique du devis et envoi par mail au prospect et au gérant",
      "Instance déployée sur hébergement mutualisé (base, fichiers, DNS) validée par le gérant"
    ],
    illustrations: [
      {
        src: configurateurInterfaceClient,
        alt: "Interface client du configurateur",
        legend: "Parcours client pour choisir le véhicule et les kits"
      },
      {
        src: configurateurAdmin,
        alt: "Tableau de bord administrateur",
        legend: "Gestion des modèles, kits et tarifs en back-office"
      }
    ]
  },
  {
    id: "wix",
    titre: "Mise à jour du site vitrine sous Wix déjà existant",
    icon: FaWix,
    technologies: ["Wix", "SEO Wix", "Google Analytics"],
    description:
      "Refonte ciblée des pages clés du site Wix pour présenter les nouveaux kits, simplifier les demandes de devis et harmoniser la charte graphique avec le configurateur.",
    outils: [
      "Refonte du contenu (kits, packs, avant/après) et harmonisation des couleurs",
      "Formulaire de contact orienté devis (type de véhicule, kit souhaité, budget)",
      "Optimisation SEO de base : balises titres, descriptions, URLs propres et performance",
      "Suivi des demandes et des clics via les outils d’analytics intégrés"
    ],
    resultats: [
      "Pages services réécrites et alignées avec l’offre réelle",
      "Formulaire enrichi orienté devis pour capter des leads qualifiés",
      "Charte graphique cohérente entre le site vitrine et le configurateur"
    ],
    illustrations: [
      {
        src: wixAvantApres,
        alt: "Refonte des pages Wix",
        legend: "Sections vitrines retravaillées (services, kits, CTA devis)"
      }
    ]
  }
];

const bilan = {
  techniques: [
    "Modélisation et mise en place d’une base MySQL pour un configurateur",
    "Envoi de devis (PDF/mail) via PHPMailer et sécurisation basique (CAPTCHA, rôles)",
    "Déploiement sur hébergement mutualisé (FTP, base, configuration PHP)",
    "Prise en main de Wix et optimisation SEO de base"
  ],
  professionnelles: [
    "Recueil et reformulation du besoin métier avec un gérant non technique",
    "Planification courte (sprints) et démonstrations régulières",
    "Autonomie complète avec comptes-rendus et validations hebdomadaires",
    "Adaptation du discours et des livrables aux contraintes d’une petite structure"
  ],
  poursuite: [
    "Renforcement du profil full-stack web (PHP/MySQL + intégration)",
    "Expérience de déploiement et d’industrialisation légère",
    "Ouverture aux CMS et aux chantiers SEO pour compléter la technique"
  ]
};

const competences = [
  {
    code: "B1.3.3",
    intitule:
      "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
    mission: "Configurateur : interface client + liaison base MySQL"
  },
  {
    code: "B1.4.1",
    intitule:
      "Analyser les objectifs et les modalités d’organisation d'un projet",
    mission: "Recueil du besoin, backlog et ateliers hebdomadaires"
  },
  {
    code: "B1.4.2",
    intitule: "Planifier les activités",
    mission: "Découpage en sprints Trello + suivis hebdomadaires"
  },
  {
    code: "B1.5.1",
    intitule: "Déployer un service",
    mission: "Mise en ligne du configurateur sur hébergement mutualisé"
  },
  {
    code: "B1.5.2",
    intitule:
      "Réaliser les tests d’intégration et d’acceptation d’un service",
    mission: "Jeux d’essais (prix, options, mails) et recette avec le gérant"
  },
  {
    code: "B1.2.2",
    intitule: "Traiter les demandes concernant les applications",
    mission: "Corrections et ajustements rapides après démos"
  },
  {
    code: "B1.6.1",
    intitule: "Mettre en place son environnement d’apprentissage personnel",
    mission: "Montée en compétence PHP/PHPMailer et sécurité simple"
  },
  {
    code: "B3.3",
    intitule: "Gérer les accès et les privilèges appropriés",
    mission: "Gestion des rôles admin et des zones protégées"
  },
  {
    code: "B1.3.1",
    intitule:
      "Participer à la valorisation de l’image de l’organisation sur les médias numériques",
    mission: "Refonte des pages Wix et harmonisation de la charte"
  }
];


function Stage() {
  return (
    <Container fluid className="stage-section">
      <div className="stage-particles-bg">
        <Particle />
      </div>

      <Container className="stage-content">
        <header className="stage-header">
          <p className="stage-eyebrow">Stage BTS SIO SLAM</p>
          <h1 className="project-heading">
            Stage chez <span className="purple">{stageInfo.entreprise}</span>
          </h1>
          <p className="stage-subtitle">
            Digitalisation des devis et mise à jour du site vitrine
          </p>

          <div className="stage-meta">
            <div className="stage-meta-item">
              <FaBuilding className="stage-meta-icon" />
              <div>
                <p className="stage-meta-label">Entreprise</p>
                <p className="stage-meta-value">{stageInfo.entreprise}</p>
              </div>
            </div>
            <div className="stage-meta-item">
              <FaCalendarAlt className="stage-meta-icon" />
              <div>
                <p className="stage-meta-label">Année</p>
                <p className="stage-meta-value">{stageInfo.annee}</p>
              </div>
            </div>
            <div className="stage-meta-item">
              <FaUserTie className="stage-meta-icon" />
              <div>
                <p className="stage-meta-label">Intitulé du poste</p>
                <p className="stage-meta-value">{stageInfo.poste}</p>
              </div>
            </div>
            <div className="stage-meta-item">
              <FaClock className="stage-meta-icon" />
              <div>
                <p className="stage-meta-label">Durée</p>
                <p className="stage-meta-value">{stageInfo.duree}</p>
              </div>
            </div>
            <div className="stage-meta-item">
              <FaMapMarkerAlt className="stage-meta-icon" />
              <div>
                <p className="stage-meta-label">Localisation</p>
                <p className="stage-meta-value">{stageInfo.localisation}</p>
              </div>
            </div>
          </div>
        </header>

        <Row className="stage-panels">
          <Col md={6} className="stage-panel">
            <div className="stage-card-shell">
              <h3 className="stage-block-title">Présentation de l'entreprise</h3>
              <p>{companyInfo.presentation}</p>
              <ul className="stage-list">
                <li>
                  <FaBullseye className="list-icon" />
                  <span>
                    <strong>Activité principale :</strong> {companyInfo.activite}
                  </span>
                </li>
                <li>
                  <FaUsers className="list-icon" />
                  <span>
                    <strong>Taille :</strong> {companyInfo.taille}
                  </span>
                </li>
                <li>
                  <FaChartLine className="list-icon" />
                  <span>
                    <strong>Secteur :</strong> {companyInfo.secteur}
                  </span>
                </li>
              </ul>
              {companyInfo.illustrations && companyInfo.illustrations.length > 0 && (
                <div className="stage-illustrations" style={{ marginTop: "20px" }}>
                  {companyInfo.illustrations.map((illu, index) => (
                    <figure className="stage-figure" key={index}>
                      <div className="stage-image-wrapper">
                        <img src={illu.src} alt={illu.alt} />
                      </div>
                      <figcaption className="stage-legend">
                        <FaCamera className="stage-legend-icon" />
                        {illu.legend}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </Col>

          <Col md={6} className="stage-panel">
            <div className="stage-card-shell">
              <h3 className="stage-block-title">Contexte du stage</h3>
              <div className="stage-info-grid">
                <div className="stage-info-item">
                  <FaBullseye className="section-icon" />
                  <div>
                    <p className="stage-info-label">Objectif</p>
                    <p className="stage-info-text">{contexteStage.objectif}</p>
                  </div>
                </div>
                <div className="stage-info-item">
                  <FaQuestionCircle className="section-icon" />
                  <div>
                    <p className="stage-info-label">Problématique</p>
                    <p className="stage-info-text">
                      {contexteStage.problematique}
                    </p>
                  </div>
                </div>
                <div className="stage-info-item">
                  <FaUsers className="section-icon" />
                  <div>
                    <p className="stage-info-label">Place du stagiaire</p>
                    <p className="stage-info-text">{contexteStage.place}</p>
                  </div>
                </div>
                <div className="stage-info-item">
                  <FaLightbulb className="section-icon" />
                  <div>
                    <p className="stage-info-label">Contexte</p>
                    <p className="stage-info-text">{contexteStage.contexte}</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <section className="stage-section-card">
          <div className="stage-section-header">
            <div>
              <h2 className="stage-section-title">
                Outils / technologies utilisées
              </h2>
            </div>
            <FaTools className="stage-section-icon" />
          </div>
          <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
            {outilsAvecIcones.map((outil) => {
              const IconComponent = outil.icon;
              return (
                <Col xs={4} md={2} key={outil.nom} className="tech-icons">
                  <IconComponent />
                </Col>
              );
            })}
          </Row>
        </section>

        <section className="stage-section-card">
          <div className="stage-section-header">
            <div>
              <h2 className="stage-section-title">
                Missions centrales et résultats
              </h2>
            </div>
            <FaCheckCircle className="stage-section-icon" />
          </div>

          <Row>
            {missions.map((mission) => {
              const Icon = mission.icon;
              return (
                <Col md={6} key={mission.id} className="stage-panel">
                  <div className="stage-mission-card mission-card">
                    <div className="stage-card-header">
                      <div className="stage-card-title">
                        <Icon className="stage-card-icon" />
                        <div>
                          <h3>{mission.titre}</h3>
                          <div className="tech-badges">
                            {mission.technologies.map((tech) => (
                              <span className="tech-badge" key={tech}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="stage-card-body">
                      <h5>Contexte & description</h5>
                      <p>{mission.description}</p>

                      <div className="stage-block">
                        <h6>
                          <FaTools className="section-icon" /> Outils utilisés
                        </h6>
                        <ul className="stage-list">
                          {mission.outils.map((item) => (
                            <li key={item}>
                              <FaListAlt className="list-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="stage-block">
                        <h6>
                          <FaCheckCircle className="section-icon" /> Résultats
                          concrets
                        </h6>
                        <ul className="stage-list">
                          {mission.resultats.map((item) => (
                            <li key={item}>
                              <FaChartLine className="list-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="stage-illustrations">
                        {mission.illustrations.map((illu) => (
                          <figure className="stage-figure" key={illu.src}>
                            <div className="stage-image-wrapper">
                              <img src={illu.src} alt={illu.alt} />
                            </div>
                            <figcaption className="stage-legend">
                              <FaCamera className="stage-legend-icon" />
                              {illu.legend}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </section>

        <section className="stage-section-card">
          <div className="stage-section-header">
            <div>
              <h2 className="stage-section-title">Ce que ce stage m’a apporté</h2>
            </div>
            <FaLightbulb className="stage-section-icon" />
          </div>

          <Row>
            <Col md={4} className="stage-panel">
              <div className="stage-card-shell">
                <h4 className="stage-block-title">Compétences techniques</h4>
                <ul className="stage-list">
                  {bilan.techniques.map((item) => (
                    <li key={item}>
                      <FaCode className="list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4} className="stage-panel">
              <div className="stage-card-shell">
                <h4 className="stage-block-title">Compétences professionnelles</h4>
                <ul className="stage-list">
                  {bilan.professionnelles.map((item) => (
                    <li key={item}>
                      <FaUserTie className="list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4} className="stage-panel">
              <div className="stage-card-shell">
                <h4 className="stage-block-title">Apports pour la suite</h4>
                <ul className="stage-list">
                  {bilan.poursuite.map((item) => (
                    <li key={item}>
                      <FaGraduationCap className="list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </section>

        <section className="stage-section-card">
          <div className="stage-section-header">
            <div>
              <h2 className="stage-section-title">
                Compétences mobilisées (justifiées par mission)
              </h2>
            </div>
            <FaListAlt className="stage-section-icon" />
          </div>

          <div className="competence-table">
            <div className="competence-row competence-header">
              <span>Code</span>
              <span>Intitulé du référentiel</span>
              <span>Mission associée</span>
            </div>
            {competences.map((competence) => (
              <div className="competence-row" key={competence.code}>
                <span className="competence-code">{competence.code}</span>
                <span>{competence.intitule}</span>
                <span className="competence-mission">{competence.mission}</span>
              </div>
            ))}
          </div>
        </section>
        
      </Container>
    </Container>
  );
}

export default Stage;