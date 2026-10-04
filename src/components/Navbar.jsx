import { NAV, resumeLink } from "../data";
import { useActiveSection } from "../hooks";

const ids = NAV.map((n) => n.toLowerCase());

export default function Navbar() {
  const active = useActiveSection(ids);
  const close = () => document.getElementById("navMenu")?.classList.remove("show");
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body border-bottom" aria-label="Main">
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#home">&lt;gaurav/&gt;</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {NAV.map((n) => (
              <li className="nav-item" key={n}>
                <a className={`nav-link ${active === n.toLowerCase() ? "active" : ""}`} href={`#${n.toLowerCase()}`} onClick={close}>{n}</a>
              </li>
            ))}
            <li className="nav-item ms-lg-2"><a className="btn btn-accent btn-sm" {...resumeLink()}>Get Resume</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
