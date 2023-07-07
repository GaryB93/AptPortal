import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import styles here?

// Render App component
// cast potential for DOM node not returned as HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<App />);