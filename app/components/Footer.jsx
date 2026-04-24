// app/components/Footer.jsx
"use client";

import Image from "next/image";
import { Icon } from "./Icons";
import { useLang } from "../lang/LangContext";
import { translations } from "../lang/translations";

const COL1_HREFS = ["#destinations", "#destinations", "#destinations", "#destinations", "#destinations"];
const COL2_HREFS = ["#packages", "#packages", "#packages", "#packages", "#contact"];
const COL3_HREFS = ["#destinations", "#packages", "#about", "#testimonials", "#contact"];

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/logo.png" alt="Morocco Tours" width={100} height={100} priority />
            <p>{t.desc}</p>
          </div>
          <div className="footer-col">
            <h5>{t.col1.heading}</h5>
            <ul>
              {t.col1.links.map((link, i) => (
                <li key={i}><a href={COL1_HREFS[i]}>{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t.col2.heading}</h5>
            <ul>
              {t.col2.links.map((link, i) => (
                <li key={i}><a href={COL2_HREFS[i]}>{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t.col3.heading}</h5>
            <ul>
              {t.col3.links.map((link, i) => (
                <li key={i}><a href={COL3_HREFS[i]}>{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>{t.copyright(new Date().getFullYear())}</div>
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
