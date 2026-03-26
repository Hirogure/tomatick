# 🍅 Tomatick

**A free Pomodoro timer web app for overseas users — no sign-up required.**

🔗 **Demo**: [https://tomatick.app](https://tomatick.app)

---

## Overview

Tomatick is a clean, minimal Pomodoro timer targeting English-speaking students and remote workers.
Built solo by a Japanese freelance web director using Next.js and Vercel, with zero backend cost.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Storage | localStorage (no backend, no DB) |
| Hosting | Vercel (free tier) |
| Domain | tomatick.app |

---

## Features

- ⏱ **Pomodoro cycles** — 25 min focus / 5 min short break / 15 min long break
- 🎨 **Visual mode switching** — background color changes per mode
- ✅ **Task list** — add, complete, and persist tasks via localStorage
- ⌨️ **Keyboard shortcut** — Space to start/pause
- 🔔 **Desktop notifications** — browser notification on cycle end
- ⚙️ **Customizable durations** — adjust timer lengths in settings
- 📱 **Responsive** — works on mobile and desktop
- 🌙 **No sign-up** — fully client-side, zero friction

---

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── privacy/
│   └── terms/
├── components/       # UI components
│   ├── Timer.tsx
│   ├── TimerDisplay.tsx
│   ├── Controls.tsx
│   ├── TaskList.tsx
│   ├── TaskItem.tsx
│   ├── ModeSelector.tsx
│   ├── Settings.tsx
│   └── ...
├── contexts/         # React Context (Timer, Theme, Pro)
├── hooks/            # Custom hooks (useTimer, useLocalStorage)
└── lib/              # Types and constants
```

---

## Getting Started

```bash
git clone https://github.com/hiroakikanemitsu/tomatick.git
cd tomatick
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Revenue Model

- **Phase 1**: Google AdSense (in review)
- **Phase 2**: Pro plan ($1.99/month) — session stats, custom themes, cloud sync

---

## Author

Built by a freelance web director with 15 years of experience.
- X: [@hirowisdom98444](https://x.com/hirowisdom98444)
