# Incident Dashboard (Coding Challenge)

This project is a React-based incident management dashboard that fetches incident data from a fake API, sorts it by priority and datetime, and displays it in a responsive UI (table on desktop, list on mobile).

---

## Tech Stack

- React 18
- TypeScript
- CSS Modules
- Vite (for dev server and build)
- Responsive Design (Table + List views)

---

## Features

- Fetches incident data by location
- Filters out duplicate incidents by `id`
- Sorts by:
  - Priority (ascending: High → Low)
  - DateTime (descending: Newest first)
- Renders as a **table** for screen width >600px
- Renders as a **list** for screen width <=600px

---

## Installation

```bash
git clone https://github.com/jayagajjar/honeywell.git
cd honeywell
npm install
npm run dev
```

## Deployed at

https://honeywell-ashy.vercel.app/
