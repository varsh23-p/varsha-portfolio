# Varsha Patil — Portfolio

Personal portfolio built with **React**, **Vite**, **Framer Motion** and **React Router**.

## Features
- Rotating-roles typewriter intro, page transitions, scroll progress bar and back-to-top button
- Filterable projects (Data & BI, Web, Mobile, Machine Learning)
- Interactive skills network (D3), gallery, certificates, blog and resume pages
- Contact form powered by EmailJS (with sending state and validation)

## Run locally
```bash
npm install
cp .env.example .env   # then fill in your EmailJS values
npm run dev            # http://localhost:5173
```

## Build
```bash
npm run build
npm run preview
```

## Deploy on Vercel
1. Push this repo to GitHub (`.env` and `dist` are git-ignored).
2. Import the repo at vercel.com → Framework Preset: **Vite**.
3. Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` under Environment Variables.
4. Deploy. `vercel.json` makes page refreshes on routes like `/projects` work.
