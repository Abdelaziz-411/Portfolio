import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <div style={{ marginTop: "20px" }}>
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          <Button
            as={Link}
            to={`/project/${props.id}`}
            variant="primary"
          >
            <BsInfoCircle /> &nbsp; Détails
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
