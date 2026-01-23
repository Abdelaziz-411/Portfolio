import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  FaCheckCircle,
  FaListAlt,
  FaChartLine,
  FaFilePdf,
  FaCogs,
  FaGraduationCap
} from "react-icons/fa";
import {
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiJavascript,
  SiGithub
} from "react-icons/si";
import "./Stage.css";

import imgAide from "../../Assets/img_stage/aide_a_la_personne.png";
import imgN8n from "../../Assets/img_stage/n8n.png";
import imgDevis from "../../Assets/img_stage/devis_images.png";

import cdcServices from "../../Assets/cdc stage/Tache_Redaction_Integration_Web_Services_a_la_personne.pdf";
import cdcN8n from "../../Assets/cdc stage/Workflow_n8n.pdf";
import cdcDevis from "../../Assets/cdc stage/devis dynamique avec gestion d’images.pdf";
import cdcInternal from "../../Assets/cdc stage/Application de gestion des demandes internes.pdf";

const stageInfo = {
  entreprise: "Nanika Le Mans",
  annee: "Jan-Fev 2026",
  poste: "Développeur web stagiaire",
  duree: "7 semaines",
  localisation: "Le Mans (72)"
};

const companyInfo = {
  activite: "Nanika est une entreprise qui propose des prestations autour de l’informatique et le web : le développement web, en créant des sites sur mesure pour les entreprises locales",
  taille: "Le fondateur travaille en Freelance tout seul et gère son entreprise à la main.",
  secteur: "Développement informatique de sites, applications, plateformes web."
};

const contexteStage = {
  objectif:
    "Approfindir les compétences en développement web en développant des applications internes pour fluidifier l’organisation.",
  problematique:
    "Manque de centralisation des demandes internes et lourdeur des processus manuels. Besoin d’outils modulaires, fiables et facilement maintenables.",
  place:
    "Stagiaire autonome, échanges réguliers pour demander du travail, accompagnement technique et validations.",
  contexte:
    "Projet mené en environnement web (PHP/JS/Bootstrap) avec automatisations (n8n, APIs) et création d’un socle technique pour des évolutions futures."
};

const outilsAvecIcones = [
  { nom: "PHP", icon: SiPhp },
  { nom: "MySQL", icon: SiMysql },
  { nom: "Bootstrap", icon: SiBootstrap },
  { nom: "JavaScript", icon: SiJavascript },
  { nom: "GitHub", icon: SiGithub },
  { nom: "n8n (Automatisation)", icon: FaCogs }
];

