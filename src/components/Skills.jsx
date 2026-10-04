import { SKILLS } from "../data";
import Reveal from "./Reveal";
import Tags from "./Tags";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow mb-1">// skills</p>
        <h2 className="fw-bold mb-4">Technical skills</h2>
        <div className="row g-3">
          {SKILLS.map((s) => (
            <div className="col-md-6 col-lg-4" key={s.title}>
              <Reveal className="h-100">
                <div className="card hcard p-4 h-100"><h3 className="h6 fw-bold">{s.title}</h3><Tags items={s.items} keyStyle={s.key} /></div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
