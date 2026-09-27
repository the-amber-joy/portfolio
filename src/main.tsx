import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/comfortaa/400.css';
// import "@fontsource/alkatra/400.css";
// import "@fontsource/marhey/400.css";
// import "@fontsource/raleway/600.css";

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
