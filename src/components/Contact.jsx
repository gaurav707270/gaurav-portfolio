import { useState } from "react";
import { EMAIL, PHONE, LINKEDIN_URL, WEB3FORMS_KEY, githubLink } from "../data";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!emailOk(form.email.trim())) err.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) err.message = "Please write at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return setStatus("idle");

    // Fallback: no access key set, so open the visitor's email app instead.
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Opportunity for Gaurav from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return setStatus("success");
    }

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${form.name}`,
          name: form.name, email: form.email, message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field = (name, label, props = {}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label fw-semibold">{label}</label>
      {props.as === "textarea"
        ? <textarea id={name} name={name} rows="4" className={`form-control ${errors[name] ? "is-invalid" : ""}`} value={form[name]} onChange={change} />
        : <input id={name} name={name} type={props.type || "text"} className={`form-control ${errors[name] ? "is-invalid" : ""}`} value={form[name]} onChange={change} />}
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <section id="contact">
      <div className="container">
        <p className="eyebrow mb-1">// contact</p>
        <h2 className="fw-bold mb-4">Let's Talk About Opportunities</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <p>📧 <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p>📞 <a href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a></p>
            <p>📍 Surat, Gujarat, India</p>
            <p><a href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn</a> · <a {...githubLink()}>GitHub</a></p>
          </div>
          <form className="col-md-6" onSubmit={submit} noValidate aria-label="Contact form">
            {field("name", "Name")}
            {field("email", "Email", { type: "email" })}
            {field("message", "Message", { as: "textarea" })}
            <button className="btn btn-accent" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send message"}</button>
            <div role="status" aria-live="polite" className="mt-2 fw-semibold">
              {status === "success" && <span className="text-success">{WEB3FORMS_KEY ? "Message sent. Thank you, I will reply soon." : `Your email app should open. If not, write to ${EMAIL}.`}</span>}
              {status === "error" && <span className="text-danger">Could not send the message. Please write to {EMAIL} directly.</span>}
            </div>
            <p className="small text-secondary mb-0">{WEB3FORMS_KEY ? "Your message is delivered to my inbox." : "Email service not configured yet: this opens your email app instead."}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
