import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { FaFilePdf } from "react-icons/fa";
import cdcInternal from "../../Assets/cdc stage/Application de gestion des demandes internes.pdf";

function InternalRequestsDetails() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Application de gestion des demandes internes
        </h1>

        <Row className="justify-content-center">
          <Col md={10} style={{ color: "white" }}>
            <h2 style={{ fontSize: "2em", paddingBottom: "0px" }}>
              Description
            </h2>
            <p style={{ textAlign: "justify" }}>
              Page de détails dédiée à l’application de gestion des demandes internes.
              Vous pourrez y ajouter ultérieurement les captures, les étapes de conception,
              l’architecture, et les résultats. Le cahier des charges est accessible ci-dessous.
            </p>
            <div style={{ marginTop: 12 }}>
              <Button
                variant="outline-primary"
                href={cdcInternal}
                target="_blank"
                rel="noreferrer"
              >
                <FaFilePdf style={{ marginBottom: 2 }} /> &nbsp; Voir le CDC
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default InternalRequestsDetails;
