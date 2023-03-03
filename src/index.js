import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './MainContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className='main'>
            <Header /> 
            <MainContent />
      </div>
  </React.StrictMode>
);

reportWebVitals();