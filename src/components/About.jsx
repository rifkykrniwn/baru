import FsLightbox from "fslightbox-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./CSS/About.css";
import certificateImages from "../assets/Routes/AllCertificate";

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Rifki - About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={certificateImages}
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
          I am an Information System student at Mercu Buana University, Yogyakarta.
          I learn new things quickly and work hard. I'm interested in learning how to build a website,
          like how to make it look good (Frontend), how to make it work well (Backend),
          and how to do both (Fullstack). If you want to know more about this, let me know!
          </p>

          
        </div>
      </Container>
    </>
  );
}

export default About;