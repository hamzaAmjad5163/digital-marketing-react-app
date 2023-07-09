

import React from "react";
import backgroundImage from "../assets/images/Background.jpg";
import Helmet from '../components/Helmet/Helmet';
import { Link } from "react-router-dom";
import Services from "./Services";
import '../Styles/home.css';
import DemandPage from "./Demandpage";
import CompanyName from "./companyName";
import About from './About';
const Home = () => {
  return (
    <Helmet>
        <section className="hero__section">
        <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
          }}
        >
          <img
            src={backgroundImage}
            alt="backgroundImage"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(50, 50, 50, 0.7)",
            }}
          />
          <div>
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "1",
                color: "#ffffff",
                fontSize: "24px",
                textAlign: "center",
                fontFamily: "Body Text Large",
              }}
            >
           
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "25%",
                transform: "translate(-50%, -50%)",
                zIndex: "1",
                color: "#ffffff",
                fontSize: "60px",
                fontWeight: "200",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
              }}
              className="hero__section-title"
            >
              <p className="d-flex flex-column" id="title__hero">
                <span >The Future of Digital</span>
                <span>
                  Marketing{" "}
                  <span
                    style={{
                      fontStyle: "bold",
                      fontWeight: "800",
                    }}
                  >
                    is Here
                  </span>
                </span>
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "75%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "1",
              }}
              className="media__link-button"
            >
              <Link 
                to="/contact"
                style={{
                  textDecoration: "none",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "16px",
                  marginLeft:'-200%',
                  transition:
                    "background-color 0.3s ease-in-out, font-size 0.3s ease-in-out, color 0.3s ease-in-out",
                  fontSize: "18px",
                  fontFamily: "Garet",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#000";
                  e.target.style.fontSize = "16px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "white";
                  e.target.style.fontSize = "18px";
                }}
              >
              
               <span style={{whiteSpace:"nowrap"}} >REQUEST A CONSULTATION</span>
              </Link>
            </div>
          </div>
        </div>
      </div>



      

    
        </section>

                {/*Demand page*/}
        <DemandPage />

                {/*Service page*/}
        
        <Services />
                
                {/*Company Name page*/}
        <CompanyName />

         {/*About page*/}
        
        <About />
    </Helmet>
    

  )
}

export default Home
