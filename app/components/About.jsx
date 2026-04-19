// app/components/About.jsx
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <div className="main-img">
            <img
              src="https://images.unsplash.com/photo-1653323792487-6ecc6217040b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Medina"
            />
          </div>
          <div className="accent-img">
            <img
              src="https://images.unsplash.com/photo-1723073244943-2b00e3c9b9af?q=80&w=606&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Desert"
            />
          </div>
          <div className="gold-frame"></div>
        </div>

        <div className="about-body reveal">
          <span className="eyebrow">Our House</span>
          <h2 className="display">
            Eighteen years <em>opening doors</em> in Morocco.
          </h2>
          <p>
            Founded in Marrakech in 2008 by Youssef El Amrani, Morocco Tours
            began as a single guide and a network of riad keepers he&apos;d
            known since childhood. Today, we are a house of twenty-two — guides,
            designers, drivers, hosts — still working only with the people and
            places we&apos;d welcome into our own homes.
          </p>
          <p>
            We believe a good journey is not measured in monuments, but in
            moments: the cup of mint tea poured a second time, the detour into a
            workshop, the afternoon kept quiet.
          </p>

          <div className="about-stats">
            <div className="s">
              <div className="num">12k+</div>
              <div className="label">Guests hosted</div>
            </div>
            <div className="s">
              <div className="num">22</div>
              <div className="label">Local guides</div>
            </div>
            <div className="s">
              <div className="num">98%</div>
              <div className="label">Return requests</div>
            </div>
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
