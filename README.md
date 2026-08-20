# THE FOX — ctOS Portfolio

An immersive cyberpunk personal portfolio inspired by **Watch Dogs 1** ctOS aesthetic and the [Interface In Game Watch Dogs page](https://interfaceingame.com/games/watch-dogs/).

## Features

- Full-screen ctOS loading screen with progress bar
- Glitch text hero with typing effect
- Scroll-triggered animations (Framer Motion)
- Citizen profile / statistics panels
- Project cards with VIDEO / LOADING badges
- Interactive skill tree menu
- Holographic timeline
- Screenshot gallery grid
- Contact form with DOWNLOAD / LIKE buttons
- Scroll-triggered notification pop-ups
- Web Audio API UI sounds (hacking beeps, notifications)
- Toggleable ambient ctOS drone
- Wire frame debug mode
- Scanlines, grid backgrounds, X-pattern overlays

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

Edit `src/lib/data.ts` to update profile info, projects, skills, experience, and gallery items.

Replace placeholder gradients in gallery/project cards with your own images in `public/`.

## Color Palette

| Color | Hex |
|-------|-----|
| Deep Black | `#0a0a0a` |
| ctOS Blue | `#00b0ff` |
| Bright Blue | `#00d4ff` |
| Warning Yellow | `#ffd000` |
| Alt Yellow | `#ffcc00` |
