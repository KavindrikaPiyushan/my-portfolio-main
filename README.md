<div align="center">

# Kavindrika Piyushan — Portfolio

Responsive single-page portfolio built with React 18, Tailwind CSS utilities, and custom CSS. It showcases professional summary, services, featured projects, resume highlights, achievements, and a contact form powered by EmailJS.

</div>

## Features
- Hero with typewriter intro, social links, and CV download
- Services and skills sections with icon grid
- Projects grid using reusable `ProjectCard` components and hosted images
- Resume section covering skills, education, and extracurricular activities
- Achievements strip and contact form with email delivery (EmailJS) and toast notifications
- Smooth scrolling navigation (react-scroll) and responsive styling

## Tech Stack
- React 18 (Create React App)
- Tailwind CSS utilities + custom CSS modules
- EmailJS for contact form delivery
- React Toastify for notifications
- Font Awesome / React Icons for iconography

## Getting Started
Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm start
```

The app runs at http://localhost:3000 with hot reload enabled.

### Scripts
- `npm start` — run locally in development mode
- `npm run build` — production build to `build/`
- `npm test` — CRA test runner (Jest + Testing Library)
- `npm run eject` — expose CRA config (irreversible)

## Environment / Configuration
EmailJS is used in the contact form (`src/pages/contactme.jsx`). For production, supply your own keys via env or config and avoid committing secrets. The placeholders in the code are:
- `service_dbgi3xa` (service ID)
- `template_rowivfq` (template ID)
- `publicKey` (`WKPKSy43zkRoGBuKU` in code)

If you rotate these, update the component accordingly or load them from environment variables.

## Project Structure
```
public/
	index.html
	assets/            # static assets
src/
	index.js           # app bootstrap
	App.js             # routes + section anchors
	components/        # navbar, project cards, skills, education, volunteering
	pages/             # home, services, projects, resume, contact, achievements, work
	style/             # section-specific CSS
	assets/            # logos, illustrations, PDFs
```

## Deployment
- Build: `npm run build`
- Netlify/Vercel: point to `npm run build`; publish directory `build/`

## License
MIT — see [LICENSE](LICENSE).
