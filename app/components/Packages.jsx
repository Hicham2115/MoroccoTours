// app/components/Packages.jsx
'use client';

import { useState } from 'react';
import { PACKAGES } from '../data';
import { Icon } from './Icons';

export default function Packages() {
  const cats = ['All', 'Signature', 'Desert', 'Coastal', 'Mountains', 'Culture'];
  const [filter, setFilter] = useState('All');
  const [favs, setFavs] = useState({});

  const filtered = filter === 'All' ? PACKAGES : PACKAGES.filter((p) => p.cat === filter);

  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow">Curated Experiences</span>
            <h2 className="display">Journeys, <em>authored.</em></h2>
          </div>
          <p className="right">
            Every itinerary is a private commission: hand-picked riads, master guides,
            and access reserved for our travellers alone. Begin with one of these, or we&apos;ll design yours.
          </p>
        </div>

        <div className="pkg-filters reveal">
          {cats.map((c) => (
            <button
              key={c}
              className={'pkg-filter ' + (filter === c ? 'active' : '')}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="pkg-grid">
          {filtered.map((p) => (
            <article key={p.id} className="pkg-card reveal">
              <div className="pkg-img">
                <img src={p.img} alt={p.title} />
                <div className="duration">{p.duration}</div>
                <button
                  className={'fav ' + (favs[p.id] ? 'active' : '')}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavs({ ...favs, [p.id]: !favs[p.id] });
                  }}
                  aria-label="Favorite"
                >
                  {favs[p.id] ? <Icon.HeartFill /> : <Icon.Heart />}
                </button>
              </div>
              <div className="pkg-body">
                <div className="route">{p.route}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="pkg-meta">
                  <div className="rating">
                    <Icon.Star />
                    <strong>{p.rating.toFixed(1)}</strong>
                    <span className="count">({p.reviews})</span>
                  </div>
                  <div className="price">€{p.price}<small> / pp</small></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
