# Gaurav Kharate – Portfolio (React + Vite + Bootstrap)

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Add your links
Open `src/data.js`:
- `GITHUB_URL`: your GitHub profile link.
- Resume: already wired to `public/Gaurav_Kharate_Resume.pdf`. Replace that file (same name) to update it.
- `WEB3FORMS_KEY`: free key from https://web3forms.com (enter gauravkharate.dev@gmail.com). With it, the contact form really sends email to your inbox; without it, the form falls back to opening the visitor's mail app.

## Edit content
All text (skills, experience, projects) lives in `src/data.js`. Components are in `src/components/`.

## Deploy
Push to GitHub and import the repo on Vercel or Netlify (build: `npm run build`, output: `dist`).
