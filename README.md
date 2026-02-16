#  React Lazy Loading Demo (Modern SPA)

This is a small modern React project built to understand how **lazy loading works in real applications**.

Instead of loading every page at once, this app loads each page only when you visit it.  
While the page is loading, a skeleton UI appears — just like modern apps.

The design is clean, card-based, and uses a modern gradient theme.

---

##  What This Project Shows

This project demonstrates:

- Route-based Lazy Loading
- Dynamic `import()` in JavaScript
- React `lazy()` and `Suspense`
- Code Splitting
- Skeleton Loading UI
- Modern responsive design

It’s built using:

- React
- Vite
- React Router
- Plain CSS (no UI library)

---

##  What is Lazy Loading?

Normally, when a React app starts, all pages are loaded at once.

In this project, pages are loaded **only when the user clicks on them**.

Example:

```js
const About = lazy(() => import("./pages/About"));


Project Images

<img width="1920" height="1080" alt="Screenshot (10)" src="https://github.com/user-attachments/assets/7c3095e6-7aec-45e0-8fda-89767eede175" />
<img width="1920" height="1080" alt="Screenshot (9)" src="https://github.com/user-attachments/assets/528436aa-6338-4303-8510-a9edc9c42baa" />
<img width="1664" height="624" alt="image" src="https://github.com/user-attachments/assets/29b0a40b-6505-4f9e-ba0c-3fb9699075d6" />

