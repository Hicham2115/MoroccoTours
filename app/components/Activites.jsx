"use client";

import { useLang } from "../lang/LangContext";
import { translations } from "../lang/translations";

const ACTIVITY_IMGS = [
  "https://images.unsplash.com/flagged/photo-1550489518-40f49ba4bf20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1675428604186-a165487f857c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1588167906159-299db7b6ee81?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1665582054996-9a0ad895d014?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1617415420840-48518720fe26?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1633976696701-73d3934afc39?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ACTIVITY_NUMS = ["01", "02", "03", "04", "05", "06"];
const ACTIVITY_DURATIONS = ["2–3 hrs", "1–4 hrs", "Half or Full Day", "2 hrs", "3–4 hrs", "Full Day"];

export default function Activities() {
  const { lang } = useLang();
  const t = translations[lang].activities;

  return (
    <section className="activities zellige-bg" id="activities">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="display">
              {t.h2[0]}<em>{t.h2[1]}</em>
            </h2>
          </div>
          <p className="right">{t.desc}</p>
        </div>

        <div className="act-grid">
          {t.data.map((a, idx) => (
            <article key={idx} className="act-card reveal">
              <div className="act-img">
                <img src={ACTIVITY_IMGS[idx]} alt={a.title} />
                <div className="act-badge">{a.badge}</div>
                <div className="act-num">{ACTIVITY_NUMS[idx]}</div>
              </div>
              <div className="act-body">
                <div className="act-tagline">{a.tagline}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
                <div className="act-footer">
                  <div className="act-duration">
                    <span className="act-dur-label">{t.duration}</span>
                    <span className="act-dur-val">{ACTIVITY_DURATIONS[idx]}</span>
                  </div>
                  <a href="#contact" className="act-link">
                    {t.enquire}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
