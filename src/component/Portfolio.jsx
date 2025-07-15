import "../../src/App.css";
import myImage from "../../src/component/assets/myPhoto.png"
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
    <div className="continer text-white black ">
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
            Passionate and detail-focused Front-End Developer with 2.5+ years of experience in creating responsive and
            user- friendly web applications. Skilled in React.js, Next.js, JavaScript, SCSS, and Bootstrap. Good at working
            with APIs and turning UI/UX designs into clean, working websites. Strong in solving problems and working
            with backend teams to build complete web solutions.
          </p>
        </section>
      </div>

      {/* Skills Section */}
      <div className="text-center" id="skills">
        <section  className="container py-5">
          <h2 className="yellow">My Skills</h2>
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
      <div  id="projects">
        <section className="container py-5 fade-bright">
          <h2 className="text-warning text-center">My Projects</h2>
          <ul className="list-group border-0 black list-unstyled">
            <li className="black border-0 mb-2">
              <strong className="mt-2">1. AIMS360</strong> 
              <p className="ms-3 mt-2">Duration: 2 Years | Role: Front-End Developer</p>
              <p className="ms-3">Technologies: React.js, CSS, Bootstrap, REST APIs</p>
              <p className="ms-3">Built clean and scalable UI modules for HRM, customer records, lead tracking, invoicing, and user profile management.</p>
              <p className="ms-3">Handled API integration and UI optimization for smooth business workflow management.</p>
             </li>

            <li className="black border-0 mb-2">
              <strong>2. E-commerce Application:</strong> 
              <p className="ms-3 mt-2">Duration: 5 Months | Role: Front-End Developer</p>
              <p className="ms-3">Technologies: React.js, HTML, CSS, Bootstrap, React Strap, JavaScript, API Integration Designed and developed a responsive webpage.</p>
              <p className="ms-3">Built reusable UI components for risk tracking, mitigation dashboards, and control monitoring.</p>
              <p className="ms-3">Implemented domain-based UI restrictions and responsive layouts across all devices.</p>

            </li>
            <li className="black border-0 mb-2">
              <strong>3. Data Scraping:</strong> 
              <p className="ms-3 mt-2">Duration: 5 Months | Role: Support Role</p>
              <p className="ms-3">Technologies: Python, SQL Database, Beautiful Soup, requests, </p>
              <p className="ms-3">Extracted structured and unstructured data from various websites for analysis and reporting.</p>
              <p className="ms-3">Handled dynamic content, pagination, and login-based sites with advanced scraping techniques</p>
              <p className="ms-3">Developed and implemented custom web scraping scripts.</p>
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
