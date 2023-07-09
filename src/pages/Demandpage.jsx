import React from "react";
import { Container, Row, Col } from "reactstrap";
import SideImage from "../assets/images/sideImage.jpg";
import '../Styles/demandPage.css';

const DemandPage = () => {
  return (
    <div style={{ background: "#DDD8D3", width:"100%"}} className="demand__container" id="demandPage">
      <Container fluid>
        <Row style={{ height: "100%" }}>
          <Col xl={6} lg={6} md={6} xs={12} sm={12} style={{ overflow: "hidden" }}>
            <div style={{ height: "100%" }} id="side__img">
              <img
                src={SideImage}
                alt="YourImage"
                style={{
                  width: "100%",
                  height: "90vh",

                  transform: "scale(1.9)",
                }}
              />
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} xs={12} sm={12}>
            <div id="heading__demand" className="d-flex flex-column align-items-start justify-content-center break-line h-100 px-5">
              <p>Demand more from your website</p>
              <p>and social media</p>

              <div 
              style={{
                fontSize:"18px",
                textTransform:"none",
              textAlign:"start",
              alignItems:"start"
          
               
              }}
              className="pl-0 ml-0 pt-4">
                Because they can and will do more for your company. All <br />you need
                is the right digital marketing specialist to unlock<br /> your
                website's full potential.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DemandPage;
