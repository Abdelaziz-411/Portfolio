import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { projects } from "../../Constants/projectData";
import { AiFillGithub } from "react-icons/ai";
import { SiGitlab } from "react-icons/si";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">Projet non trouvé</h1>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {project.title}
        </h1>
        <Row className="justify-content-center g-0">
            {project.imgPath && (
              <Col md={project.demoImgPath ? 6 : 8} style={{ marginBottom: "0px" }}>
                {project.imgCaption && (
                  <div style={{ color: "white", textAlign: "center", marginBottom: "8px", fontWeight: 600 }}>
                    {project.imgCaption}
                  </div>
                )}
                <img src={project.imgPath} alt="project-img-1" className="img-fluid" style={{ maxHeight: "500px", borderRadius: "16px" }} />
              </Col>
            )}
            {project.demoImgPath && (
              <Col md={6} style={{ marginBottom: "0px" }}>
                {project.demoImgCaption && (
                  <div style={{ color: "white", textAlign: "center", marginBottom: "8px", fontWeight: 600 }}>
                    {project.demoImgCaption}
                  </div>
                )}
                <img src={project.demoImgPath} alt="project-img-2" className="img-fluid" style={{ maxHeight: "500px", borderRadius: "16px" }} />
              </Col>
            )}
        </Row>
        
        <Row className="justify-content-center">
          <Col md={10} className="home-about-description" style={{color: "white"}}>
            <h2 style={{ fontSize: "2em", paddingBottom: "0px" }}>
              Description
            </h2>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              {project.description}
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ paddingTop: "0px", paddingBottom: "20px" }}>
            <Col md={10} style={{color: "white"}}>
                <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>Compétences Validées</h2>
                <div style={{ textAlign: "left", fontSize: "1.1em", paddingLeft: "20px" }}>
                    <ul>
                    {project.skills && project.skills.map((skill, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>{skill}</li>
                    ))}
                    </ul>
                </div>
            </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
            {project.ghLink && (
              <Button
                  variant="primary"
                  href={project.ghLink}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
              >
                  {project.ghLink.includes("gitlab") ? <SiGitlab /> : <AiFillGithub />} &nbsp;
                  {project.ghLink.includes("gitlab") ? "GitLab" : "GitHub"}
              </Button>
            )}
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;
