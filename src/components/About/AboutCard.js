import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bijen Poudel </span>
            from <span className="purple"> Pokhara, Nepal</span>
            <br />
            I am currently doing intern as a Mobile app developer at Websoft Technology.
            <br />
            I am studing Bachlore in Computer Information System (BCIS) at Pokhara Collage of Management,
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Video shooting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Focus on creating things that truly make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">BIjen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
