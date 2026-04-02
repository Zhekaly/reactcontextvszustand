import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Переключай комментарии чтобы тестировать разные реализации
import App from './examples/ContextExample';
//import App from './examples/ZustandExample';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
