// app/components/Destinations.jsx
"use client";

import { useState } from "react";
import { DESTINATIONS } from "../data";
import { Icon } from "./Icons";
import { useLang } from "../lang/LangContext";
import { translations } from "../lang/translations";

export default function Destinations() {
  const [active, setActive] = useState(0);
  const { lang } = useLang();
  const t = translations[lang].destinations;
  const td = t.data[active];
  const d = DESTINATIONS[active];

  return (
    <section className="destinations" id="destinations">
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

        <div className="dest-tabs reveal">
          {DESTINATIONS.map((dd, i) => (
            <button
              key={dd.id}
              className={"dest-tab " + (i === active ? "active" : "")}
              onClick={() => setActive(i)}
            >
              <div className="num">{dd.num} —</div>
              <div className="city-name">{dd.name}</div>
              <div className="tagline">{t.data[i].tagline}</div>
            </button>
          ))}
        </div>

        <div className="dest-panel reveal visible" key={d.id}>
          <div className="dest-visual">
            <img src={d.img} alt={d.name} />
            <div className="frame"></div>
            <div className="badge">{td.badge}</div>
            <div className="meta-card">
              <div className="k">{t.duration}</div>
              <div className="v">{d.days}</div>
            </div>
          </div>

          <div className="dest-body">
            <span className="eyebrow">
              {d.num} · {td.tagline}
            </span>
            <h3>{td.heading}</h3>
            <p className="lede">{td.lede}</p>

            <div className="dest-highlights">
              {td.highlights.map((h, i) => (
                <div className="h" key={i}>
                  <div className="dot"></div>
                  <div className="text">
                    <strong>{h.t}</strong>
                    <span>{h.s}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="dest-footer">
              <div className="dest-pricing"></div>
              <a href="#contact" className="btn">
                {t.designJourney} <Icon.Arrow className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
