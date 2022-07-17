import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi All, I am <span className="purple">Amit Thakur </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I did my Bachelors in Electronics Engineering from VIT, Pune
            <br />
            <br />
            Currently I am working as SDE @Amazon
            <br/> Previuosly I worked as a full stack developer @Athenahealth
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Driving Cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