function StageCurrent() {
  return (
    <Container fluid className="stage-section">
      <div className="stage-particles-bg">
        <Particle />
      </div>

      <Container className="stage-content">
        <header className="stage-header">
          <p className="stage-eyebrow">Stage de 2ème année de BTS SIO</p>
          <h1 className="project-heading">
            Stage chez <span className="purple">{stageInfo.entreprise}</span>
          </h1>
          <p className="stage-subtitle">Application web de gestion de projets et composants réutilisables</p>

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
                  <span>
                    <strong>Secteur :</strong> {companyInfo.secteur}
                  </span>
                </li>
              </ul>
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
          </div>

          <Row>
            <Col md={6} className="stage-panel">
              <div className="stage-mission-card mission-card stage-card-view">
                <div className="stage-card-header">
                  <div className="stage-card-title">
                    <FaCode className="stage-card-icon" />
                    <div>
                      <h3>Rédaction & Intégration Web (Services à la personne)</h3>
                      <div className="tech-badges">
                        <span className="tech-badge">HTML</span>
                        <span className="tech-badge">CSS</span>
                        <span className="tech-badge">Bootstrap</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stage-card-body">
                  <img src={imgAide} alt="Aide à la personne - intégration" className="img-fluid" style={{ borderRadius: 12, marginBottom: 16 }} />
                  <h5>Contexte & description</h5>
                  <p>
                    Rédaction des contenus et intégration de pages conformes à la charte.
                    Mise en page responsive, optimisation de la lisibilité et du parcours utilisateur.
                  </p>

                  <div className="stage-block">
                    <h6><FaTools className="section-icon" /> Outils utilisés</h6>
                    <ul className="stage-list">
                      <li><FaListAlt className="list-icon" /><span>Bootstrap</span></li>
                      <li><FaListAlt className="list-icon" /><span>HTML/CSS</span></li>
                      <li><FaListAlt className="list-icon" /><span>JavaScript</span></li>
                    </ul>
                  </div>

                  <div className="stage-block">
                    <h6><FaCheckCircle className="section-icon" /> Résultats concrets</h6>
                    <ul className="stage-list">
                      <li><FaChartLine className="list-icon" /><span>Pages structurées et accessibles</span></li>
                      <li><FaChartLine className="list-icon" /><span>Composants réutilisables</span></li>
                      <li><FaChartLine className="list-icon" /><span>Temps de mise en page réduit</span></li>
                    </ul>
                  </div>

                  <Button
                    variant="outline-primary"
                    href={cdcServices}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginTop: 8 }}
                  >
                    <FaFilePdf style={{ marginBottom: 2 }} /> &nbsp; Voir le CDC
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={6} className="stage-panel">
              <div className="stage-mission-card mission-card stage-card-view">
                <div className="stage-card-header">
                  <div className="stage-card-title">
                    <FaCode className="stage-card-icon" />
                    <div>
                      <h3>Devis dynamique avec gestion d’images</h3>
                      <div className="tech-badges">
                        <span className="tech-badge">HTML</span>
                        <span className="tech-badge">CSS</span>
                        <span className="tech-badge">JavaScript</span>
                        <span className="tech-badge">Bootstrap</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stage-card-body">
                  <img src={imgDevis} alt="Devis dynamique et images" className="img-fluid" style={{ borderRadius: 12, marginBottom: 16 }} />
                  <h5>Contexte & description</h5>
                  <p>
                    Développement d’un module de devis dynamique avec sélection d’options
                    et gestion d’images associées. Stockage des données et calculs côté serveur.
                  </p>

                  <div className="stage-block">
                    <h6><FaTools className="section-icon" /> Outils utilisés</h6>
                    <ul className="stage-list">
                      <li><FaListAlt className="list-icon" /><span>PHP</span></li>
                      <li><FaListAlt className="list-icon" /><span>MySQL</span></li>
                      <li><FaListAlt className="list-icon" /><span>Bootstrap</span></li>
                    </ul>
                  </div>

                  <div className="stage-block">
                    <h6><FaCheckCircle className="section-icon" /> Résultats concrets</h6>
                    <ul className="stage-list">
                      <li><FaChartLine className="list-icon" /><span>Devis personnalisables</span></li>
                      <li><FaChartLine className="list-icon" /><span>Gestion des images optimisée</span></li>
                      <li><FaChartLine className="list-icon" /><span>Amélioration du flux de vente</span></li>
                    </ul>
                  </div>

                  <Button
                    variant="outline-primary"
                    href={cdcDevis}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginTop: 8 }}
                  >
                    <FaFilePdf style={{ marginBottom: 2 }} /> &nbsp; Voir le CDC
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={6} className="stage-panel">
              <div className="stage-mission-card mission-card stage-card-view">
                <div className="stage-card-header">
                  <div className="stage-card-title">
                    <FaTools className="stage-card-icon" />
                    <div>
                      <h3>Automatisation des workflows (n8n)</h3>
                      <div className="tech-badges">
                        <span className="tech-badge">n8n</span>
                        <span className="tech-badge">APIs</span>
                        <span className="tech-badge">Webhooks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stage-card-body">
                  <img src={imgN8n} alt="Workflow n8n" className="img-fluid" style={{ borderRadius: 12, marginBottom: 16 }} />
                  <h5>Contexte & description</h5>
                  <p>
                    Conception de scénarios d’automatisation pour orchestrer les tâches récurrentes,
                    intégration de services tiers et gestion des déclencheurs.
                  </p>

                  <div className="stage-block">
                    <h6><FaTools className="section-icon" /> Outils utilisés</h6>
                    <ul className="stage-list">
                      <li><FaListAlt className="list-icon" /><span>n8n</span></li>
                      <li><FaListAlt className="list-icon" /><span>APIs REST</span></li>
                      <li><FaListAlt className="list-icon" /><span>Webhooks</span></li>
                    </ul>
                  </div>

                  <div className="stage-block">
                    <h6><FaCheckCircle className="section-icon" /> Résultats concrets</h6>
                    <ul className="stage-list">
                      <li><FaChartLine className="list-icon" /><span>Réduction des tâches manuelles</span></li>
                      <li><FaChartLine className="list-icon" /><span>Fiabilité des processus</span></li>
                      <li><FaChartLine className="list-icon" /><span>Journalisation et suivi des exécutions</span></li>
                    </ul>
                  </div>

                  <Button
                    variant="outline-primary"
                    href={cdcN8n}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginTop: 8 }}
                  >
                    <FaFilePdf style={{ marginBottom: 2 }} /> &nbsp; Voir le CDC
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={6} className="stage-panel">
              <div className="stage-mission-card mission-card stage-card-view">
                <div className="stage-card-header">
                  <div className="stage-card-title">
                    <FaCode className="stage-card-icon" />
                    <div>
                      <h3>Demandes internes</h3>
                      <div className="tech-badges">
                        <span className="tech-badge">PHP</span>
                        <span className="tech-badge">MySQL</span>
                        <span className="tech-badge">JavaScript</span>
                        <span className="tech-badge">Bootstrap</span>
                        <span className="tech-badge">GitHub</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stage-card-body">
                  <h5>Contexte & description</h5>
                  <p>
                    Application en cours de réalisation pour centraliser la création, l’affectation et le suivi des demandes internes.
                    Système de rôles, vues filtrées et notifications prévues. Les visuels et étapes détaillées seront ajoutés dans une page dédiée.
                  </p>

                  <div className="stage-block">
                    <h6><FaTools className="section-icon" /> Outils utilisés</h6>
                    <ul className="stage-list">
                      <li><FaListAlt className="list-icon" /><span>PHP</span></li>
                      <li><FaListAlt className="list-icon" /><span>MySQL</span></li>
                      <li><FaListAlt className="list-icon" /><span>Bootstrap</span></li>
                    </ul>
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Button
                      variant="outline-primary"
                      href={cdcInternal}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFilePdf style={{ marginBottom: 2 }} /> &nbsp; Voir le CDC
                    </Button>
                    <Button
                      as={Link}
                      to="/stage/internal-requests"
                      variant="outline-secondary"
                    >
                      Voir la page détails
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="stage-section-card">
          <div className="stage-section-header">
            <div>
              <h2 className="stage-section-title">Bilan du stage</h2>
            </div>
          </div>
          <Row>
            <Col md={4} className="stage-panel">
              <div className="stage-card-shell">
                <h4 className="stage-block-title">Compétences techniques</h4>
                <ul className="stage-list">
                  <li><FaCode className="list-icon" /><span>Composants réutilisables (HTML/CSS/JS/Bootstrap)</span></li>
                  <li><FaCode className="list-icon" /><span>Automatisation de workflows (n8n, webhooks, APIs)</span></li>
                  <li><FaCode className="list-icon" /><span>Développement PHP/MySQL (modélisation, CRUD)</span></li>
                </ul>
              </div>
            </Col>
            <Col md={4} className="stage-panel">
              <div className="stage-card-shell">
                <h4 className="stage-block-title">Compétences professionnelles</h4>
                <ul className="stage-list">
                  <li><FaUserTie className="list-icon" /><span>Recueil et reformulation du besoin</span></li>
                  <li><FaUserTie className="list-icon" /><span>Organisation et suivis réguliers</span></li>
                  <li><FaUserTie className="list-icon" /><span>Documentation des CDC et livrables</span></li>
                </ul>
              </div>
            </Col>
            <Col md={4} className="stage-panel">
              <div className="stage-card-shell">
                <h4 className="stage-block-title">Apports pour la suite</h4>
                <ul className="stage-list">
                  <li><FaGraduationCap className="list-icon" /><span>Pratique de l’automatisation et des intégrations</span></li>
                  <li><FaGraduationCap className="list-icon" /><span>Montée en compétence full-stack web</span></li>
                  <li><FaGraduationCap className="list-icon" /><span>Capacité à industrialiser des tâches</span></li>
                </ul>
              </div>
            </Col>
          </Row>
        </section>

        <section className="stage-section-card">
          <div className="stage-section-header">
            <div>
              <h2 className="stage-section-title">Compétences mobilisées (justifiées par mission)</h2>
            </div>
          </div>
          {[
            { code: "B1.3.1", intitule: "Participer à la valorisation de l’image de l’organisation", mission: "Rédaction & intégration (services à la personne)" },
            { code: "B1.3.3", intitule: "Participer à l’évolution d’un site Web exploitant les données de l’organisation", mission: "Rédaction & intégration (services à la personne)" },
            { code: "B2.2", intitule: "Exploiter les technologies Web pour mettre en œuvre les échanges entre applications", mission: "Automatisation (n8n, APIs, webhooks)" },
            { code: "B1.2.3", intitule: "Collecter, suivre et orienter des demandes", mission: "Automatisation (n8n, routage de tâches)" },
            { code: "B2.3", intitule: "Concevoir ou adapter une base de données", mission: "Devis dynamique (modélisation et stockage)" },
            { code: "B2.2", intitule: "Utiliser des composants d’accès aux données", mission: "Devis dynamique (CRUD et calculs)" },
            { code: "B1.4.1", intitule: "Analyser les objectifs et les modalités d’organisation d'un projet", mission: "Demandes internes (analyse et cadrage)" },
            { code: "B1.4.2", intitule: "Planifier les activités", mission: "Demandes internes (planification et suivi)" },
            { code: "B3.3", intitule: "Gérer les accès et les privilèges appropriés", mission: "Demandes internes (rôles et permissions)" }
          ].length > 0 && (
            <div className="competence-table">
              <div className="competence-row competence-header">
                <span>Code</span>
                <span>Intitulé du référentiel</span>
                <span>Mission associée</span>
              </div>
              {[
                { code: "B1.3.1", intitule: "Participer à la valorisation de l’image de l’organisation", mission: "Rédaction & intégration (services à la personne)" },
                { code: "B1.3.3", intitule: "Participer à l’évolution d’un site Web exploitant les données de l’organisation", mission: "Rédaction & intégration (services à la personne)" },
                { code: "B2.2", intitule: "Exploiter les technologies Web pour mettre en œuvre les échanges entre applications", mission: "Automatisation (n8n, APIs, webhooks)" },
                { code: "B1.2.3", intitule: "Collecter, suivre et orienter des demandes", mission: "Automatisation (n8n, routage de tâches)" },
                { code: "B2.3", intitule: "Concevoir ou adapter une base de données", mission: "Devis dynamique (modélisation et stockage)" },
                { code: "B2.2", intitule: "Utiliser des composants d’accès aux données", mission: "Devis dynamique (CRUD et calculs)" },
                { code: "B1.4.1", intitule: "Analyser les objectifs et les modalités d’organisation d'un projet", mission: "Demandes internes (analyse et cadrage)" },
                { code: "B1.4.2", intitule: "Planifier les activités", mission: "Demandes internes (planification et suivi)" },
                { code: "B3.3", intitule: "Gérer les accès et les privilèges appropriés", mission: "Demandes internes (rôles et permissions)" }
              ].map((c) => (
                <div className="competence-row" key={c.code}>
                  <span className="competence-code">{c.code}</span>
                  <span>{c.intitule}</span>
                  <span className="competence-mission">{c.mission}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </Container>
    </Container>
  );
}

export default StageCurrent;
