// app/components/About.jsx
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <div className="main-img">
            <img src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=900&q=80" alt="Medina" />
          </div>
          <div className="accent-img">
            <img src="https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=600&q=80" alt="Desert" />
          </div>
          <div className="gold-frame"></div>
        </div>

        <div className="about-body reveal">
          <span className="eyebrow">Our House</span>
          <h2 className="display">Eighteen years <em>opening doors</em> in Morocco.</h2>
          <p>
            Founded in Marrakech in 2008 by Youssef El Amrani, Morocco Tours began as a
            single guide and a network of riad keepers he&apos;d known since childhood. Today, we are
            a house of twenty-two — guides, designers, drivers, hosts — still working only with
            the people and places we&apos;d welcome into our own homes.
          </p>
          <p>
            We believe a good journey is not measured in monuments, but in moments: the cup of
            mint tea poured a second time, the detour into a workshop, the afternoon kept quiet.
          </p>

          <div className="about-stats">
            <div className="s"><div className="num">12k+</div><div className="label">Guests hosted</div></div>
            <div className="s"><div className="num">22</div><div className="label">Local guides</div></div>
            <div className="s"><div className="num">98%</div><div className="label">Return requests</div></div>
          </div>

          <div className="signature">
            <span className="scrawl">Youssef</span>
            <div className="name">
              <div className="n">Youssef El Amrani</div>
              <div className="t">Founder · Marrakech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
