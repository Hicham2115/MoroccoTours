// app/components/Footer.jsx
import Image from "next/image";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image
              src="/logo.png"
              alt="Morocco Tours"
              width={100}
              height={100}
              priority
            />

            <p>
              Expert-designed private Morocco tours &amp; Sahara desert
              expeditions. A team of guides, specialists and hosts based in
              Marrakech — at your service, wherever you are in the world.
            </p>
          </div>
          <div className="footer-col">
            <h5>Destinations</h5>
            <ul>
              <li>
                <a href="#destinations">Marrakech Excursions</a>
              </li>
              <li>
                <a href="#destinations">Ouarzazate &amp; Sahara Tours</a>
              </li>
              <li>
                <a href="#destinations">Fez Cultural Tours</a>
              </li>
              <li>
                <a href="#destinations">Tangier Day Trips</a>
              </li>
              <li>
                <a href="#destinations">Agadir &amp; Atlantic Coast</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Morocco Tours</h5>
            <ul>
              <li>
                <a href="#packages">Imperial Cities Tour</a>
              </li>
              <li>
                <a href="#packages">Sahara Desert Expeditions</a>
              </li>
              <li>
                <a href="#packages">Atlantic Coast Journeys</a>
              </li>
              <li>
                <a href="#packages">High Atlas Trekking</a>
              </li>
              <li>
                <a href="#contact">Bespoke Private Tours</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Our Company</h5>
            <ul>
              <li>
                <a href="#destinations">Destinations</a>
              </li>
              <li>
                <a href="#packages">Experiences</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonials">Stories</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Morocco Tours · Tours &amp; Travels ·
            Marrakech, Morocco
          </div>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <Icon.Instagram />
            </a>
            <a href="#" aria-label="Facebook">
              <Icon.Facebook />
            </a>
            <a href="#" aria-label="X">
              <Icon.X />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
