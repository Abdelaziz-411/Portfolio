import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Abdelaziz KHALIFA. </span>
            <br />
            Actuellement, je suis étudiant en <span className="purple"> BTS SIO </span> (Services Informatiques aux Organisations)
            option<span className="purple"> (SLAM) </span>forme des spécialistes du
            développement et de la gestion d’applications informatiques.
            <br />
            <br />
            Outre le codage, j'aime aussi faire d'autres activités !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Regarder des films
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
