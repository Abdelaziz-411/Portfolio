import React from "react";
import { Container, Row, Col, Badge, Table } from "react-bootstrap";
import "../Stage/Stage.css";
import {
  FaRobot,
  FaCode,
  FaTools,
  FaShieldAlt,
  FaExclamationTriangle,
  FaUserTie,
  FaCheckCircle,
  FaLightbulb,
  FaArrowRight,
  FaChartLine,
  FaTerminal,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiJetbrains,
  SiOpenai,
  SiGithub,
  SiIntellijidea,
  SiPycharm,
} from "react-icons/si";

function AIDevPage() {
  const cardStyle = {
    background: "rgba(12, 8, 24, 0.9)",
    border: "1px solid rgba(178, 121, 216, 0.4)",
    borderRadius: "18px",
    padding: "30px",
    marginBottom: "30px",
    color: "#FFFFFF",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  };

  const textLight = {
    color: "#E0E0E0",
  };

  const titlePurple = {
    color: "#c770f0",
    fontWeight: "bold",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const badgeStyle = {
    fontSize: "0.85rem",
    padding: "8px 12px",
    marginRight: "8px",
    marginBottom: "8px",
    backgroundColor: "rgba(199, 112, 240, 0.2)",
    border: "1px solid #c770f0",
    color: "#FFFFFF",
    fontWeight: "500",
  };

  return (
    <Container fluid className="project-section">
      <Container>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 className="project-heading" style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Veille Technologique
          </h1>
          <h3 className="purple" style={{ fontSize: "1.8rem", marginBottom: "30px" }}>
            L'IA Générative dans le Développement Logiciel
          </h3>
          <p style={{ color: "#FFFFFF", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
            Une exploration de la transformation profonde du métier de développeur, 
            propulsée par l'avènement des IDE intelligents et des agents autonomes.
          </p>
        </div>

        {/* Problématique */}
        <div style={cardStyle}>
          <h2 style={titlePurple}>
            <FaLightbulb /> Problématique
          </h2>
          <p style={{ ...textLight, fontSize: "1.15rem", textAlign: "justify", lineHeight: "1.8" }}>
            Comment l'intégration croissante de l'IA dans les outils de développement (IDE) 
            redéfinit-elle le rôle, les compétences et l'éthique du développeur moderne ? 
            Sommes-nous face à une simple assistance technique ou à un changement de paradigme 
            vers un rôle de "Directeur de l'Ingénierie assisté par IA" ?
          </p>
        </div>

        <Row>
          {/* Outils Classiques */}
          <Col lg={6}>
            <div style={cardStyle}>
              <h2 style={titlePurple}>
                <FaCode /> IDE Classiques Augmentés
              </h2>
              <ul className="stage-list" style={{ marginTop: "20px" }}>
                <li style={{ borderBottom: "1px solid rgba(178, 121, 216, 0.2)", padding: "15px 0" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                    <SiVisualstudiocode style={{ color: "#007ACC", fontSize: "2rem", minWidth: "40px" }} />
                    <div>
                      <strong className="purple">VS Code + Copilot</strong>
                      <p style={{ ...textLight, margin: "5px 0 0" }}>
                        L'intégration pionnière qui a démocratisé l'IA. Autocomplétion, 
                        génération de tests et chat contextuel.
                      </p>
                    </div>
                  </div>
                </li>
                <li style={{ borderBottom: "1px solid rgba(178, 121, 216, 0.2)", padding: "15px 0" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                    <SiJetbrains style={{ color: "#FFFFFF", fontSize: "2rem", minWidth: "40px" }} />
                    <div>
                      <strong className="purple">JetBrains AI Assistant</strong>
                      <p style={{ ...textLight, margin: "5px 0 0" }}>
                        Approche intégrée (IntelliJ, PyCharm) axée sur le refactoring profond 
                        et la compréhension sémantique du code.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>

          {/* Outils IA Native */}
          <Col lg={6}>
            <div style={cardStyle}>
              <h2 style={titlePurple}>
                <FaRobot /> Outils IA-Natives & Agents
              </h2>
              <ul className="stage-list" style={{ marginTop: "20px" }}>
                <li style={{ borderBottom: "1px solid rgba(178, 121, 216, 0.2)", padding: "15px 0" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                    <FaRobot style={{ color: "#c770f0", fontSize: "2rem", minWidth: "40px" }} />
                    <div>
                      <strong className="purple">Cursor</strong>
                      <p style={{ ...textLight, margin: "5px 0 0" }}>
                        Conçu autour du LLM. Capable de modifier plusieurs fichiers à la fois 
                        et de comprendre l'ensemble du codebase nativement.
                      </p>
                    </div>
                  </div>
                </li>
                <li style={{ borderBottom: "1px solid rgba(178, 121, 216, 0.2)", padding: "15px 0" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                    <FaTerminal style={{ color: "#E0E0E0", fontSize: "2rem", minWidth: "40px" }} />
                    <div>
                      <strong className="purple">Claude Code (Anthropic)</strong>
                      <p style={{ ...textLight, margin: "5px 0 0" }}>
                        Outil CLI agentique qui permet de coder, tester et exécuter des commandes 
                        directement depuis le terminal.
                      </p>
                    </div>
                  </div>
                </li>
                <li style={{ borderBottom: "1px solid rgba(178, 121, 216, 0.2)", padding: "15px 0" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                    <FaChartLine style={{ color: "#4CAF50", fontSize: "2rem", minWidth: "40px" }} />
                    <div>
                      <strong className="purple">Trae / Windsurf</strong>
                      <p style={{ ...textLight, margin: "5px 0 0" }}>
                        Nouveaux entrants axés sur les "Agents" capables d'exécuter des tâches 
                        complexes d'architecture de manière autonome.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Comparaison Visuelle */}
        <div style={cardStyle}>
          <h2 style={titlePurple}>
            <FaArrowRight /> Évolution des Paradigmes
          </h2>
          <div className="table-responsive">
            <Table style={{ color: "#FFFFFF", borderColor: "rgba(178, 121, 216, 0.3)" }}>
              <thead>
                <tr>
                  <th style={{ color: "#c770f0" }}>Époque</th>
                  <th style={{ color: "#c770f0" }}>Outils</th>
                  <th style={{ color: "#c770f0" }}>Rôle du Développeur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classique (2010-2020)</td>
                  <td>Sublime, VS Code, IntelliJ</td>
                  <td>Écriture manuelle, recherche StackOverflow</td>
                </tr>
                <tr>
                  <td className="purple">Augmenté (2021-2023)</td>
                  <td>Copilot, ChatGPT</td>
                  <td>Relecture, correction de suggestions IA</td>
                </tr>
                <tr style={{ background: "rgba(199, 112, 240, 0.1)" }}>
                  <td style={{ fontWeight: "bold" }}>Agentique (2024+)</td>
                  <td>Cursor, Trae</td>
                  <td>Architecte, Chef d'orchestre, Validateur</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Hybride (2026+)</td>
                  <td>Claude Code</td>
                  <td>Collaboration avec des agents IA, supervision stratégique</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <Row>
          {/* Avantages */}
          <Col md={6}>
            <div style={{ ...cardStyle, borderLeft: "5px solid #4CAF50" }}>
              <h2 style={{ ...titlePurple, color: "#4CAF50" }}>
                <FaCheckCircle /> Avantages Clés
              </h2>
              <ul className="stage-list">
                <li style={textLight}><FaCheckCircle style={{ color: "#4CAF50", marginRight: "10px" }} /> Productivité multipliée par 2-3</li>
                <li style={textLight}><FaCheckCircle style={{ color: "#4CAF50", marginRight: "10px" }} /> Réduction drastique du code "boilerplate"</li>
                <li style={textLight}><FaCheckCircle style={{ color: "#4CAF50", marginRight: "10px" }} /> Support à l'apprentissage de nouveaux langages</li>
                <li style={textLight}><FaCheckCircle style={{ color: "#4CAF50", marginRight: "10px" }} /> Détection précoce de bugs potentiels</li>
              </ul>
            </div>
          </Col>

          {/* Limites */}
          <Col md={6}>
            <div style={{ ...cardStyle, borderLeft: "5px solid #F44336" }}>
              <h2 style={{ ...titlePurple, color: "#F44336" }}>
                <FaExclamationTriangle /> Limites & Risques
              </h2>
              <ul className="stage-list">
                <li style={textLight}><FaExclamationTriangle style={{ color: "#F44336", marginRight: "10px" }} /> Hallucinations et failles de sécurité</li>
                <li style={textLight}><FaExclamationTriangle style={{ color: "#F44336", marginRight: "10px" }} /> Atrophie des compétences fondamentales</li>
                <li style={textLight}><FaExclamationTriangle style={{ color: "#F44336", marginRight: "10px" }} /> Questions de copyright et propriété intellectuelle</li>
                <li style={textLight}><FaExclamationTriangle style={{ color: "#F44336", marginRight: "10px" }} /> Dépendance critique aux fournisseurs d'IA</li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Compétences de demain */}
        <div style={cardStyle}>
          <h2 style={titlePurple}>
            <FaUserTie /> Les Nouvelles Compétences Clés
          </h2>
          <Row>
            <Col md={4} style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3rem", color: "#c770f0", marginBottom: "15px" }}><FaRobot /></div>
              <h4>Prompt Engineering</h4>
              <p style={textLight}>Capacité à formuler des instructions précises et contextuelles pour guider l'IA.</p>
            </Col>
            <Col md={4} style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3rem", color: "#c770f0", marginBottom: "15px" }}><FaShieldAlt /></div>
              <h4>Audit de Code</h4>
              <p style={textLight}>Passage d'un rôle d'auteur à un rôle de relecteur critique et sécuritaire.</p>
            </Col>
            <Col md={4} style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3rem", color: "#c770f0", marginBottom: "15px" }}><FaTools /></div>
              <h4>Vision Architecturale</h4>
              <p style={textLight}>Focus sur la conception système plutôt que sur les détails d'implémentation.</p>
            </Col>
          </Row>
        </div>

        {/* Sources */}
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h2 style={{ ...titlePurple, justifyContent: "center" }}>
            <SiGithub /> Sources de Veille
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            <div style={{ padding: "10px 20px", border: "1px solid rgba(178, 121, 216, 0.3)", borderRadius: "10px" }}>
              <FaRobot style={{ marginRight: "10px" }} /> Anthropic Dev Blog
            </div>
            <div style={{ padding: "10px 20px", border: "1px solid rgba(178, 121, 216, 0.3)", borderRadius: "10px" }}>
              <SiOpenai style={{ marginRight: "10px" }} /> OpenAI Dev Blog
            </div>
            <div style={{ padding: "10px 20px", border: "1px solid rgba(178, 121, 216, 0.3)", borderRadius: "10px" }}>
              <SiGithub style={{ marginRight: "10px" }} /> GitHub Next
            </div>
            <div style={{ padding: "10px 20px", border: "1px solid rgba(178, 121, 216, 0.3)", borderRadius: "10px" }}>
              <SiJetbrains style={{ marginRight: "10px" }} /> JetBrains AI Lab
            </div>
            <div style={{ padding: "10px 20px", border: "1px solid rgba(178, 121, 216, 0.3)", borderRadius: "10px" }}>
              <FaCode style={{ marginRight: "10px" }} /> TechCrunch Dev Section
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default AIDevPage;
