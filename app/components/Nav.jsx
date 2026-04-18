// app/components/Nav.jsx
'use client';

import { useEffect, useState, Fragment } from 'react';
import Image from 'next/image';
import { Icon } from './Icons';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Destinations', '#destinations'],
    ['Experiences', '#packages'],
    ['About', '#about'],
    ['Stories', '#testimonials'],
    ['Contact', '#contact']
  ];

  return (
    <>
      <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
        <div className="container nav-inner">
          <a href="#top" className="nav-logo">
            <Image src="/logo.png" alt="Morocco Tours" width={120} height={120} priority />
            <div className="wordmark">
              <span className="main">Morocco Tours</span>
              <span className="sub">Tours &amp; Travels</span>
            </div>
          </a>

          <ul className="nav-links">
            {links.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>

          <div className="nav-cta">
            <div className="nav-lang">
              {['EN', 'FR', 'AR'].map((l, i) => (
                <Fragment key={l}>
                  {i > 0 && <span className="divider" />}
                  <span className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>{l}</span>
                </Fragment>
              ))}
            </div>
            <a href="#contact" className="btn">Book Now <Icon.Arrow className="arrow" /></a>
            <button className={'burger ' + (drawerOpen ? 'open' : '')} onClick={() => setDrawerOpen((o) => !o)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={'nav-mobile-drawer ' + (drawerOpen ? 'open' : '')}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setDrawerOpen(false)}>{label}</a>
        ))}
        <a href="#contact" className="btn" onClick={() => setDrawerOpen(false)}>Book Now</a>
      </div>
    </>
  );
}
