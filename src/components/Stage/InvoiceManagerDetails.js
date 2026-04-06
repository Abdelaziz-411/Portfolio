import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaFilePdf, FaCheckCircle, FaDatabase, FaServer, FaWindowMaximize, FaFileExport, FaSearchPlus } from "react-icons/fa";
import cdcFactures from "../../Assets/cdc stage/Gestion de factures Web  PDF.pdf";
import imgFactures from "../../Assets/img_stage/Gestion de factures.png";
import imgArchitecture from "../../Assets/img_stage/Schema Architecture.png";

function InvoiceManagerDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Projet – <strong className="purple">Gestion de factures</strong> (Web + PDF)
        </h1>
        
        <Row className="justify-content-center" style={{ paddingBottom: "30px" }}>
          <Col md={8}>
            <img 
              src={imgFactures} 
              alt="Gestion de factures" 
              className="img-fluid" 
              style={{ borderRadius: "16px", boxShadow: "0 4px 15px rgba(178, 121, 216, 0.3)" }} 
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} style={{ color: "white" }}>
            <div className="stage-section-card">
              <h2 className="purple">1. Intitulé du projet</h2>
              <p><strong>Développement d’une application web de création et gestion de factures avec export PDF</strong></p>
            </div>

            <div className="stage-section-card">
              <h2 className="purple">2. Objectifs du projet</h2>
              <p style={{ textAlign: "justify" }}>
                L’objectif de cette application est de permettre à un utilisateur de gérer simplement des factures via une interface web.
              </p>
              <ul className="stage-list" style={{ textAlign: "left" }}>
                <li><FaCheckCircle className="list-icon" /> <div>Créer une facture</div></li>
                <li><FaCheckCircle className="list-icon" /> <div>Modifier une facture existante</div></li>
                <li><FaCheckCircle className="list-icon" /> <div>Supprimer une facture</div></li>
                <li><FaCheckCircle className="list-icon" /> <div>Générer une facture au format PDF</div></li>
                <li><FaCheckCircle className="list-icon" /> <div>Marquer une facture comme payée ou impayée</div></li>
              </ul>
            </div>

            <div className="stage-section-card">
              <h2 className="purple">3. Architecture du projet</h2>
              <Row className="align-items-center">
                <Col md={5}>
                   <div style={{ position: "relative", cursor: "pointer" }} onClick={handleShow}>
                     <img 
                       src={imgArchitecture} 
                       alt="Schéma Architecture" 
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
                        PHP (PDO) pour la logique métier et les échanges avec la base de données.
                      </div>
                    </li>
                    <li>
                      <FaDatabase className="list-icon" />
                      <div>
                        <strong className="purple">Base de données : </strong> 
                        MySQL avec deux tables principales (factures et lignes_facture).
                      </div>
                    </li>
                    <li>
                      <FaWindowMaximize className="list-icon" />
                      <div>
                        <strong className="purple">Frontend : </strong> 
                        HTML/CSS pour la structure et Bootstrap pour le design responsive.
                      </div>
                    </li>
                    <li>
                      <FaFileExport className="list-icon" />
                      <div>
                        <strong className="purple">Export : </strong> 
                        Bibliothèque Dompdf pour transformer le HTML en document PDF professionnel.
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
                  <h4 className="purple">Gestion CRUD</h4>
                  <ul className="stage-list" style={{ textAlign: "left" }}>
                    <li>Liste des factures avec indicateurs financiers (Total payé / Global).</li>
                    <li>Calculs automatiques (HT, TVA, TTC) via JavaScript lors de la saisie.</li>
                    <li>Modification complète des lignes de facture et recalcul dynamique.</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h4 className="purple">Export & Statuts</h4>
                  <ul className="stage-list" style={{ textAlign: "left" }}>
                    <li>Génération de PDF structuré avec en-tête, tableau de lignes et totaux.</li>
                    <li>Système de statut (Payée / Impayée) impactant les calculs globaux.</li>
                    <li>Interface d'administration simplifiée pour une prise en main rapide.</li>
                  </ul>
                </Col>
              </Row>
            </div>

            <div className="stage-section-card">
              <h2 className="purple">5. Données stockées (Base de données)</h2>
              <Row>
                <Col md={6} style={{ marginBottom: "15px" }}>
                   <div className="stage-card-shell" style={{ textAlign: "left" }}>
                      <h4 className="purple"><FaDatabase /> Table factures</h4>
                      <p style={{ fontSize: "0.9em" }}>Numéro, Date, Client, Adresse, Taux TVA, Totaux HT/TTC, Statut, Timestamps.</p>
                   </div>
                </Col>
                <Col md={6}>
                   <div className="stage-card-shell" style={{ textAlign: "left" }}>
                      <h4 className="purple"><FaDatabase /> Table lignes_facture</h4>
                      <p style={{ fontSize: "0.9em" }}>Désignation, Quantité, Prix unitaire HT, Total ligne.</p>
                   </div>
                </Col>
              </Row>
            </div>

            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
              <Button
                variant="primary"
                href={cdcFactures}
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

export default InvoiceManagerDetails;
