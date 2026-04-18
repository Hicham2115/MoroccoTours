// app/page.js
'use client';

import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Destinations />
      <Packages />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
