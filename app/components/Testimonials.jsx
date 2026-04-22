// app/components/Testimonials.jsx
'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Icon } from './Icons';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  const next = () => setI((i + 1) % TESTIMONIALS.length);
  const prev = () => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container tt-wrap">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow">Real Guest Stories · Verified Reviews</span>
            <h2 className="display">Words from <em>those who returned.</em></h2>
          </div>
          <p className="right" style={{ alignSelf: 'flex-end' }}>
            Over 12,000 travellers have trusted us with Morocco. These are a few of the stories
            they brought home — in their own words, unchanged.
          </p>
        </div>

        <div className="tt-grid" key={i}>
          <div className="reveal">
            <div className="tt-quote" dangerouslySetInnerHTML={{ __html: '"' + t.quote + '"' }} />
            <div className="tt-author">
              <div className="avatar"><img src={t.avatar} alt={t.name} /></div>
              <div className="who">
                <div className="name">{t.name}</div>
                <div className="loc">{t.loc}</div>
                <div className="stars">
                  {[...Array(5)].map((_, n) => <Icon.Star key={n} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="tt-visual reveal">
            <img src={t.img} alt="" />
            <div className="tt-frame"></div>
          </div>
        </div>

        <div className="tt-nav">
          <div className="count"><b>{String(i + 1).padStart(2, '0')}</b> / {String(TESTIMONIALS.length).padStart(2, '0')}</div>
          <div className="arrows">
            <button onClick={prev} aria-label="Previous"><Icon.ArrowLeft /></button>
            <button onClick={next} aria-label="Next"><Icon.Arrow /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
