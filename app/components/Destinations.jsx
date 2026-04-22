// app/components/Destinations.jsx
'use client';

import { useState } from 'react';
import { DESTINATIONS } from '../data';
import { Icon } from './Icons';

export default function Destinations() {
  const [active, setActive] = useState(0);
  const d = DESTINATIONS[active];

  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow">Morocco Destinations</span>
            <h2 className="display">Five cities, <em>five worlds.</em></h2>
          </div>
          <p className="right">
            From the imperial medinas of Marrakech and Fez to the Sahara desert gateway of Ouarzazate,
            the literary port of Tangier, and the Atlantic shores of Agadir — each destination is a private
            chapter, guided by locals who have lived it their entire lives.
          </p>
        </div>

        <div className="dest-tabs reveal">
          {DESTINATIONS.map((dd, i) => (
            <button
              key={dd.id}
              className={'dest-tab ' + (i === active ? 'active' : '')}
              onClick={() => setActive(i)}
            >
              <div className="num">{dd.num} —</div>
              <div className="city-name">{dd.name}</div>
              <div className="tagline">{dd.tagline}</div>
            </button>
          ))}
        </div>

        <div className="dest-panel reveal visible" key={d.id}>
          <div className="dest-visual">
            <img src={d.img} alt={d.name} />
            <div className="frame"></div>
            <div className="badge">{d.badge}</div>
            <div className="meta-card">
              <div className="k">Duration</div>
              <div className="v">{d.days}</div>
            </div>
          </div>

          <div className="dest-body">
            <span className="eyebrow">{d.num} · {d.tagline}</span>
            <h3>{d.heading}</h3>
            <p className="lede">{d.lede}</p>

            <div className="dest-highlights">
              {d.highlights.map((h, i) => (
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
              <div className="dest-pricing">
                <div className="from">From</div>
                <div className="price">€{d.price}<small>/ person</small></div>
              </div>
              <a href="#contact" className="btn">Design This Journey <Icon.Arrow className="arrow" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
