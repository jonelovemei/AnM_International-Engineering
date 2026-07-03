# A&M International Engineering PTE LTD

A&M International Engineering is a static website that presents the company’s professional engineering solutions, product and service offerings, project capabilities, support resources, and contact channels. The site is implemented with plain HTML, CSS, and vanilla JavaScript, with shared header/footer components and responsive page layouts.

## Project Overview

This website demonstrates A&M International Engineering’s service portfolio for industrial automation, metering systems, digital platforms, and end-to-end engineering solutions. It includes:

- **Home**: company introduction and high-level capabilities
- **About Us**: business focus, technical expertise, and industry standards
- **Solutions**: detailed solution categories such as supply chain optimization, asset operations, and digital transformation
- **Products & Services**: product and service highlights with practical engineering applications
- **Projects**: featured project examples and solution use cases
- **Support**: customer support gateway and service contact links
- **Library**: resource and documentation access hub
- **Contact**: direct contact information with WhatsApp/WeChat QR integration and feedback form

## Key Features

- Shared header and footer injection using `fetch()` for consistent navigation across pages
- Site search component with local page search and external fallback query support
- Floating WhatsApp contact button using `whatsapp-float.js`
- Responsive layouts for desktop and mobile viewing
- QR code integration for WeChat and WhatsApp contact
- Clear page structure and professional business presentation

## File Structure

- `index.html` — main landing page
- `about.html` — company profile and capability summary
- `Solutions.html` — solution descriptions and value propositions
- `services.html` — product and service portfolio
- `projects.html` — project examples and case highlights
- `Support.html` — support navigation and service access
- `Libary.html` — library and resources
- `contact.html` — contact details, QR code, and feedback form
- `header.html` / `fooder.html` — shared page fragments
- `style.css` — global and page-specific styling
- `whatsapp-float.js` — floating WhatsApp contact button
- `search.js` — search page behavior

## How to Use

1. Open any `.html` file in a browser.
2. Ensure `Image/`, `style.css`, and script files are in the same project folder.
3. Use the navigation menu to view each section.
4. On the contact page, scan the QR code or click the floating WhatsApp button to connect.

## Deployment

This repository is suitable for GitHub Pages or any static file hosting service:

- Push the repository to GitHub
- Enable GitHub Pages on the `main` branch
- The site becomes available as a static website

## Notes

- Keep the `Image/` folder in place, since the website loads multiple image assets from that directory.
- If you update `header.html` or `footer.html`, refresh each page in the browser to clear cache and load the latest shared content.
- The feedback form is managed via EmailJS and requires valid service configuration.

## Contact

For any repository questions or website updates, use the contact page on the site or email `anm_info@anmie.com.sg`.

