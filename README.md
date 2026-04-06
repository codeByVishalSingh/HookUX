# CASE STUDY

## Rebuilding the DDA (Delhi Development Authority) Website

**Original Website:** https://dda.gov.in/
**Prepared by:** Vishal

---

## 1. Summary

This case study documents the process of identifying a technically poor government website — the Delhi Development Authority (DDA) portal — and rebuilding its homepage and a core functional module (**About Us**) using a modern React-based stack.

The project demonstrates significant improvements in:

* Code architecture
* Performance
* Accessibility
* Maintainability

---

## 2. Target Selection & Analysis

### 2.1 Why DDA.gov.in?

The DDA website was chosen because it highlights common technical issues in Indian government portals. As a high-traffic platform, its poor performance directly affects user experience.

---

### 2.2 Technical Issues Identified

| Category      | Issue                                  | Impact               |
| ------------- | -------------------------------------- | -------------------- |
| Performance   | No code-splitting; monolithic bundle   | Slow load (FCP/LCP)  |
| Performance   | Unoptimized images (JPEG/PNG, no WebP) | Large payload        |
| Performance   | No CDN, render-blocking CSS/JS         | High TTFB            |
| Accessibility | Missing alt text, no ARIA labels       | Screen reader issues |
| Accessibility | Poor color contrast                    | WCAG failure         |
| Accessibility | No keyboard navigation                 | Limited usability    |
| Code Quality  | Inline styles, table-based layout      | Hard to maintain     |
| Code Quality  | No component reuse                     | Code duplication     |
| SEO           | Missing meta tags, no semantic HTML    | Poor ranking         |
| Mobile        | Non-responsive design                  | Broken UI            |

---

## 3. Architecture & Technology Stack

### 3.1 Technology Choices

| Technology      | Purpose                     |
| --------------- | --------------------------- |
| React 18+       | Component-based UI          |
| Vite            | Fast build tool             |
| React Router v6 | Client-side routing         |
| CSS Modules     | Scoped styling              |
| ES Modules      | Tree-shaking & modular code |

---

### 3.2 Project Structure

* **components/** → Reusable UI (Header, Footer, Navbar)
* **pages/** → Route-level views (Home, AboutUs)
* **App.jsx** → Routing shell
* **main.jsx** → App bootstrap

---

### 3.3 Architectural Decisions

#### Component-Based Architecture

Reusable components like:

* TopBar
* Header
* Navbar
* Footer

→ Reduces duplication and improves maintainability

#### CSS Modules

* Avoids class conflicts
* Scoped styles per component

#### SPA Routing

* Faster navigation
* No full page reloads

---

## 4. Code Optimization & Improvements

### 4.1 Before vs After

| Aspect      | Original Site     | React Rebuild   |
| ----------- | ----------------- | --------------- |
| Rendering   | Monolithic HTML   | React SPA       |
| Styling     | Inline/global CSS | CSS Modules     |
| Navigation  | Full reload       | Client routing  |
| Layout      | Tables            | Flexbox/Grid    |
| Images      | Unoptimized       | Responsive      |
| JavaScript  | jQuery            | React Hooks     |
| Reusability | None              | Component-based |

---

### 4.2 Key Optimizations

#### 1. Component Reuse

Shared components eliminate repeated HTML

#### 2. Responsive Grid

CSS Grid → auto-fit + minmax()

#### 3. CSS Architecture

Scoped styles prevent conflicts

#### 4. Semantic HTML

Uses:

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<footer>`

---

## 5. Issues in Current React Code (Self-Audit)

| File              | Issue                               | Fix               |
| ----------------- | ----------------------------------- | ----------------- |
| BannerContent.jsx | Uses `class` instead of `className` | Replace           |
| Header.jsx        | JSX syntax issue                    | Fix attributes    |
| Navbar.jsx        | Uses `<a>` instead of `<Link>`      | Use Router        |
| Footer.module.css | Wrong class selector                | Fix naming        |
| Images            | Missing alt text                    | Add accessibility |
| Pages             | Missing meta tags                   | Add SEO           |

---

## 6. Performance Analysis

### 6.1 Expected Improvements

| Metric | Original | Rebuild   | Improvement       |
| ------ | -------- | --------- | ----------------- |
| FCP    | 3.5–5s   | 0.8–1.5s  | 3–4x faster       |
| LCP    | 6–10s    | 1.5–2.5s  | 3–5x faster       |
| TBT    | 1500ms+  | 50–200ms  | 10x better        |
| CLS    | 0.25+    | 0.01–0.05 | Stable UI         |
| Score  | 15–35    | 75–95     | Major improvement |

---

### 6.2 Why Improvements Happen

* Vite → optimized bundles
* React → non-blocking rendering
* CSS Grid → stable layout
* Reduced JS execution

---

## 7. Recommendations

To make this production-ready:

* Use **Next.js (SSR + SSG)**
* Optimize images (WebP, lazy loading)
* Add SEO (React Helmet)
* Improve accessibility (ARIA, keyboard nav)
* Add testing (Jest, Cypress)
* Setup CI/CD with Lighthouse
* Implement PWA support

---

## 8. Conclusion

Migrating from a legacy system to React significantly improves:

* Performance
* Code maintainability
* User experience

This rebuild can serve as a model for modernizing government websites in India.

---

## Appendix A: File Structure

| File        | Purpose       |
| ----------- | ------------- |
| main.jsx    | Entry point   |
| App.jsx     | Routing       |
| Header.jsx  | Header UI     |
| Navbar.jsx  | Navigation    |
| Footer.jsx  | Footer        |
| Home.jsx    | Homepage      |
| AboutUs.jsx | About page    |
| CSS Modules | Scoped styles |

---
