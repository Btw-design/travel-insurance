# Travel Insurance Info

A free, IRDAI-compliant informational website about travel insurance for Indian travellers. Built with vanilla HTML, CSS, and JavaScript. Designed for GitHub Pages hosting.

## Project Structure

```
travel-insurance/
│
├── index.html              # Home page
├── about.html              # About us
├── blog.html               # Blog listing (7 articles)
├── faq.html                # FAQ (15 questions)
├── contact.html            # Contact + Grievance info
├── privacy-policy.html     # DPDP Act 2023 compliant
├── terms-of-use.html       # Terms of use
├── disclaimer.html         # Full disclaimer
├── cookie-policy.html      # Cookie policy
├── 404.html                # Custom 404 page
│
├── blog/                   # Blog articles (flat HTML files)
│   ├── what-is-travel-insurance.html
│   ├── understanding-travel-insurance-coverage-types.html
│   ├── how-to-file-a-travel-insurance-claim.html
│   ├── irdai-guidelines-for-travel-insurance.html
│   ├── medical-coverage-in-travel-insurance.html
│   ├── travel-insurance-for-senior-citizens.html
│   └── common-exclusions-in-travel-insurance.html
│
├── css/
│   └── style.css           # All stylesheets (organized by section)
│
├── js/
│   └── main.js             # Hamburger menu, FAQ accordion
│
├── robots.txt              # Crawl instructions
├── sitemap.xml             # 16 URLs with priorities
│
├── PAGE-TEMPLATE.html      # Template for creating new pages
├── BLOG-TEMPLATE.html      # Template for creating new blog articles
├── README.md               # This file
└── .gitignore
```

## Design System

| Token | Value | Usage |
|---|---|---|
| Deep Blue | `#1E3A8A` | Top bar, hero gradients |
| Royal Blue | `#2563EB` | Links, buttons, accents |
| Teal Green | `#0F766E` | Note boxes, hero gradients |
| Light Green | `#22C55E` | Reserved for future use |
| Off White | `#F8FAFC` | Page background |
| Light Gray | `#E2E8F0` | Borders, dividers |
| Orange | `#F97316` | Warning/disclaimer boxes |
| Dark Text | `#0F172A` | Headings, body text |

- **Font:** Inter (Google Fonts)
- **Icons:** Unicode/emoji characters (no icon library dependency)
- **Images:** Unsplash hotlinked images (16:9 aspect ratio, 740px width)

## How to Edit Pages

### Editing Existing Content

1. Open any `.html` file in a text editor.
2. Find the content section (each page has a hero + content section).
3. Edit the text between the HTML tags.
4. Save the file and open it in a browser to preview.

### Adding a New Page

1. Copy `PAGE-TEMPLATE.html` and rename it.
2. Update the `<title>` and `<meta name="description">`.
3. Add `class="active"` to the corresponding nav link.
4. Replace the hero and content sections with your content.
5. Update the privacy/legal pages links in the footer if needed.

### Adding a New Blog Article

1. Copy `BLOG-TEMPLATE.html` to `blog/your-article-slug.html`.
2. Update `<title>` and `<meta name="description">`.
3. Update breadcrumb, tag, title, and reading time in the hero.
4. Replace the featured image with an appropriate Unsplash photo.
5. Write your article content in the `.blog-article-body` div.
6. Update related articles links at the bottom.
7. Add a card for the new article in `blog.html`.
8. Update `sitemap.xml` with the new URL.

### Important: Path Rules

| File Location | CSS/JS Link | Internal Links (Home, About, etc.) |
|---|---|---|
| Root (`*.html`) | `css/style.css` | `index.html` |
| Blog (`blog/*.html`) | `../css/style.css` | `../index.html` |

## Government Links Used

| Resource | URL | Notes |
|---|---|---|
| IRDAI | https://irdai.gov.in/ | Insurance regulator |
| IRDAI IGMS | https://www.igmsirdai.online/ | Grievance portal |
| Insurance Ombudsman | https://www.cioins.co.in/ | Dispute resolution |
| Bima Bharosa | https://policyholder.gov.in/integrated-grievance-management-system | Consumer helpline |

Only official government links are used. No affiliate or commercial links.

## Color Variables

All colors, shadows, and sizes are defined as CSS custom properties in `:root`. To change the theme, edit the variables at the top of `css/style.css`:

```css
:root {
  --deep-blue: #1E3A8A;
  --royal-blue: #2563EB;
  /* ... */
}
```

## Deployment

This site is designed for GitHub Pages:

1. Push the entire project to a GitHub repository named `travel-insurance`.
2. Enable GitHub Pages in the repo settings (deploy from `main` branch, root folder).
3. The site will be available at `https://your-org.github.io/travel-insurance/`.

No build step required — all files are static HTML.

## Compliance Notes

- IRDAI-compliant informational website — does not sell or recommend insurance.
- DPDP Act 2023 compliant privacy policy.
- All external links point only to official government/regulatory websites.
- Clear disclaimers on every page stating informational purpose only.
