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
  SiGithub,
  SiAdobeacrobatreader
} from "react-icons/si";
import "./Stage.css";

import imgAide from "../../Assets/img_stage/aide_a_la_personne.png";
import imgN8n from "../../Assets/img_stage/n8n.png";
import imgDevis from "../../Assets/img_stage/devis_images.png";
import imgFactures from "../../Assets/img_stage/Gestion de factures.png";
import imgTickets from "../../Assets/img_stage/GestionDeTickets.png";
import logoNanika from "../../Assets/img_stage/nanika-logo.jpg";

import cdcServices from "../../Assets/cdc stage/Tache_Redaction_Integration_Web_Services_a_la_personne.pdf";
import cdcN8n from "../../Assets/cdc stage/Workflow_n8n.pdf";
import cdcDevis from "../../Assets/cdc stage/devis dynamique avec gestion d’images.pdf";
import cdcFactures from "../../Assets/cdc stage/Gestion de factures Web  PDF.pdf";
import cdcTickets from "../../Assets/cdc stage/Gestion de Tickets.pdf";

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
  { nom: "PDF", icon: SiAdobeacrobatreader },
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
          <p className="stage-subtitle">Gestionnaire de Factures Web + PDF</p>

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
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img 
                  src={logoNanika} 
                  alt="Nanika Logo" 
                  className="img-fluid" 
                  style={{ 
                    maxHeight: "100px", 
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    border: "2px solid rgba(178, 121, 216, 0.3)"
                  }} 
                />
              </div>
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
                        <span className="tech-badge">Hostinger</span>
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
                      <li><FaListAlt className="list-icon" /><span>n8n hébérgé avec Hostinger</span></li>
                      <li><FaListAlt className="list-icon" /><span>APIs REST (Google Cloud, OpenAI, etc..)</span></li>
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
                      <h3>Gestion de Tickets</h3>
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
                  <img src={imgTickets} alt="Gestion de Tickets" className="img-fluid" style={{ borderRadius: 12, marginBottom: 16 }} />
                  <h5>Contexte & description</h5>
                  <p>
                    Développement d’une application de support client permettant de centraliser les demandes de tickets.
                  </p>

                  <div className="stage-block">
                    <h6><FaTools className="section-icon" /> Outils utilisés</h6>
                    <ul className="stage-list">
                      <li><FaListAlt className="list-icon" /><span>PHP</span></li>
                      <li><FaListAlt className="list-icon" /><span>MySQL</span></li>
                      <li><FaListAlt className="list-icon" /><span>Bootstrap</span></li>
                      <li><FaListAlt className="list-icon" /><span>JavaScript</span></li>
                      <li><FaListAlt className="list-icon" /><span>GitHub</span></li>
                    </ul>
                  </div>

                  <div className="stage-block">
                    <h6><FaCheckCircle className="section-icon" /> Résultats concrets</h6>
                    <ul className="stage-list">
                      <li><FaChartLine className="list-icon" /><span>Centralisation efficace des demandes support</span></li>
                      <li><FaChartLine className="list-icon" /><span>Amélioration du temps de réponse technique</span></li>
                      <li><FaChartLine className="list-icon" /><span>Historisation complète des échanges clients</span></li>
                    </ul>
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Button
                      variant="outline-primary"
                      href={cdcTickets}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFilePdf style={{ marginBottom: 2 }} /> &nbsp; Voir le CDC
                    </Button>
                    <Button
                      as={Link}
                      to="/stage/ticket-manager"
                      variant="outline-secondary"
                    >
                      Voir la page détails
                    </Button>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={12} className="stage-panel">
              <div className="stage-mission-card mission-card stage-card-view">
                <div className="stage-card-header">
                  <div className="stage-card-title">
                    <FaCode className="stage-card-icon" />
                    <div>
                      <h3>Gestionnaire de Factures</h3>
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
                  <img src={imgFactures} alt="Gestionnaire de Factures" className="img-fluid" style={{ borderRadius: 12, marginBottom: 16 }} />
                  <h5>Contexte & description</h5>
                  <p>
                    Développement d’une application web simple de création et gestion de factures avec export PDF
                  </p>

                  <div className="stage-block">
                    <h6><FaTools className="section-icon" /> Outils utilisés</h6>
                    <ul className="stage-list">
                      <li><FaListAlt className="list-icon" /><span>PHP</span></li>
                      <li><FaListAlt className="list-icon" /><span>MySQL</span></li>
                      <li><FaListAlt className="list-icon" /><span>Bibliothèque PDF (Dompdf)</span></li>
                      <li><FaListAlt className="list-icon" /><span>Bootstrap</span></li>
                      <li><FaListAlt className="list-icon" /><span>JavaScript</span></li>
                      <li><FaListAlt className="list-icon" /><span>GitHub</span></li>
                    </ul>
                  </div>

                  <div className="stage-block">
                    <h6><FaCheckCircle className="section-icon" /> Résultats concrets</h6>
                    <ul className="stage-list">
                      <li><FaChartLine className="list-icon" /><span>Génération automatisée de factures professionnelles</span></li>
                      <li><FaChartLine className="list-icon" /><span>Calculs de TVA et totaux sans erreur humaine</span></li>
                      <li><FaChartLine className="list-icon" /><span>Suivi précis des paiements clients</span></li>
                    </ul>
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Button
                      variant="outline-primary"
                      href={cdcFactures}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFilePdf style={{ marginBottom: 2 }} /> &nbsp; Voir le CDC
                    </Button>
                    <Button
                      as={Link}
                      to="/stage/invoice-manager"
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
              <h2 className="stage-section-title">
                Compétences mobilisées (justifiées par mission)
              </h2>
              <p className="stage-section-subtitle">
                Stage 2ᵉ année — 06/01/2026 → 20/02/2026
              </p>
            </div>
          </div>

          {(() => {
            const referentiel = {
              "1.1": "Recenser et identifier les ressources numériques",
              "1.2": "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
              "1.3": "Mettre en place et vérifier les niveaux d’habilitation associés à un service",
              "1.4": "Vérifier les conditions de la continuité d’un service informatique",
              "1.5": "Gérer des sauvegardes",
              "1.6": "Vérifier le respect des règles d’utilisation des ressources numériques",
              "2.1": "Collecter, suivre et orienter des demandes",
              "2.2": "Traiter des demandes concernant les services réseau et système, applicatifs",
              "2.3": "Traiter des demandes concernant les applications",
              "3.3": "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
              "4.1": "Analyser les objectifs et les modalités d’organisation d’un projet",
              "4.2": "Planifier les activités",
              "4.3": "Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
              "5.1": "Réaliser les tests d’intégration et d’acceptation d’un service",
              "5.2": "Déployer un service",
              "5.3": "Accompagner les utilisateurs dans la mise en place d’un service",
              "6.1": "Mettre en place son environnement d’apprentissage personnel",
              "6.2": "Mettre en œuvre des outils et stratégies de veille informationnelle",
              "6.4": "Développer son projet professionnel"
            };

            // Groupé par mission (lisible)
            const missions = [
              {
                title: "Automatisation vidéos IA (n8n / APIs / webhooks)",
                description:
                  "Conception et orchestration de workflows n8n : appels API, webhooks, génération de contenu, publication et suivi.",
                items: ["4.1", "4.3", "6.2", "1.2", "3.3", "5.2", "1.3", "1.6", "2.2", "2.1", "5.1"]
              },
              {
                title: "Application web — Gestion de factures (Web + PDF)",
                description:
                  "Développement d’un outil de création/gestion de factures : TVA 0%/20%, statuts payée/impayée, export PDF, indicateurs.",
                items: ["4.1", "4.2", "4.3", "1.2", "1.1", "2.3", "3.3", "5.1", "5.2", "5.3", "6.1", "6.4", "1.4", "1.6", "2.2", "2.1", "1.5"]
              },
              {
                title: "Application web — Gestion des travaux / tickets (type demandes internes)",
                description:
                  "Mise en place d’une application de suivi : demandes, statuts, droits, historisation, suivi et indicateurs.",
                items: ["4.1", "4.2", "4.3", "1.2", "1.1", "2.1", "2.2", "2.3", "3.3", "5.1", "5.2", "5.3", "1.3", "1.4", "1.6", "1.5", "6.4"]
              }
            ];

            // Sécurise l'affichage : dédoublonne chaque liste et trie par code (optionnel)
            const normalize = (arr) =>
              Array.from(new Set(arr)).sort((a, b) => {
                const [a1, a2 = "0"] = a.split(".").map(Number);
                const [b1, b2 = "0"] = b.split(".").map(Number);
                return a1 !== b1 ? a1 - b1 : a2 - b2;
              });

            return (
              <div className="competence-missions">
                {missions.map((m) => {
                  const codes = normalize(m.items);

                  return (
                    <div className="competence-mission-card" key={m.title}>
                      <div className="competence-mission-head">
                        <h3 className="competence-mission-title">{m.title}</h3>
                        <p className="competence-mission-desc">{m.description}</p>
                      </div>

                      <ul className="competence-list">
                        {codes.map((code) => (
                          <li className="competence-item" key={`${m.title}-${code}`}>
                            <span className="competence-pill">{code}</span>
                            <span className="competence-label">{referentiel[code] ?? "—"}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </section>


      </Container>
    </Container>
  );
}

export default StageCurrent;
