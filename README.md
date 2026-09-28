# Dev Stack Builder

Dev Stack Builder is a React app for exploring a curated catalog of developer technologies and assembling a personal toolkit.

## Live site

[Open Dev Stack Builder](https://nafus-a05.vercel.app)

## Tech stack

- React
- Vite
- JavaScript (ES modules)
- CSS
- React Toastify
- JSON technology catalog

## Features

- Browse a catalog of 12 developer tools and technologies
- Search by tool name or description
- Filter by frontend, backend, database, language, styling, DevOps, and tools categories
- Add and remove items from a personal stack, or clear the stack
- Toast notifications for stack changes
- Responsive navigation and layout

The current stack is held in the app's in-memory React state and resets when the page is reloaded.

## Run locally

```bash
git clone https://github.com/nafus08/nafus-A05.git
cd nafus-A05
npm ci
npm run dev
```

Open the local Vite URL printed in the terminal. To create a production build, run `npm run build`.
