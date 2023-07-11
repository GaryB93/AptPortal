import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import reset styles
import './assets/styles/styles.scss';

// Render App component
// potential for DOM node not returned, cast as HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<App />);