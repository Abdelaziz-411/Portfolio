import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Particle from "../Particle";
import { FaFilePdf, FaCheckCircle, FaDatabase, FaServer, FaWindowMaximize, FaCogs, FaSearchPlus } from "react-icons/fa";
import cdcTickets from "../../Assets/cdc stage/Gestion de Tickets.pdf";
import imgTickets from "../../Assets/img_stage/GestionDeTickets.png";
import imgArchitecture from "../../Assets/img_stage/Schema_Architecture_Tickets.png";

function TicketManagerDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projet – <strong className="purple">Gestion de Tickets</strong> (Support Client)
        </h1>
        
        <Row className="justify-content-center" style={{ paddingBottom: "30px" }}>
          <Col md={8}>
            <img 
              src={imgTickets} 
              alt="Gestion de Tickets" 
              className="img-fluid" 
              style={{ borderRadius: "16px", boxShadow: "0 4px 15px rgba(178, 121, 216, 0.3)" }} 
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} style={{ color: "white" }}>
            <div className="stage-section-card">
              <h2 className="purple">1. Intitulé du projet</h2>
              <p><strong>Développement d’une application de gestion de tickets de support client</strong></p>
            </div>

            <div className="stage-section-card">
              <h2 className="purple">2. Objectifs du projet</h2>
              <p style={{ textAlign: "justify" }}>
                L’objectif de cette application est de centraliser les demandes d'assistance des clients et de permettre aux techniciens de suivre et résoudre les incidents efficacement.
              </p>
              <ul className="stage-list" style={{ textAlign: "left" }}>
                <li><FaCheckCircle className="list-icon" /> <div>Ouverture de tickets par les utilisateurs</div></li>
                <li><FaCheckCircle className="list-icon" /> <div>Suivi du statut (Nouveau, En cours, Résolu)</div></li>
                <li><FaCheckCircle className="list-icon" /> <div>Assignation des tickets aux techniciens</div></li>
                <li><FaCheckCircle className="list-icon" /> <div>Historique des échanges et commentaires</div></li>
                <li><FaCheckCircle className="list-icon" /> <div>Priorisation des demandes (Urgent, Moyen, Bas)</div></li>
              </ul>
            </div>

            <div className="stage-section-card">
              <h2 className="purple">3. Architecture du projet</h2>
              <Row className="align-items-center">
                <Col md={5}>
                   <div style={{ position: "relative", cursor: "pointer" }} onClick={handleShow}>
                     <img 
                       src={imgArchitecture} 
                       alt="Schéma Architecture Tickets" 
                       className="img-fluid" 
                       style={{ borderRadius: "12px", border: "1px solid rgba(178, 121, 216, 0.2)", marginBottom: "15px" }} 
                     />
                     <div style={{
                       position: "absolute",
                       bottom: "25px",
                       right: "10px",
                       background: "rgba(178, 121, 216, 0.7)",
                       borderRadius: "50%",
                       padding: "8px",
                       color: "white",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center"
                     }}>
                       <FaSearchPlus />
                     </div>
                   </div>
                </Col>
                <Col md={7}>
                  <ul className="stage-list" style={{ textAlign: "left" }}>
                    <li>
                      <FaServer className="list-icon" />
                      <div>
                        <strong className="purple">Backend : </strong> 
                        PHP (PDO) pour la gestion des sessions, des droits et des requêtes SQL.
                      </div>
                    </li>
                    <li>
                      <FaDatabase className="list-icon" />
                      <div>
                        <strong className="purple">Base de données : </strong> 
                        MySQL avec des tables pour les utilisateurs, les tickets, les catégories et les logs.
                      </div>
                    </li>
                    <li>
                      <FaWindowMaximize className="list-icon" />
                      <div>
                        <strong className="purple">Frontend : </strong> 
                        Interface intuitive avec Bootstrap et JavaScript pour la validation en temps réel.
                      </div>
                    </li>
                    <li>
                      <FaCogs className="list-icon" />
                      <div>
                        <strong className="purple">Logique métier : </strong> 
                        Système de notifications et routage intelligent des tickets selon la catégorie.
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>

            <Modal show={show} onHide={handleClose} size="lg" centered transparent>
              <Modal.Header closeButton style={{ background: "#1b1a2ea9", border: "none" }}>
                <Modal.Title className="purple">Schéma d'Architecture</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ background: "#1b1a2ea9", textAlign: "center", padding: "20px" }}>
                <img src={imgArchitecture} alt="Schéma Architecture Agrandi" className="img-fluid" style={{ borderRadius: "10px" }} />
              </Modal.Body>
            </Modal>

            <div className="stage-section-card">
              <h2 className="purple">4. Fonctionnalités détaillées</h2>
              <Row>
                <Col md={6}>
                  <h4 className="purple">Interface Utilisateur</h4>
                  <ul className="stage-list" style={{ textAlign: "left" }}>
                    <li>Formulaire de création de ticket avec pièces jointes.</li>
                    <li>Tableau de bord pour suivre l'avancement de ses propres demandes.</li>
                    <li>Notifications par email lors de la mise à jour d'un ticket.</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h4 className="purple">Interface Technicien</h4>
                  <ul className="stage-list" style={{ textAlign: "left" }}>
                    <li>Gestion de la file d'attente globale et prise en charge.</li>
                    <li>Outils de réponse rapide et changement de priorité.</li>
                    <li>Statistiques sur les temps de résolution et volumes.</li>
                  </ul>
                </Col>
              </Row>
            </div>

            <div className="stage-section-card">
              <h2 className="purple">5. Données stockées (Base de données)</h2>
              <Row>
                <Col md={6} style={{ marginBottom: "15px" }}>
                   <div className="stage-card-shell" style={{ textAlign: "left" }}>
                      <h4 className="purple"><FaDatabase /> Table tickets</h4>
                      <p style={{ fontSize: "0.9em" }}>ID, Titre, Description, Statut, Priorité, Créateur ID, Technicien ID, Dates.</p>
                   </div>
                </Col>
                <Col md={6}>
                   <div className="stage-card-shell" style={{ textAlign: "left" }}>
                      <h4 className="purple"><FaDatabase /> Table utilisateurs</h4>
                      <p style={{ fontSize: "0.9em" }}>Nom, Email, Mot de passe (haché), Rôle (Client/Admin/Technicien).</p>
                   </div>
                </Col>
              </Row>
            </div>

            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
              <Button
                variant="primary"
                href={cdcTickets}
                target="_blank"
                rel="noreferrer"
                style={{ padding: "10px 30px", fontSize: "1.1em" }}
              >
                <FaFilePdf style={{ marginBottom: 2 }} /> &nbsp; Télécharger le CDC Complet
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TicketManagerDetails;
