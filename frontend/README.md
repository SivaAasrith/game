# Gaming Portal Frontend (Vite + React)

This is a simple React (Vite) frontend wired to the Spring Boot backend.

## Prerequisites
- Node.js 18+
- Backend running at `http://localhost:9090` (see `application.properties`)

## Install
```
cd frontend
npm install
```

## Run (dev)
```
npm run dev
```
- Opens on `http://localhost:5173`
- API requests to `/api/**` are proxied to `http://localhost:9090`

## Build
```
npm run build
npm run preview
```

## Pages
- `/login` — Calls `POST /api/auth/login`
- `/signup` — Calls `POST /api/auth/signup`
- `/dashboard` — Displays stored user details and basic stats

## Notes
- This demo stores the authenticated user in `sessionStorage`.
- CORS: backend already allows `@CrossOrigin(origins = "*")`.
