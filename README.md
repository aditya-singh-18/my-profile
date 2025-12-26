## Junior Developer Portfolio

A modern, responsive, single-page developer portfolio built with HTML, CSS (Bootstrap + custom styles), and a small amount of vanilla JavaScript.

### Features
- **Responsive layout**: Optimized for mobile, tablet, and desktop.
- **Polished UI**: Bootstrap 5, Bootstrap Icons, and a custom design system (colors, spacing, typography, shadows).
- **Sections**: Hero, Work Experience, Skills, Projects, Education, Certificates, and Contact.
- **Interactions**: Tooltips and on-scroll reveal animations; animated skill bars via `IntersectionObserver`.
- **Zero build**: Static site—no bundlers or frameworks required.

### File Structure
```
index.html
style.css
script.js
images/
documentation/
  deployment-guide.html
```

### Getting Started (Local)
1. Clone or download this repository.
2. Open `index.html` directly in your browser, or serve locally for best results:
   - With Python 3:
     ```bash
     python -m http.server 5500
     ```
     Then visit `http://localhost:5500/`.
   - With Node (serve):
     ```bash
     npx serve . -l 5500 --single
     ```

### Customize
- Update profile details, links, and copy in `index.html` (name, bio, social URLs, projects, etc.).
- Adjust theme tokens, spacing, and section styles in `style.css`.
- Enhance or modify animations and behaviors in `script.js`.
- Replace images in `images/` (keep paths consistent).

### Deployment
This is a static site. You can deploy on any static host. See `documentation/deployment-guide.html` for detailed, step-by-step instructions for Vercel and Netlify. Quick notes:
- **Vercel**: Import your Git repo → Framework: Other → Build Command: (empty) → Output Directory: `/` → Deploy.
- **Netlify**: Import via Git → Build command: (empty) → Publish directory: `/` → Deploy. Or use Netlify Drop for drag-and-drop.

### Accessibility & Performance
- Uses semantic HTML sections and high-contrast color accents.
- Deferred/lean JS and CSS variables for theming.

### Browser Support
Modern evergreen browsers (Chromium, Firefox, Safari). IntersectionObserver is widely supported; consider a polyfill only for very old browsers.

### License
This project is licensed under the MIT License. See `LICENSE` for details.

### Credits
- Bootstrap 5 and Bootstrap Icons via CDN.
- Google Fonts (Anta, DM Sans).

