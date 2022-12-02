import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// babel will call
// Why we are calling live #1. we won't be directly using it but needed to import it in for babel
// console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
