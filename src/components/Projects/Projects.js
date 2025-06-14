import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eventManager from "../../Assets/Projects/event-manager.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventManager}
              isBlog={false}
              title="Gestion d'Événements"
              description="Une plateforme web de gestion d'événements développée avec PHP et MySQL. Le site permet aux utilisateurs de créer, gérer et s'inscrire à des événements. Fonctionnalités principales : création d'événements, système d'inscription, gestion des participants, et interface d'administration. Le projet met en œuvre une architecture MVC et utilise une base de données relationnelle pour stocker les données des événements et des utilisateurs."
              ghLink="https://gitlab.bts-malraux72.net/sts11/ap-slam/g3webasso.git"
              demoLink="https://etu.bts-malraux72.net/~aidan.deshaies/dynamique/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
