// app/page.js
"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Activities from "./components/Activites";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showSite, setShowSite] = useState(false);

  // reveal animations (your existing observer)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    sessionStorage.removeItem("visited"); // dev only

    const alreadyVisited = sessionStorage.getItem("visited");

    if (alreadyVisited) {
      setLoading(false);
      setShowSite(true);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem("visited", "true");
        setLoading(false);

        // smooth transition delay
        setTimeout(() => {
          setShowSite(true);
        }, 700);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* LOADER */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#f5ede0",
          color: "#1a0f00",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          minWidth: "100vw",

          // smooth fade out
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? "auto" : "none",
          transition: "opacity 0.7s ease",
        }}
      >
        {/* Keyframes */}
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes progressFill {
            from { width: 0%; }
            to   { width: 100%; }
          }
          @keyframes glint {
            from { left: 0%; opacity: 1; }
            to   { left: 100%; opacity: 0; }
          }
          @keyframes shimmer {
            0%, 100% { opacity: 0.3; }
            50%       { opacity: 1; }
          }
          @keyframes dotPulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50%       { opacity: 1;   transform: scale(1.5); }
          }
        `}</style>

        {/* Background orbs */}
        <div
          style={{
            position: "absolute",
            top: "33%",
            left: "50%",
            transform: "translateX(-50%)",
            height: 500,
            width: 500,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(180,120,60,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: 350,
            width: 350,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(210,160,80,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Loader content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 2rem",
          }}
        >
          <p
            style={{
              marginBottom: 20,
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.6em",
              color: "rgba(120,70,20,0.55)",
              animation: "fadeUp 0.8s ease forwards",
            }}
          >
            Morocco Tours & Travels
          </p>

          <h1
            style={{
              textAlign: "center",
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#1a0f00",
              animation: "slideUp 0.9s ease both",
            }}
          >
            MOROCCO
          </h1>

          <p
            style={{
              marginTop: 10,
              fontStyle: "italic",
              color: "rgba(100,55,10,0.5)",
              animation: "slideUp 0.9s ease 0.2s both",
            }}
          >
            crafted for those who seek more.
          </p>

          {/* Lottie */}
          <div style={{ width: 350, marginTop: 30 }}>
            <DotLottieReact
              src="https://lottie.host/10e0e2d6-a405-46e2-873f-96fb88c69eb8/mjr77ZsESr.lottie"
              loop
              autoplay
            />
          </div>

          <p
            style={{
              marginTop: 20,
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "rgba(120,70,20,0.45)",
            }}
          >
            Preparing your journey...
          </p>
        </div>
      </div>

      {/* SITE (smooth fade in) */}
      <div
        style={{
          opacity: showSite ? 1 : 0,
          transform: showSite ? "translateY(0px)" : "translateY(20px)",
          filter: showSite ? "blur(0px)" : "blur(8px)",
          transition: "all 1s ease",
        }}
      >
        <Nav />
        <Hero />
        <Destinations />
        <Packages />
        <About />
        <Testimonials />
        <Activities />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
