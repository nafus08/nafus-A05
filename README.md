# Dev Stack Builder

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
</p>

A modern React app for discovering, comparing, and saving the tools that power a developer’s workflow.

## ✨ About the Project

Dev Stack Builder helps developers explore a curated set of tools and build their own ideal technology stack. You can browse categories, search for tools, and add the ones you like to a personal stack.

## 🛠️ Technologies Used:

- React.js
- Tailwind CSS, DaisyUI
- TypeScript / JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)

## 🌟 Features

1. Browse a curated library of developer tools and technologies.
2. Search and filter tools by category to quickly find the right fit.
3. Build a personalized stack and remove items whenever needed.
4. Clean, responsive layout with polished UI and loading states.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

---

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a way to write HTML-like code inside JavaScript. It makes React components easier to read and helps us describe the UI in a simple way.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data stored inside a component and can change while the app is running.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook lets a component keep track of changing data. I used it for the selected category, search text, loading status, and the stack of chosen tools.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook runs after a component renders, which is useful for side effects like fetching or loading data. I used it to load the technology data from the JSON file after the page mounted.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A key helps React identify each item in a list so it can update the UI correctly and efficiently. Without unique keys, React may render the wrong items or have problems with updates.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different content depending on a condition. In this project, I used it to show the empty stack message when the selected stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child with props, like `tech={tech}` or `selected={stack.some(...)}`. A child sends data back by calling a function passed in as a prop, such as `onAdd(tech)` or `onRemove(tech)`.

---

## 📌 Summary

Dev Stack Builder is a small but practical UI project that combines exploration, filtering, and personal stack building in one clean interface.