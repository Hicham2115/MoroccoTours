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
            <span className="eyebrow">Private Morocco Tours · Expert-Crafted</span>
            <h1 className="display">Morocco tours <em>crafted for those</em> who seek more.</h1>
            <p className="hero-lede">
              From the saffron-scented souks of Marrakech to the star-blanketed silence of the Sahara desert,
              we design private Morocco tours for travellers who want every door opened, every moment considered,
              and every memory earned — not purchased off a shelf.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn">Plan My Journey <Icon.Arrow className="arrow" /></a>
              <a href="#packages" className="btn ghost">Explore Tours</a>
            </div>
          </div>

          <div className="hero-meta">
            <div className="stat"><div className="num">18</div><div className="label">Years of expert craft</div></div>
            <div className="stat"><div className="num">12k+</div><div className="label">Guests guided</div></div>
            <div className="stat"><div className="num">4.9</div><div className="label">★ Verified rating</div></div>
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
