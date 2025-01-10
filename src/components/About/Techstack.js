import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {

  DiGit,
  DiHtml5,
  DiCss3,
  DiDart,




} from "react-icons/di";

import { SiFigma,
  SiFlutter
 } from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
