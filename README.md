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

# images

<img width="1920" height="1080" alt="Screenshot (10)" src="https://github.com/user-attachments/assets/744df7be-9c0b-4adf-a084-5117380b772d" />

<img width="1900" height="953" alt="image" src="https://github.com/user-attachments/assets/ea29e0d2-d46f-476c-be8e-324a0f12acaf" />

<img width="1919" height="926" alt="image" src="https://github.com/user-attachments/assets/b8c8a090-ff69-4806-abe0-ca04c91037f4" />

<img width="1906" height="723" alt="image" src="https://github.com/user-attachments/assets/08c17c7c-7854-426c-b405-7414a029af0b" />




##  What is Lazy Loading?

Normally, when a React app starts, all pages are loaded at once.

In this project, pages are loaded **only when the user clicks on them**.

Example:

```js
const About = lazy(() => import("./pages/About"));



