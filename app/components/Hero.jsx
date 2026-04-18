// app/components/Hero.jsx
'use client';

import { useEffect, useState } from 'react';
import { HERO_SLIDES } from '../data';
import { Icon } from './Icons';

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
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
            <span className="eyebrow">Curated Journeys · Since 2008</span>
            <h1 className="display">Morocco, <em>as she was meant</em> to be seen.</h1>
            <p className="hero-lede">
              Private tours through the imperial cities, the High Atlas and the deep Sahara —
              designed for travellers who prefer their doors opened quietly, and their moments kept.
            </p>
            <div className="hero-cta">
              <a href="#destinations" className="btn">Explore Destinations <Icon.Arrow className="arrow" /></a>
              <a href="#packages" className="btn ghost">View Journeys</a>
            </div>
          </div>

          <div className="hero-meta">
            <div className="stat"><div className="num">18</div><div className="label">Years of craft</div></div>
            <div className="stat"><div className="num">42</div><div className="label">Curated journeys</div></div>
            <div className="stat"><div className="num">4.9</div><div className="label">Guest rating</div></div>
          </div>
        </div>
      </div>

      <div className="hero-slide-indicator">
        {HERO_SLIDES.map((_, i) => (
          <div key={i} className={'dot ' + (i === idx ? 'active' : '')} onClick={() => setIdx(i)} />
        ))}
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
