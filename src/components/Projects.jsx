import { useState } from "react";
import { FEATURED as F, PROJECTS, githubLink } from "../data";
import Reveal from "./Reveal";
import Tags from "./Tags";

const TABS = ["Problem → Solution", "Architecture", "Features", "My role"];

function Featured() {
  const [tab, setTab] = useState(0);
  return (
    <Reveal>
      <article className="card featured p-4">
        <span className="lbl align-self-start mb-2">{F.label}</span>
        <h3 className="h2 fw-bold">{F.name}</h3>
        <p className="text-secondary">{F.summary}</p>
        <div className="nav tabs border-bottom mb-3" role="tablist" aria-label="Case study">
          {TABS.map((t, i) => (
            <button key={t} role="tab" aria-selected={tab === i} className={`nav-link ${tab === i ? "on" : ""}`} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
        <div role="tabpanel">
          {tab === 0 && <><p><b>Problem:</b> {F.problem}</p><p><b>Solution:</b> {F.solution}</p></>}
          {tab === 1 && (
            <div className="flow d-flex flex-wrap gap-2 align-items-center">
              {F.architecture.map(([t, d], i) => (
                <span key={t} className="d-contents" style={{ display: "contents" }}>
                  <div><b>{t}</b>{d}</div>{i < 2 && <span aria-hidden="true">→</span>}
                </span>
              ))}
            </div>
          )}
          {tab === 2 && <ul>{F.features.map((f) => <li key={f}>{f}</li>)}</ul>}
          {tab === 3 && <p>{F.role}</p>}
        </div>
        <Tags items={F.tech} keyStyle />
        <div className="mt-3"><a className="btn btn-accent btn-sm" {...githubLink()}>View on GitHub</a></div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow mb-1">// projects</p>
        <h2 className="fw-bold mb-4">Projects I've built</h2>
        <Featured />
        <div className="row g-3 mt-1">
          {PROJECTS.map((p) => (
            <div className="col-lg-6" key={p.name}>
              <Reveal className="h-100">
                <article className="card hcard p-4 h-100">
                  <span className="lbl align-self-start mb-2">{p.label}</span>
                  <h3 className="h5 fw-bold">{p.name}</h3>
                  <p><b>Problem:</b> {p.problem}<br /><b>Built:</b> {p.built}</p>
                  <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  <Tags items={p.tech} />
                  <div className="mt-3"><a className="btn btn-outline-accent btn-sm" {...githubLink()}>View Project</a></div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
        <p className="text-secondary small mt-3">Live demos are not listed yet. Source code and documentation are on GitHub and the Drive folder below.</p>
      </div>
    </section>
  );
}
