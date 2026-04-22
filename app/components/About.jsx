// app/components/About.jsx
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <div className="main-img">
            <img
              src="https://images.unsplash.com/photo-1653323792487-6ecc6217040b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Private Morocco tour guide in Marrakech medina"
            />
          </div>
          <div className="accent-img">
            <img
              src="https://images.unsplash.com/photo-1723073244943-2b00e3c9b9af?q=80&w=606&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Sahara desert camp Morocco at night"
            />
          </div>
          <div className="gold-frame"></div>
        </div>

        <div className="about-body reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="display">
            Eighteen years <em>opening doors</em> in Morocco.
          </h2>
          <p>
            Morocco Tours was founded in Marrakech — born from a deep love of
            the land, its people, and a conviction that exceptional travel is
            something you design, not something you book off a shelf. We began
            with a single vehicle, a network of trusted riad keepers, and the
            belief that every journey should feel personal. Today we are
            twenty-two: guides, designers, drivers, and hosts — all Moroccan,
            all local, all working only with people and places we would invite
            into our own homes.
          </p>
          <p>
            We don&apos;t measure journeys in monuments. We measure them in
            moments: the mint tea poured a second time unprompted, the afternoon
            kept deliberately empty, the workshop door opened into a world no
            guidebook mentions.
          </p>

          <div
            className="dest-highlights"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <div className="h">
              <div className="dot"></div>
              <div className="text">
                <strong>
                  Fully private — your dates, your pace, your group only
                </strong>
                <span>
                  No shared coaches. No strangers. Your journey is yours alone.
                </span>
              </div>
            </div>
            <div className="h">
              <div className="dot"></div>
              <div className="text">
                <strong>
                  18 years of local relationships = access money alone
                  can&apos;t buy
                </strong>
                <span>
                  Doors that stay closed for everyone else open for our guests.
                </span>
              </div>
            </div>
            <div className="h">
              <div className="dot"></div>
              <div className="text">
                <strong>
                  Every property hand-inspected — we stay there ourselves
                </strong>
                <span>
                  No surprises. Only riads and camps we would personally return
                  to.
                </span>
              </div>
            </div>
            <div className="h">
              <div className="dot"></div>
              <div className="text">
                <strong>
                  End-to-end care, from inquiry to airport farewell
                </strong>
                <span>
                  Transfers, guides, dining, permits — orchestrated so nothing
                  interrupts you.
                </span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="s">
              <div className="num">12k+</div>
              <div className="label">Guests guided</div>
            </div>
            <div className="s">
              <div className="num">22</div>
              <div className="label">Local specialists</div>
            </div>
            <div className="s">
              <div className="num">98%</div>
              <div className="label">Return requests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
