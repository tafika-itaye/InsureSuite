# 🛡️ DeviceShield — National Stolen Device Register

A premium, fully responsive commercial web platform for reporting, tracking, and verifying stolen electronic devices.

---

## 🔐 Demo Credentials

| Field    | Value                    |
|----------|--------------------------|
| Email    | `demo@devicesield.mw`    |
| Password | `Demo@1234`              |

These are also displayed visually on the login screen in the **Demo Access Panel** — impossible to miss.

---

## 📁 File Structure

```
stolendeviceregister/
├── index.html              # Homepage
├── login.html              # Login with embedded demo credentials
├── css/
│   ├── main.css            # Full site styles
│   └── dashboard.css       # ERP dashboard styles
├── js/
│   ├── main.js             # Public site interactions
│   ├── auth.js             # Login logic + autofill
│   └── dashboard.js        # Sidebar toggle
└── pages/
    ├── dashboard.html      # Main ERP dashboard
    ├── check.html          # IMEI / serial number check
    ├── register-device.html # 4-step stolen device report form
    ├── about.html          # About page
    ├── contact.html        # Contact form + info
    └── faq.html            # FAQ accordion
```

---

## 🚀 Deployment (GitHub Pages)

1. Push all files to your GitHub repo root (or `/docs` folder)
2. Enable GitHub Pages in Settings → Pages → Source: main branch
3. Visit `https://[username].github.io/[repo-name]/`

No build process required — pure HTML/CSS/JS.

---

## ✅ Features Delivered

### Public Website
- [x] Premium homepage with hero, stats, features, CTAs
- [x] IMEI quick check on homepage
- [x] About, Contact, FAQ pages
- [x] Fully responsive — mobile, tablet, desktop
- [x] Fixed navbar with mobile hamburger menu

### Login
- [x] Split-screen premium login layout
- [x] **Visible Demo Access Panel** with credentials
- [x] One-click "Use Demo Credentials" autofill
- [x] Role-based portal links (Citizen, Police, Admin, Enterprise)
- [x] Login validates against demo credentials

### ERP Dashboard
- [x] Sidebar navigation with all modules
- [x] KPI cards (devices, cases, recoveries, checks)
- [x] Recent cases table with status badges
- [x] Quick actions panel
- [x] Live national registry activity feed
- [x] National statistics panel
- [x] Mobile sidebar toggle

### Device Check
- [x] IMEI/serial lookup form
- [x] Demo result logic (IMEI starting with 999 = stolen)
- [x] Educational how-to cards

### Report Stolen
- [x] 4-step multi-step form
- [x] Device info → Incident → Contact → Review
- [x] File upload area
- [x] Case reference confirmation screen

---

## 🗺️ Roadmap

### Phase 1 — Frontend Demo (Current)
- All pages above, static demo data, GitHub Pages compatible

### Phase 2 — Backend Integration
- Real IMEI database API
- User authentication (JWT/OAuth)
- Database for cases, devices, users
- SMS/email notifications (Twilio, SendGrid)
- Admin management panel

### Phase 3 — Advanced Platform
- Agency bulk verification API
- Telecom operator integration
- Analytics and theft mapping
- Mobile app (React Native or PWA)
- International expansion

---

## 🔧 Backend Handoff Notes

| Feature | Current | Needs |
|---------|---------|-------|
| IMEI Check | Mock demo logic | REST API → real registry DB |
| Login Auth | Static credential match | JWT + user DB |
| Report Submission | Frontend success simulation | POST to backend + DB + SMS trigger |
| Dashboard Data | Hardcoded demo data | GET API endpoints |
| File Uploads | UI only | S3/file storage integration |
| Notifications | None | Email/SMS service |
