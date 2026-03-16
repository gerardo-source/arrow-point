

## Plan: Replicate Arrowpoint Landing Page

Based on the PDF, this is a fintech/startup consulting landing page for "Arrowpoint" — a Finance as a Service company. I'll replicate the full layout with placeholder containers for images/logos.

### Design System Updates
- **Primary color**: Blue (#0066FF / similar bright blue)
- **Background**: White with light gray sections
- **Font**: Clean sans-serif (Inter)
- **Accent**: Blue gradient for CTA section near footer

### Page Sections (top to bottom)

1. **Top Banner** — Blue bar with promotional text and close button
2. **Navbar** — Logo placeholder (left), nav links (¿Por qué Arrowpoint?, Servicios, Casos de éxito), CTA button "Contáctanos" (right)
3. **Hero** — Left: badge "Expertos en crecimiento financiero", headline, subtitle, two CTA buttons. Right: image placeholder container
4. **Logos Bar** — "Equipos que crecen con Arrowpoint" + row of logo placeholders
5. **Quiénes Somos** — Two-column card with left title and right description text, blue accent, "Ver más" link
6. **Nuestros Servicios** — Section title + two service cards (Finance as a Service, NH by Arrowpoint) with icon placeholders and "Ver más" links
7. **¿Por qué Nosotros?** — Left column with title + CTA, right column with 5 bullet points (blue dots)
8. **Un modelo que crece contigo** — Centered text + two cards (PyMES, Startups) with icon placeholders
9. **Testimonials** — "Lo que dicen los founders..." + 3 testimonial cards with quote marks, carousel arrows
10. **CTA / Contact Section** — Blue gradient background, left text, right form with inputs (Nombre, Correo, Teléfono, Servicio de interés, Mensaje) + "Enviar" button
11. **Footer** — Logo placeholder, columns (Compañía, Servicios), social links, copyright, legal links

### Files to Create/Modify
- **src/index.css** — Update CSS variables for the blue color scheme
- **src/pages/Index.tsx** — Complete landing page with all sections
- **src/components/landing/** — Section components:
  - `TopBanner.tsx`
  - `Navbar.tsx`
  - `HeroSection.tsx`
  - `LogosBar.tsx`
  - `AboutSection.tsx`
  - `ServicesSection.tsx`
  - `WhyUsSection.tsx`
  - `GrowthModelSection.tsx`
  - `TestimonialsSection.tsx`
  - `ContactSection.tsx`
  - `Footer.tsx`

### Technical Notes
- All image/logo/graphic spots will be gray placeholder containers with dashed borders and descriptive labels
- Fully responsive using Tailwind breakpoints
- Contact form will be visual only (no backend)
- Testimonials carousel using state for navigation
- Spanish content preserved exactly as in the PDF

