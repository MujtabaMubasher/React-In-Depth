import React from 'react';
import ReactDOM from 'react-dom'; // Import react-dom (not client)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the ID in your index.html
);

// Optional: Measure performance
reportWebVitals();
