import React from "react";
import { Row, Col } from "reactstrap";
import ServiceA from "../assets/images/ServicsA.jpg";
import ServiceB from "../assets/images/ServiceB.jpg";
import ServiceC from "../assets/images/ServiceC.jpg";
import '../Styles/services.css';
const Services = () => {
  const ListImages = [
    {
      imgName: ServiceA,
      serviceName: "Digital Transformation",
    },
    {
      imgName: ServiceB,
      serviceName: "Social Media and Influencer Marketing",
    },
    {
      imgName: ServiceC,
      serviceName: "SEO and Data Analytics",
    },
  ];

  const renderImages = () => {
    return (
      ListImages &&
      ListImages.map((item) => {
        return (
          <Col xl={4} lg={4} md={4} xs={12} sm={12} className="px-4 ">
          <div className="pt-2">
            <img
              src={item.imgName}
              alt={"serviceImage"}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
            <p className="service__name" style={{}}>
              {item.serviceName}
            </p>
            </div>
          </Col>
        );
      })
    );
  };

  return (
    <section id="services">
    <div id="service__div" className="d-flex flex-column p-4 ">
      <p id="service__paragraph">
        Our Exciting Service Offerings
      </p>
      <Row className="px-5">{renderImages()}</Row>
    </div>
    </section>
  );
};

export default Services;
