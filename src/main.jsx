import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ── Disable browser scroll restoration & reset scroll position ───────────────
// This executes synchronously BEFORE React mounts, preventing the browser
// from restoring scroll position, avoiding race conditions with IntersectionObservers.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Double-ensure top scroll on fully loaded event
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
