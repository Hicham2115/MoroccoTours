# Morocco Tours — Next.js

A premium tourism agency website built with Next.js 14 (App Router).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
├── layout.js             # Root layout + fonts
├── page.js               # Home page (composes all sections)
├── globals.css           # Design system + all styles
├── data.js               # Site data (destinations, packages, testimonials)
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── Destinations.jsx
    ├── Packages.jsx
    ├── About.jsx
    ├── Testimonials.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── Icons.jsx
public/
└── logo.png              # Brand logo
```

## Brand

- Rich Gold `#C5A029` · Deep Black `#0B0B0B` · Desert Dusk `#827053`
- Sand `#DFD5C4` · Off‑White `#F8F5F1`
- Cormorant Garamond (serif headlines) + Inter (sans body)

## Build

```bash
npm run build
npm start
```
