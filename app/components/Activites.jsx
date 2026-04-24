"use client";

const ACTIVITIES = [
  {
    id: 1,
    num: "01",
    title: "Camel Trek",
    tagline: "Sahara Desert",
    desc: "Surrender to the ancient rhythm of the dunes. Your Berber guide leads the caravan deep into Erg Chebbi's golden sea at dusk — silence broken only by the whisper of sand and the soft pad of hooves beneath a sky turning amber.",
    duration: "2–3 hrs",
    img: "https://images.unsplash.com/flagged/photo-1550489518-40f49ba4bf20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Most Beloved",
  },
  {
    id: 2,
    num: "02",
    title: "Quad Biking",
    tagline: "Desert & Palmeraie",
    desc: "Raw speed across the world's most beautiful terrain. Race along sand ridges, cut through palmeries, and reach viewpoints no tour bus ever reaches — the Sahara conquered entirely on your own terms.",
    duration: "1–4 hrs",
    img: "https://images.unsplash.com/photo-1675428604186-a165487f857c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Adrenaline",
  },
  {
    id: 3,
    num: "03",
    title: "Atlas Hiking",
    tagline: "High Atlas Mountains",
    desc: "Lace up and disappear into the world's most storied range. Your guide — a fourth-generation mountain man from a Berber village — will take you where the maps run out and the views begin.",
    duration: "Half or Full Day",
    img: "https://images.unsplash.com/photo-1588167906159-299db7b6ee81?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Immersive",
  },
  {
    id: 4,
    num: "04",
    title: "Sandboarding",
    tagline: "Erg Chebbi Dunes",
    desc: "Stand at the summit of Africa's tallest dunes as the Sahara ignites at first light, then carve the slope in a blaze of spray and silence. No prior skill required — pure exhilaration guaranteed.",
    duration: "2 hrs",
    img: "https://images.unsplash.com/photo-1665582054996-9a0ad895d014?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "At Sunrise",
  },
  {
    id: 5,
    num: "05",
    title: "Hot Air Balloon",
    tagline: "Above Marrakech",
    desc: "The medina from the heavens. Drift over terracotta rooftops, olive groves, and the snow-capped Atlas at the hour when the light is everything — champagne in hand, the entire kingdom laid at your feet.",
    duration: "3–4 hrs",
    img: "https://images.unsplash.com/photo-1617415420840-48518720fe26?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "At Dawn",
  },
  {
    id: 6,
    num: "06",
    title: "Waterfall Excursion",
    tagline: "Ouzoud & Akchour",
    desc: "Where Morocco sheds its desert skin. Hidden beyond cedar forests and Barbary macaques, the cascades of Ouzoud plunge 110 metres into jade pools. Swim, hike, and lose all sense of time.",
    duration: "Full Day",
    img: "https://images.unsplash.com/photo-1633976696701-73d3934afc39?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Hidden Gem",
  },
];

export default function Activities() {
  return (
    <section className="activities zellige-bg" id="activities">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow">Signature Experiences</span>
            <h2 className="display">
              Beyond the ordinary, <em>into the extraordinary.</em>
            </h2>
          </div>
          <p className="right">
            Each experience is privately guided, personally curated, and timed
            for the exact hour when Morocco is most alive. These are not
            excursions — they are memories you will spend years retelling.
          </p>
        </div>

        <div className="act-grid">
          {ACTIVITIES.map((a) => (
            <article key={a.id} className="act-card reveal">
              <div className="act-img">
                <img src={a.img} alt={a.title} />
                <div className="act-badge">{a.badge}</div>
                <div className="act-num">{a.num}</div>
              </div>
              <div className="act-body">
                <div className="act-tagline">{a.tagline}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
                <div className="act-footer">
                  <div className="act-duration">
                    <span className="act-dur-label">Duration</span>
                    <span className="act-dur-val">{a.duration}</span>
                  </div>
                  <a href="#contact" className="act-link">
                    Enquire
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
