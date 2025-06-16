import "../../src/App.css";
import myImage from "../../src/component/assets/myPhoto.png";
const Portfolio = () => {
  return (
    <>
      <div className="App  text-white black">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
          <div className="container">
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
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-md-6 text-center p-5 mt-5" id="home">
              <h1>
                I'm <span className="text-warning">Anil</span>
              </h1>
              <h4>Software Developer</h4>
              <p>
                2.5+ years of experience in front-end development and data
                scraping
              </p>
              <button className="btn btn-warning m-2">Hire Me</button>
              <button className="btn btn-outline-light m-2">Download CV</button>
            </div>

            {/* Right Side */}
            <div className="col-md-6 text-center ">
                <img
                    src={myImage}
                    alt="My Project"
                    className="img-fluid rounded"
                />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="text-center" id="projects">
            <section  className="container py-5 black">
             <div className="text-warning fs-1 fw-bold">My Projects</div>
            <ul class="list-group border-0 black list-unstyled">
                <li class="black border-0  ">
                <strong>Aims 360 : </strong> Frontend developer role - developed
                multiple web pages.
                </li>
                <li class="black border-0 ">
                <strong>Data Scraping: </strong> Responsible for extracting and
                structuring data from websites.
                </li>
            </ul>
            </section>
        </div>

        {/* Skills Section */}
        <section id="skills" className="container py-5">
          <h2 className="text-warning">My Skills</h2>
          <div className="mb-3">
            <p>HTML5</p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p>CSS3</p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p>JavaScript</p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p>React JS</p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p>Data Scraping</p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "90%" }}>
                90%
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-black text-center py-4">
          <p>© 2025 Anil | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
