import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiCsharp,
  SiJavascript,
  SiKotlin,
  SiDocker,
  SiGit,
  SiNodedotjs,
  SiVuedotjs,
  SiReact,
  SiPostgresql,
} from "react-icons/si";

const techSkills = [
  { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { Icon: SiCss3, label: "CSS3", color: "#1572B6" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { Icon: SiReact, label: "React.js", color: "#61DAFB" },
  { Icon: SiVuedotjs, label: "Vue.js", color: "#42B883" },
  { Icon: SiBootstrap, label: "Bootstrap", color: "#7952B3" },
  { Icon: SiPhp, label: "PHP", color: "#777BB4" },
  { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  { Icon: SiDocker, label: "Docker", color: "#2496ED" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { Icon: SiKotlin, label: "Kotlin", color: "#0095D5" },
  { Icon: CgCPlusPlus, label: "C++", color: "#00599C" },
  { Icon: SiCsharp, label: "C#", color: "#239120" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techSkills.map(({ Icon, label, color }) => (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3" key={label}>
          <div className="about-tech-badge">
            <span className="about-tech-badge-icon" style={{ color }}>
              <Icon />
            </span>
            <span className="about-tech-badge-label">{label}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
