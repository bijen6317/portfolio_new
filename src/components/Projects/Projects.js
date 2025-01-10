import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://flutterawesome.com/content/images/2022/04/Code-2022-13-12-45.jpg'd
              isBlog={false}
              title="CLock"
              description="Clock Project in Flutter: A modern and customizable clock application built using Flutter, featuring multiple clock designs (analog, digital), smooth animations, and dynamic theming. Ideal for learning Flutter UI development and state management techniques."
              ghLink="https://github.com/bijen6317/Clock"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://images.ctfassets.net/cypk3gnrfs78/4w9v0q1gxtkLQCt9OyMzVu/ed65d0e9928fda8e513d8797f24855a5/Car-Rental-Process-Illustration.jpg'
              isBlog={false}
              title="Pahuna Wheels"
              description="Vehicle Rent App in Flutter: A user-friendly application for renting vehicles, featuring a sleek UI, real-time vehicle availability, location-based search, booking management, and secure payment integration. Perfect for learning Flutter's robust UI and backend integration capabilities."
              ghLink="https://github.com/bijen6317/Pahuna-Wheels"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://www.livelyroot.com/cdn/shop/collections/Best_Selling_Plants.jpg?crop=center&height=1200&v=1647973745&width=1200'
              isBlog={false}
              title="Plant"
              description="Plant Selling App in Flutter: A beautifully designed app for buying and selling plants, featuring an intuitive UI, detailed plant catalogs, search and filter options, seamless checkout, and secure payment integration. Ideal for exploring Flutter's capabilities in building e-commerce solutions."
              ghLink="https://github.com/bijen6317/Plant"            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
