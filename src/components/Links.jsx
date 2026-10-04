import { DRIVE_URL, LINKEDIN_URL, githubLink, resumeLink } from "../data";

export function Certifications() {
  return (
    <section id="certifications" className="alt">
      <div className="container">
        <p className="eyebrow mb-1">// certifications</p>
        <h2 className="fw-bold mb-4">Certificates &amp; documentation</h2>
        <div className="card hcard p-4" style={{ maxWidth: 660 }}>
          <p>Full Stack Web Development training at Red &amp; White Multimedia Education. Certificates and project documentation are in a shared Google Drive folder you can open to verify.</p>
          <div><a className="btn btn-accent" href={DRIVE_URL} target="_blank" rel="noopener">View Certificates</a></div>
        </div>
      </div>
    </section>
  );
}

export function Profiles() {
  return (
    <section id="resume">
      <div className="container">
        <p className="eyebrow mb-1">// profiles</p>
        <h2 className="fw-bold mb-4">Resume, GitHub &amp; LinkedIn</h2>
        <div className="row g-3">
          <div className="col-md-4"><div className="card hcard p-4 h-100"><h3 className="h5">Resume</h3><p className="text-secondary">Skills, internship and projects in one page.</p><div><a className="btn btn-accent btn-sm" {...resumeLink()}>Download Resume</a></div></div></div>
          <div className="col-md-4"><div className="card hcard p-4 h-100"><h3 className="h5">GitHub</h3><p className="text-secondary">Source code for my MERN and React projects.</p><div><a className="btn btn-outline-accent btn-sm" {...githubLink()}>Open GitHub</a></div></div></div>
          <div className="col-md-4"><div className="card hcard p-4 h-100"><h3 className="h5">LinkedIn</h3><p className="text-secondary">My professional profile.</p><div><a className="btn btn-outline-accent btn-sm" href={LINKEDIN_URL} target="_blank" rel="noopener">Connect with me on LinkedIn</a></div></div></div>
        </div>
      </div>
    </section>
  );
}

export function RecruiterCta() {
  return (
    <section className="cta">
      <div className="container">
        <h2 className="fw-bold">Looking for a Full Stack Developer?</h2>
        <p className="mx-auto" style={{ maxWidth: 560 }}>I bring hands-on MERN experience from a 6-month internship and three full-stack projects covering authentication, REST APIs and Redux Toolkit.</p>
        <a className="btn btn-lg" href="#contact">Contact Me</a>
      </div>
    </section>
  );
}
