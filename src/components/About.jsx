export default function About() {
  return (
    <section id="about" className="alt">
      /* {/* <div className="container"> */} */
        /* {/* <p className="eyebrow mb-1">// about</p> */} */
        <h2 className="fw-bold mb-4">A developer who has shipped real features</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <p>I'm a B.Tech Information Technology student at Bhagwan Mahavir University. I completed a 6-month Full Stack Developer internship at Maxima Gaming Studio, working across React.js, Node.js, Express.js and MongoDB.</p>
            <p>Beyond the internship I built three projects: a role-based banking system, an AI-assisted resume analysis tool and an HRMS. I also completed Full Stack Web Development training at Red &amp; White Multimedia Education.</p>
          </div>
          <div className="col-md-6">
            <div className="card hcard p-4 h-100">
              <h3 className="h5">What I bring</h3>
              <ul>
                <li>REST APIs and MongoDB data models</li>
                <li>JWT authentication, protected routes and RBAC</li>
                <li>Redux Toolkit state management</li>
                <li>Responsive, reusable React components</li>
                <li>Debugging across frontend, backend and auth</li>
              </ul>
              <p className="mb-0 text-secondary"><b>Looking for:</b> MERN, Full Stack, React.js, Node.js or Junior Developer roles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
