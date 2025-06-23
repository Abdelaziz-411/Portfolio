import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { 
  FaDatabase, 
  FaDesktop, 
  FaUsers, 
  FaLink, 
  FaCheckCircle,
  FaTools,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaGraduationCap,
  FaEnvelope,
  FaEdit,
  FaImage,
  FaUserTie,
  FaExclamationTriangle,
  FaWix
} from "react-icons/fa";
import "./Stage.css";

function Stage() {
  return (
    <Container fluid className="stage-section">
      <div className="stage-particles-bg">
        <Particle />
      </div>
      <Container className="stage-content">
        <h1 className="project-heading">
          Mon <strong className="purple">Stage</strong>
        </h1>
        <p style={{ color: "white" }}>
          Découvrez les missions que j'ai réalisées pendant mon stage
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="stage-card">
            <div className="stage-card-view">
              <div className="stage-card-header">
                <h3 className="stage-card-title">
                  <FaCode className="stage-card-icon" />
                  Mission 1: Configurateur de Devis
                </h3>
                <div className="tech-badges">
                  <span className="tech-badge">PHP</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">HTML/CSS</span>
                  <span className="tech-badge">Bootstrap</span>
                </div>
              </div>
              
              <div className="stage-card-body">
                <h5>Application Web de Configurateur de Devis d'Utilitaires Aménagés</h5>
                
                <div className="stage-block">
                  <h6><FaDatabase className="section-icon" /> Étapes de Réalisation</h6>
                  <p>J'ai mené les différentes étapes en parallèle, de manière agile :</p>
                  <ul className="stage-list">
                    <li><FaDatabase className="list-icon" /> Conception de la base de données</li>
                    <li><FaDesktop className="list-icon" /> Développement de l'interface administrateur</li>
                    <li><FaUsers className="list-icon" /> Création de l'interface utilisateur (le configurateur)</li>
                    <li><FaLink className="list-icon" /> Mise en lien entre toutes les parties avec des tests progressifs</li>
                  </ul>
                </div>

                <div className="stage-block">
                  <h6><FaUserTie className="section-icon" /> Communication</h6>
                  <p>Discussion avec le patron de l'entreprise, lui poser des questions pour réaliser le site.</p>
                </div>

                <div className="stage-block">
                  <h6><FaGraduationCap className="section-icon" /> Compétences Acquises</h6>
                  <ul className="stage-list">
                    <li><strong>B1.4 Travail en mode projet :</strong> Analyser les objectifs et les modalités d'organisation d'un projet - Planifier les activités (Rapport quotidien - Google sheets)</li>
                    <li><strong>Développer la présence en ligne :</strong> Participer à l'évolution d'un site Web exploitant les données de l'organisation</li>
                    <li><strong>Mettre à disposition des utilisateurs un service informatique :</strong> Déployer un service</li>
                    <li><strong>Répondre aux incidents et aux demandes d'assistance :</strong> Le CAPTCHA</li>
                    <li><strong>B1.6 Organiser son développement personnel :</strong> Mettre en place son environnement d'apprentissage personnel</li>
                  </ul>
                </div>

                <div className="stage-block">
                  <h6><FaCheckCircle className="section-icon" /> Validation</h6>
                  <ul className="stage-list">
                    <li><FaEnvelope className="list-icon" /> Test d'envoi de devis par mail</li>
                    <li><FaEdit className="list-icon" /> Test de création, modification, suppression de marques/modèles d'utilitaires, de kits et de modèles</li>
                    <li><FaImage className="list-icon" /> Test d'ajout, modification des prix et images des éléments</li>
                    <li><FaUserTie className="list-icon" /> Réunion avec le patron pour avoir son approbation sur le résultat final du site avant la mise en ligne</li>
                  </ul>
                </div>

                <div className="stage-block">
                  <h6><FaExclamationTriangle className="section-icon" /> Difficultés</h6>
                  <p>Travail 100% autonome sans équipe.</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="stage-card">
            <div className="stage-card-view">
              <div className="stage-card-header">
                <h3 className="stage-card-title">
                  <FaWix className="stage-card-icon" />
                  Mission 2: Modifications Site Wix
                </h3>
                <div className="tech-badges">
                  <span className="tech-badge">Wix</span>
                  <span className="tech-badge">CMS</span>
                </div>
              </div>
              
              <div className="stage-card-body">
                <h5>Adaptation du Site Web de l'Entreprise</h5>
                
                <div className="stage-block">
                  <h6><FaTools className="section-icon" /> Description de la Mission</h6>
                  <p>Modifications de certaines fonctionnalités du site Wix de l'entreprise pour l'adapter aux besoins du responsable de stage.</p>
                </div>

                <div className="stage-block">
                  <h6><FaShieldAlt className="section-icon" /> Compétences Développées</h6>
                  <ul className="stage-list">
                    <li>Maîtrise de l'interface Wix</li>
                    <li>Adaptation de fonctionnalités existantes</li>
                    <li>Compréhension des besoins utilisateurs</li>
                    <li>Maintenance et évolution de sites web</li>
                  </ul>
                </div>

                <div className="stage-block">
                  <h6><FaServer className="section-icon" /> Technologies Utilisées</h6>
                  <ul className="stage-list">
                    <li>Plateforme Wix</li>
                    <li>Interface d'administration Wix</li>
                    <li>Outils de personnalisation intégrés</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Stage; 