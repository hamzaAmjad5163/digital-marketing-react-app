import React from "react";
import CompanyNames from "../assets/images/companyName.jpg";
import '../Styles/companyName.css';
const CompanyName = () => {
  return (
    <section id="companyName">
    <div className='CompanyName'
      style={{
        background: "#474747",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="headings__company-name">
        <p className="company__name-para">DIGITAL MARKETING</p>
        
      </div>
      <div className="image__grid"
        style={{
          overflow: "hidden",
        }}
      >
        <img className="imageStyle " src={CompanyNames} alt="centerImage" />
        <p className="pTwo">
          We help brands thrive in the digital age with a touch of creativity
          and innovation.
        </p>
      </div>
    </div>
    </section>
  );
};

export default CompanyName;
