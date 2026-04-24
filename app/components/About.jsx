// app/components/About.jsx
"use client";

import { useLang } from "../lang/LangContext";
import { translations } from "../lang/translations";

export default function About() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <div className="main-img">
            <img
              src="https://images.unsplash.com/photo-1653323792487-6ecc6217040b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Private Morocco tour guide in Marrakech medina"
            />
          </div>
          <div className="accent-img">
            <img
              src="https://images.unsplash.com/photo-1723073244943-2b00e3c9b9af?q=80&w=606&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Sahara desert camp Morocco at night"
            />
          </div>
          <div className="gold-frame"></div>
        </div>

        <div className="about-body reveal">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display">
            {t.h2[0]}<em>{t.h2[1]}</em>{t.h2[2]}
          </h2>
          <p>{t.p1}</p>
          <p>{t.p2}</p>

          <div className="dest-highlights" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            {t.bullets.map((b, i) => (
              <div className="h" key={i}>
                <div className="dot"></div>
                <div className="text">
                  <strong>{b.t}</strong>
                  <span>{b.s}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-stats">
            {t.stats.map((s) => (
              <div className="s" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
