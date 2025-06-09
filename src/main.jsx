import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Example error-reporting utility
function reportError(type, error, errorInfo) {
  // Send to logging backend or error-tracking service (e.g., Sentry)
  console.error(`[${type}]`, error, errorInfo.componentStack);
}

const container = document.getElementById('root');

const root = createRoot(container, {
  onUncaughtError: (error, errorInfo) => {
    reportError('UncaughtError', error, errorInfo);
  },
  onCaughtError: (error, errorInfo) => {
    reportError('CaughtError', error, errorInfo);
  },
  onRecoverableError: (error, errorInfo) => {
    reportError('RecoverableError', error, errorInfo);
  }
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
