import "../../src/App.css";
import myImage from "../../src/component/assets/myPhoto.png";
import Icon from "../../src/component/assets/logo_wiith_background.png";
import cv from "../component/assets/Anil_Chukka.pdf";

const Portfolio = () => {
  return (
    <>
      <div className="App text-white black">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
          <div className="container">
            <img
              src={Icon}
              alt="My Project"
              className="img-fluid rounded w-3 me-2"
            />
            <a className="navbar-brand" href="#">
              ANIL
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container" style={{ paddingTop: "90px" }}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center p-5 mt-5" id="home">
              <h1>
                I'm <span className="text-warning fade-bright">Anil Chukka</span>
              </h1>
              <h4>Software Developer</h4>
              <p>Based in Hyderabad, Telangana</p>
              <p>2.5+ years of experience in front-end development and data scraping.</p>
              <button className="btn btn-warning m-2">Hire Me</button>
              <button
                className="btn btn-outline-light m-2"
                onClick={() => window.open(cv, "_blank")}
              >
                Download CV
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
        <div className="text-center fade-bright">
          <section id="about" className="container py-5">
            <h2 className="text-warning">About Me</h2>
            <p>
              Front-End Developer with over 2 years of experience designing, developing, and implementing user
              interfaces and web applications. Proficient in HTML, CSS, JavaScript, and React.js, with hands-on
              experience in responsive design frameworks such as Bootstrap.
            </p>
            <p>
              I'm passionate about writing clean, efficient code and staying up to date with the latest front-end
              technologies. I’ve worked on both personal and professional projects, contributing to user-centric,
              scalable applications.
            </p>
          </section>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <section id="skills" className="container py-5">
            <h2 className="text-warning">My Skills</h2>
            {[
              { name: "HTML5", value: 85 },
              { name: "CSS3", value: 80 },
              { name: "JavaScript", value: 75 },
              { name: "React JS", value: 70 },
              { name: "Data Scraping", value: 90 },
            ].map((skill, i) => (
              <div className="mb-3" key={i}>
                <p>{skill.name}</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: `${skill.value}%` }}
                  >
                    {skill.value}%
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Projects Section */}
        <div className="text-center">
          <section id="projects" className="container py-5 text-center">
            <h2 className="text-warning">My Projects</h2>
            <ul className="list-group border-0 black list-unstyled">
              <li className="black border-0 mb-2">
                <strong>Responsive Portfolio Website:</strong> Built using React.js, HTML, CSS, and Bootstrap to showcase my experience, skills, and projects.
              </li>
              <li className="black border-0 mb-2">
                <strong>Aims 360:</strong> Developed and maintained customer-facing web pages using React and Bootstrap, collaborating with the UX team.
              </li>
              <li className="black border-0 mb-2">
                <strong>Data Scraping:</strong> Developed scripts to extract and structure web data efficiently, increasing productivity by 30%.
              </li>
              <li className="black border-0 mb-2">
                <strong>E-Commerce Product Page:</strong> React-based product listing with filters, sorting, and API integration.
              </li>
            </ul>
          </section>
        </div>

        {/* Footer / Contact */}
        <footer id="contact" className="bg-black text-center py-4">
          <p className="mb-1">Anil Chukka</p>
          <p className="mb-1">
            Ayyappa Society Madhapur, Hyderabad, Telangana – 500018
          </p>
          <p className="mb-1">📧 anilch5199@gmail.com | 📞 6300857548</p>
          <p className="mt-3">© 2025 Anil | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
