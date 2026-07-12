# Château des Roches — Website

## 📁 Folder Structure

```
chateau-des-roches/
├── index.html          ← Main website file
├── css/
│   ├── style.css       ← All layout & component styles
│   └── animations.css  ← Keyframes & scroll-reveal animations
├── js/
│   └── main.js         ← Cursor, nav, scroll effects, form
├── images/
│   └── Chateau_des_Roches_Bottle.PNG   ← ⚠️ ADD THIS FILE (see below)
└── README.md
```

---

## ⚠️ IMPORTANT: Add the Bottle Image

The bottle photo is **not included** in this download (it was your upload).

1. Locate the file: **`Chateau_des_Roches_Bottle.PNG`**
2. Copy it into the **`images/`** folder inside this project

The image is referenced in two places in `index.html`:
```html
<img src="images/Chateau_des_Roches_Bottle.PNG" ...>
```

---

## 🚀 How to View Locally

Simply open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).  
No build tools or server required.

---

## 🌐 How to Host

### Option A — Simple Static Hosting (Recommended)

Upload the entire `chateau-des-roches/` folder to any of these free/paid hosts:

| Host | How |
|------|-----|
| **Netlify** | Drag & drop the folder at netlify.com/drop |
| **Vercel** | `vercel deploy` via CLI, or import from GitHub |
| **GitHub Pages** | Push to a repo, enable Pages in Settings |
| **Cloudflare Pages** | Connect repo or drag & drop |

### Option B — Traditional Web Hosting (cPanel/FTP)

1. Connect via FTP (FileZilla, Cyberduck, etc.)
2. Upload the entire contents of this folder to your `public_html/` directory
3. Make sure `index.html` is at the root level

### Option C — Custom Domain

After hosting, point your domain's DNS A record (or CNAME) to the hosting provider's IP/URL.

---

## 📧 Connecting the Contact Form

Currently the form captures the email and logs it to the console.  
To receive real submissions, choose one of:

**Formspree (easiest — no backend needed):**
1. Create a free account at formspree.io
2. Replace the form in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Remove the `id="contactForm"` and the JS form handler

**Mailchimp:**
- Replace the form action with your Mailchimp embedded form URL

**Custom backend:**
- Update the `fetch()` call in `js/main.js` to POST to your API endpoint

---

## 🎨 Customisation

All colours are defined as CSS variables at the top of `css/style.css`:

```css
:root {
  --orange:     #E8540A;   /* Hermès orange — primary accent */
  --cream:      #FAF6F0;   /* Main text colour */
  --charcoal:   #1A1410;   /* Card / section backgrounds */
  --dark:       #0D0A07;   /* Page background */
  --gold:       #C9A96E;   /* Accent details */
}
```

Fonts load from Google Fonts (requires internet connection).  
To use locally, download the fonts and update the `@import` in `index.html`.

---

## 🌍 SEO & Social

Update the meta tags in `<head>` of `index.html`:
- `<meta name="description" ...>` — page description for Google
- `<meta property="og:image" ...>` — image shown when shared on social media

---

## ✅ Browser Support

- Chrome 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Edge 90+ ✓
- Mobile Safari / Chrome ✓

---

*Château des Roches — 137 Rue des Roches, Vaudelnay, France 49260*
