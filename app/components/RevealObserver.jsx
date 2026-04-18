// app/components/RevealObserver.jsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Run after paint so dynamically-rendered .reveal nodes are picked up
    const observe = () => {
      const els = document.querySelectorAll('.reveal:not(.visible)');
      if (!els.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );

      els.forEach((el) => io.observe(el));

      // Safety net: anything already above-the-fold gets revealed immediately
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('visible');
      });

      return io;
    };

    let io = observe();

    // Re-scan whenever the DOM changes (Packages filter, Testimonials next/prev, etc.)
    const mo = new MutationObserver(() => {
      if (io) io.disconnect();
      io = observe();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (io) io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
