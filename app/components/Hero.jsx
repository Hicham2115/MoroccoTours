// app/components/Hero.jsx
'use client';

import { useEffect, useState } from 'react';
import { HERO_SLIDES } from '../data';
import { Icon } from './Icons';
import { useLang } from '../lang/LangContext';
import { translations } from '../lang/translations';

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const { lang } = useLang();
  const t = translations[lang].hero;

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={'slide ' + (i === idx ? 'active' : '')}
            style={{ backgroundImage: `url(${s.img})` }}
          />
        ))}
      </div>

      <div className="hero-inner">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h1 className="display">{t.h1[0]}<em>{t.h1[1]}</em>{t.h1[2]}</h1>
            <p className="hero-lede">{t.lede}</p>
            <div className="hero-cta">
              <a href="#contact" className="btn">{t.planJourney} <Icon.Arrow className="arrow" /></a>
              <a href="#packages" className="btn ghost">{t.exploreTours}</a>
            </div>
          </div>

          <div className="hero-meta">
            {t.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-slide-indicator">
        {HERO_SLIDES.map((_, i) => (
          <div key={i} className={'dot ' + (i === idx ? 'active' : '')} onClick={() => setIdx(i)} />
        ))}
      </div>

      <div className="hero-scroll">
        <span>{t.scroll}</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
