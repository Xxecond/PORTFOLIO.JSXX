import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './PORTFOLIO.css';
import App from './App.jsx'; // Fixed: Removed trailing period

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);