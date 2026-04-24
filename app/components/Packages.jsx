// app/components/Packages.jsx
"use client";

import { useState } from "react";
import { PACKAGES } from "../data";
import { Icon } from "./Icons";
import { useLang } from "../lang/LangContext";
import { translations } from "../lang/translations";

const FILTER_CATS = ["All", "Desert", "Mountains"];

export default function Packages() {
  const { lang } = useLang();
  const t = translations[lang].packages;
  const [catIdx, setCatIdx] = useState(0);

  const activeCat = FILTER_CATS[catIdx];
  const filtered = activeCat === "All" ? PACKAGES : PACKAGES.filter((p) => p.cat === activeCat);
  const pkgData = t.data;

  return (
    <section className="packages" id="packages">
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

        <div className="pkg-filters reveal">
          {t.filters.map((label, i) => (
            <button
              key={FILTER_CATS[i]}
              className={"pkg-filter " + (catIdx === i ? "active" : "")}
              onClick={() => setCatIdx(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="pkg-grid">
          {filtered.map((p) => {
            const originalIdx = PACKAGES.indexOf(p);
            const td = pkgData[originalIdx];
            return (
              <article key={p.id} className="pkg-card reveal">
                <div className="pkg-img">
                  <img src={p.img} alt={p.title} />
                  <div className="duration">{p.duration}</div>
                </div>
                <div className="pkg-body">
                  <div className="route">{p.route}</div>
                  <h4>{td?.title ?? p.title}</h4>
                  <p>{td?.desc ?? p.desc}</p>
                  <div className="pkg-meta">
                    <div className="rating">
                      <Icon.Star />
                      <strong>{p.rating.toFixed(1)}</strong>
                      <span className="count">({p.reviews})</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
