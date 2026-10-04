import { EXPERIENCE as X, EDUCATION as E } from "../data";
import Reveal from "./Reveal";
import Tags from "./Tags";

export default function Experience() {
  return (
    <section id="experience" className="alt">
      <div className="container">
        <p className="eyebrow mb-1">// experience</p>
        <h2 className="fw-bold mb-4">Experience &amp; education</h2>
        <div className="timeline">
          <Reveal>
            <div className="card hcard p-4">
              <h3 className="h5 fw-bold mb-0">{X.role}</h3>
              <p className="text-secondary">{X.company} · {X.duration}</p>
              <ul>{X.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <Tags items={X.tech} />
            </div>
          </Reveal>
        </div>
        <div className="card hcard p-4 mt-4">
          <h3 className="h5 fw-bold">{E.degree}</h3>
          <p className="text-secondary mb-0">{E.school} · {E.extra}</p>
        </div>
      </div>
    </section>
  );
}
