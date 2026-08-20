# EventHub – College Event Management System

A clean, minimalist web application for managing college events.  
Built with pure HTML, CSS, and vanilla JavaScript on the frontend, with a ready-to-use MongoDB + Express backend.

**Aesthetic**: Cream / off-white backgrounds + dark jungle green accents (inspired by Starbucks).  
**Style**: Minimal whitespace, soft shadows, gentle scroll animations, and subtle botanical (flora) details.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure (Blueprint)](#file-structure-blueprint)
- [Page Connections & Flow](#page-connections--flow)
- [Color System](#color-system)
- [Animation & Scroll Order](#animation--scroll-order)
- [How Data Works](#how-data-works)
- [Getting Started](#getting-started)
- [Running the Backend (MongoDB)](#running-the-backend-mongodb)
- [Switching from localStorage to MongoDB](#switching-from-localstorage-to-mongodb)
- [Deployment on Render](#deployment-on-render)
- [Demo Login](#demo-login)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview

EventHub lets students and organizers:

- Browse upcoming and ongoing college events
- Filter events by category
- Create, edit, and delete events (admin/manage view)
- Enjoy a calm, modern interface with smooth animations

The project is fully functional with **localStorage** out of the box.  
A complete **MongoDB + Express** backend is included so you can switch to a real database whenever you want.

---

## Features

| Feature                        | Description                                      |
|--------------------------------|--------------------------------------------------|
| Landing page                   | Hero, features, animated stats, scroll bridge    |
| Login                          | Simple auth (demo mode)                          |
| Events listing                 | Filterable cards + details view                  |
| About                          | Mission, capabilities, design principles         |
| Manage dashboard               | Full CRUD (Create / Read / Update / Delete)      |
| Scroll animations              | Fade-up, stagger, counters, floating leaves      |
| Responsive design              | Works on mobile, tablet, and desktop             |
| Toast notifications            | Success / error feedback                         |
| Minimal flora accents          | Soft leaf SVGs on landing & login                |
| localStorage persistence       | Events survive page reloads                      |
| MongoDB-ready backend          | Express + Mongoose REST API                      |

---

## Tech Stack

**Frontend**
- HTML5
- CSS3 (custom properties, Flexbox, Grid, animations)
- Vanilla JavaScript (ES6+)
- Intersection Observer API (scroll animations)
- localStorage (temporary data store)

**Backend** (optional / ready)
- Node.js + Express
- MongoDB + Mongoose
- CORS, dotenv

**Deployment**
- Frontend → any static host (Render Static Site, Netlify, Vercel, GitHub Pages)
- Backend → Render Web Service

---

## File Structure (Blueprint)

```
eventhub/
│
├── index.html                 # Landing page (entry point)
├── login.html                 # Login page
├── events.html                # Public events listing (content)
├── about.html                 # About page
├── manage.html                # Create / edit / manage events
│
├── css/
│   └── styles.css             # All styles (colors, layout, animations)
│
├── js/
│   └── script.js              # Animations, filters, CRUD, login, toasts
│
├── backend/                   # MongoDB + Express (optional)
│   ├── server.js              # Entry point
│   ├── models/
│   │   └── Event.js           # Mongoose schema
│   ├── routes/
│   │   └── events.js          # REST routes
│   ├── package.json
│   └── .env.example           # Environment variables template
│
├── assets/                    # Future images / icons (optional)
│
├── BLUEPRINT.md               # Detailed structure + connection map
├── README.md                  # This file
├── .gitignore
└── package.json               # Root (optional scripts)
```

### Quick explanation of each major file

| File / Folder       | Purpose |
|---------------------|---------|
| `index.html`        | Landing page with hero, scroll-bridge, features, stats |
| `login.html`        | Authentication form → redirects to manage on success |
| `events.html`       | Public list of events with category filters |
| `about.html`        | Project info, mission, design philosophy |
| `manage.html`       | Dashboard with Create/Edit form + event list |
| `css/styles.css`    | Complete design system (cream + jungle green) |
| `js/script.js`      | All interactivity: animations, CRUD, filters, login |
| `backend/`          | Full REST API ready for MongoDB |
| `BLUEPRINT.md`      | Visual map of how pages link to each other |

---

## Page Connections & Flow

```
index.html (Landing)
    │
    ├── Nav → events.html / about.html / manage.html / login.html
    │
    ├── Scroll down → “Scroll Bridge” section
    │       ├── “Go to Login” → login.html
    │       └── Continue scrolling → Features → Stats → CTA
    │
login.html
    └── Successful login → manage.html

manage.html
    ├── Create / Edit / Delete events
    └── Data saved → localStorage (or MongoDB later)
            │
            └── Appears on events.html
```

Every page shares the same navigation bar and footer, so users can move freely between all five pages.

---

## Color System

| Role                     | Hex Value   | Usage                          |
|--------------------------|-------------|--------------------------------|
| Background               | `#FAF7F2`   | Main page background           |
| Card / Surface           | `#FFFFFF` / `#F8F4E8` | Cards, forms, modals     |
| Primary (Jungle Green)   | `#1B4332`   | Buttons, headings, accents     |
| Hover / Secondary        | `#2D6A4F`   | Hover states                   |
| Soft Green               | `#40916C`   | Secondary accents              |
| Soft Badge               | `#D8F3DC`   | Category badges                |
| Deep / Footer            | `#081C15`   | Footer background              |
| Text Primary             | `#1B4332`   | Main text                      |
| Text Secondary           | `#52796F`   | Muted text                     |

---

## Animation & Scroll Order (Landing Page)

1. **Hero** loads with fade-up + floating leaf SVGs  
2. User scrolls → **dark green scroll-bridge** section appears  
3. From the bridge the user can:
   - Click **Go to Login** → goes to `login.html`
   - Keep scrolling → Features section
4. **Feature cards** stagger in one after another  
5. **Stats counters** animate when they enter the viewport  
6. Final CTA + footer  

All scroll animations use the Intersection Observer API for performance.

---

## How Data Works

### Current (Default) Mode – localStorage
- Events are stored in the browser under the key `eventhub_events`
- Create / Edit / Delete on the Manage page immediately updates the Events page
- Data persists across page reloads (until the user clears browser data)

### Production Mode – MongoDB
A complete backend is included in the `/backend` folder.  
You can switch the frontend from localStorage to real API calls with only a few lines of code (documented in the backend folder and in the comments inside `script.js`).

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/eventhub.git
cd eventhub
```

### 2. Open the frontend
Simply open `index.html` in your browser  
**or** use a local server:

```bash
# Using VS Code Live Server, or:
npx serve .
```

### 3. Explore
- Landing → scroll to see the full animation flow  
- Login with any email + password (min 4 characters)  
- Go to Manage and create a few events  
- Visit Events page to see them appear  

---

## Running the Backend (MongoDB)

```bash
cd backend
cp .env.example .env
# Edit .env and add your MongoDB connection string
npm install
node server.js
```

The API will be available at `http://localhost:5000/api/events`.

### Available Endpoints
| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | `/api/events`         | Get all events       |
| POST   | `/api/events`         | Create new event     |
| PUT    | `/api/events/:id`     | Update an event      |
| DELETE | `/api/events/:id`     | Delete an event      |

---

## Switching from localStorage to MongoDB

Inside `js/script.js` you will find clear comments showing how to replace the localStorage helper functions with `fetch()` calls to the backend API.  
Once the backend is running, change the data source flag and the app will use the real database.

---

## Deployment on Render

### Frontend (Static Site)
1. Push the repository to GitHub  
2. On Render → New → Static Site  
3. Connect the repo  
4. Build command: leave empty (or `echo "static"`)  
5. Publish directory: `.` (root)  

### Backend (Web Service)
1. On Render → New → Web Service  
2. Connect the same repo  
3. Root directory: `backend`  
4. Build command: `npm install`  
5. Start command: `node server.js`  
6. Add environment variable: `MONGODB_URI` = your MongoDB Atlas connection string  

---

## Demo Login

- **Email**: any valid-looking email (e.g. `admin@college.edu`)  
- **Password**: any string with at least 4 characters  

After successful login you are redirected to the Manage dashboard.

---

## Future Improvements

- Real user authentication (JWT + roles)
- Image upload for events
- Calendar view
- Email / notification system
- Admin vs Student roles
- Dark mode toggle
- PWA support

---
