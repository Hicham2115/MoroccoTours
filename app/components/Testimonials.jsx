// app/components/Testimonials.jsx
'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Icon } from './Icons';
import { useLang } from '../lang/LangContext';
import { translations } from '../lang/translations';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const { lang } = useLang();
  const t = translations[lang].testimonials;
  const td = t.data[i];
  const original = TESTIMONIALS[i];

  const next = () => setI((i + 1) % TESTIMONIALS.length);
  const prev = () => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container tt-wrap">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="display">{t.h2[0]}<em>{t.h2[1]}</em></h2>
          </div>
          <p className="right" style={{ alignSelf: 'flex-end' }}>{t.desc}</p>
        </div>

        <div className="tt-grid" key={i}>
          <div className="reveal">
            <div className="tt-quote" dangerouslySetInnerHTML={{ __html: '"' + td.quote + '"' }} />
            <div className="tt-author">
              <div className="avatar"><img src={original.avatar} alt={td.name} /></div>
              <div className="who">
                <div className="name">{td.name}</div>
                <div className="loc">{td.loc}</div>
                <div className="stars">
                  {[...Array(5)].map((_, n) => <Icon.Star key={n} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="tt-visual reveal">
            <img src={original.img} alt="" />
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
