import "../../src/App.css";
import myImage from "../../src/component/assets/myPhoto.png";
import Icon from "../../src/component/assets/logo_wiith_background.png";
import cv from "../component/assets/Anil_Chukka.pdf";
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { useEffect, useState } from "react";

const Portfolio = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".skill-item, .fade-bright, .slide-right-to-left"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const bar = entry.target.querySelector(".skill-bar");
            if (bar) {
              bar.style.width = bar.dataset.value + "%";
              bar.style.opacity = 1;
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const [visible, setVisible] = useState(false)
  return (
    <div className="App text-white black ">
      {/* Navbar */}
      <CNavbar expand="lg" className="bg-dark  text-white border-bottom fixed-top">
        <CContainer fluid>
          <CNavbarBrand className="custom-nav-link" href="#">Anil's</CNavbarBrand>
          <CNavbarToggler
            className="custom-nav-link_bg d-fle"
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink className="custom-nav-link" href="#" active>Home</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink  className="custom-nav-link" href="#about">About</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink  className="custom-nav-link" href="#skills">Skills</CNavLink>
              </CNavItem>
              <CNavItem>
               <CNavLink  className="custom-nav-link" href="#contact">Contact</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>

      {/* Hero Section */}
      <div className="container" style={{ paddingTop: "90px" }}  id="home">
        <div className="row align-items-center">
          <div className="col-md-6 text-center p-5 mt-5 fade-bright">
            <h1>
              I'm <span className="text-warning">Anil Chukka</span>
            </h1>
            <h4>Software Developer</h4>
            <p>Based in Hyderabad, Telangana</p>
            <p>
              2.5+ years of experience in front-end development and data
              scraping.
            </p>

            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class="btn btn-warning m-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              Hire Me
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
  
                  <div class="modal-body text-white">
                    <div className="contact-info text-center">
                      <h4>To contact me, feel free to reach out via:</h4>
                      <p>📞 <strong>Phone:</strong> 63008 57548</p>
                      <p>📧 <strong>Email:</strong> <a href="mailto:anilch5199@gmail.com">anilch5199@gmail.com</a></p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <button
              className="btn btn-outline-light m-2"
              onClick={() => window.open(cv, "_blank")}
            >
              Review CV
            </button>
          </div>
          <div className="col-md-6 text-center slide-right-to-left">
            <img
              src={myImage}
              alt="Anil Chukka"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="text-center" id="about">
        <section  className="container py-5 fade-bright">
          <h2 className="text-warning">About Me</h2>
          <p>
            Front-End Developer with over 2 years of experience designing,
            developing, and implementing user interfaces and web applications.
            Proficient in HTML, CSS, JavaScript, and React.js, with hands-on
            experience in responsive design frameworks such as Bootstrap.
          </p>
          <p>
            I'm passionate about writing clean, efficient code and staying up to
            date with the latest front-end technologies. I’ve worked on both
            personal and professional projects, contributing to user-centric,
            scalable applications.
          </p>
        </section>
      </div>

      {/* Skills Section */}
      <div className="text-center" id="skills">
        <section  className="container py-5">
          <h2 className="text-warning">My Skills</h2>
          {[
            { name: "HTML5", value: 85 },
            { name: "CSS3", value: 80 },
            { name: "JavaScript", value: 75 },
            { name: "React JS", value: 70 },
            { name: "Data Scraping", value: 90 },
          ].map((skill, i) => (
            <div className="mb-3 skill-item" key={i}>
              <p>{skill.name}</p>
              <div className="progress">
                <div
                  className="progress-bar bg-warning skill-bar"
                  style={{ width: 0 }}
                  data-value={skill.value}
                >
                  {skill.value}%
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Projects Section */}
      <div className="text-center" id="projects">
        <section className="container py-5 text-center fade-bright">
          <h2 className="text-warning">My Projects</h2>
          <ul className="list-group border-0 black list-unstyled">
            <li className="black border-0 mb-2">
              <strong>Responsive Portfolio Website:</strong> Built using
              React.js, HTML, CSS, and Bootstrap to showcase my experience,
              skills, and projects.
            </li>
            <li className="black border-0 mb-2">
              <strong>Aims 360:</strong> Developed and maintained
              customer-facing web pages using React and Bootstrap, collaborating
              with the UX team.
            </li>
            <li className="black border-0 mb-2">
              <strong>Data Scraping:</strong> Developed scripts to extract and
              structure web data efficiently, increasing productivity by 30%.
            </li>
            <li className="black border-0 mb-2">
              <strong>E-Commerce Product Page:</strong> React-based product
              listing with filters, sorting, and API integration.
            </li>
          </ul>
        </section>
      </div>

      {/* Footer / Contact */}
      <footer className="bg-black text-center py-4 fade-bright" id="contact">
        <p className="mb-1">Anil Chukka</p>
        <p className="mb-1">
          Ayyappa Society Madhapur, Hyderabad, Telangana – 500018
        </p>
        <p className="mb-1">📧 anilch5199@gmail.com | 📞 6300857548</p>
        <p className="mt-3">© 2025 Anil | All Rights Reserved</p>
      </footer>

      
    </div>
  );
};

export default Portfolio;
