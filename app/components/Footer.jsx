// app/components/Footer.jsx
import Image from 'next/image';
import { Icon } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/logo.png" alt="Morocco Tours" width={140} height={140} />
            <p>
              Private, curated journeys through Morocco since 2008.
              A house of guides, designers and hosts — based in Marrakech, at your service worldwide.
            </p>
          </div>
          <div className="footer-col">
            <h5>Destinations</h5>
            <ul>
              <li><a href="#destinations">Marrakech</a></li>
              <li><a href="#destinations">Ouarzazate &amp; Sahara</a></li>
              <li><a href="#destinations">Fez</a></li>
              <li><a href="#destinations">Tangier</a></li>
              <li><a href="#destinations">Agadir</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Journeys</h5>
            <ul>
              <li><a href="#packages">Imperial Cities</a></li>
              <li><a href="#packages">Sahara Expeditions</a></li>
              <li><a href="#packages">Atlantic Coast</a></li>
              <li><a href="#packages">High Atlas Retreats</a></li>
              <li><a href="#packages">Private Commissions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>House</h5>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#testimonials">Guest Letters</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Morocco Tours · Tours &amp; Travels · Marrakech, Morocco</div>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Icon.Instagram /></a>
            <a href="#" aria-label="Facebook"><Icon.Facebook /></a>
            <a href="#" aria-label="X"><Icon.X /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
