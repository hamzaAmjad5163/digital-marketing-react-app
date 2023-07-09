import React from "react";
import AboutImage from "../assets/images/about.jpg";
import { Row, Col } from "reactstrap";
import '../Styles/about.css';
const About = () => {
  const renderHeading = (heading, value) => {
    return (
      <div className="d-flex flex-column ">
        <h3>{heading}</h3> <p>{value}</p>
      </div>
    );
  };

  return (
    <div
      className="p-5"
      style={{
        background: "#FDFDFD",
        width: "100%",
        height: "100%",
      }}
    >
      <Row>
        <Col xl={6} lg={6} md={12} xs={12} sm={12} className="pt-3">
          <p
            style={{
              overflow: "hidden",
            }}
          >
            <img className="aboutImage d-flex justify-content-start justify-content-md-center" src={AboutImage} alt="aboutImage" />
          </p>
        </Col>
        <Col xl={6} lg={6} md={12} xs={12} sm={12}>
          <p className="aboutHeading">Let's start a conversation:</p>
          <Row className="conversation__row">
            <Col xl={6} lg={6} md={12} xs={12} sm={12}>
              {renderHeading("Phone", "123-456-7890")}
            </Col>
            <Col xl={6} lg={6} md={12} xs={12} sm={12}>
              {renderHeading("Email", "hello@reallygreatsite.com")}
            </Col>
          </Row>
          <Row className="conversation__row2">
            <Col xl={6} lg={6} md={12} xs={12} sm={12}>
              {renderHeading("Address", "123 Anywhere St.ny City, ST 12345")}
            </Col>
            <Col xl={6} lg={6} md={12} xs={12} sm={12}>
              {renderHeading("Social Media", "@reallygreatsite")}
            </Col>
          </Row>
         <p className="d-flex align-items-center align-items-md-start pt-4"> <a className="button__about" href="/contact"> CONTACT US TO REQUEST A CONSULTATION</a></p>
        </Col>
      </Row>
     
    </div>
  );
};

export default About;
