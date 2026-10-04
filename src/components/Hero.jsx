import photo from "../assets/profile.jpg";
import { STATS, githubLink, resumeLink, LINKEDIN_URL } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 order-2 order-lg-1">
            <span className="pill mb-3"><span className="dot" aria-hidden="true" />Open to opportunities</span>
            <h1 className="display-3 fw-bold mb-1">Gaurav Kharate</h1>
            <p className="fs-4 fw-semibold mb-3" style={{ color: "var(--ac)" }}>MERN Stack Developer | Full Stack Developer</p>
            <p className="lead text-secondary">I build responsive web apps with React.js, Node.js, Express.js, MongoDB and Redux Toolkit, with secure JWT authentication and role-based access control. 6 months of Full Stack internship experience.</p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <a className="btn btn-accent btn-lg" href="#projects">View Projects</a>
              <a className="btn btn-outline-accent btn-lg" {...resumeLink()}>Download Resume</a>
              <a className="btn btn-outline-accent btn-lg" href="#contact">Contact Me</a>
            </div>
            <div className="d-flex flex-wrap gap-4 mt-3">
              <a {...githubLink()}>GitHub ↗</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn ↗</a>
              <span className="text-secondary">📍 Surat, Gujarat, India</span>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 d-flex flex-column align-items-center">
            <div className="photo">
              <img src={photo} alt="Portrait of Gaurav Kharate" width="440" height="440" />
            </div>
            <div className="code mt-4 w-100" style={{ maxWidth: 340 }} aria-label="Quick profile">
              <span className="text-secondary">const</span> <span className="k">gaurav</span> = {"{"}<br />
              &nbsp;&nbsp;role: <span className="s">"MERN Full Stack Dev"</span>,<br />
              &nbsp;&nbsp;experience: <span className="s">"6-month internship"</span>,<br />
              &nbsp;&nbsp;location: <span className="s">"Surat, India"</span>,<br />
              &nbsp;&nbsp;status: <span className="s">"open to work"</span><br />{"};"}
            </div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-4 g-0 border rounded-3 overflow-hidden mt-5 text-center bg-body" aria-label="Profile highlights">
          {STATS.map(([n, l]) => (
            <div className="col stat p-3 border" key={l}><b>{n}</b><span className="small text-secondary">{l}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
