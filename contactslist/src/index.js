import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import View from './components/UI/MAIN/View';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path ="/" element={<Navigate to={'/contacts/list'}/>} />
        <Route path ="/contacts/list" element={<App />} />
        <Route path="/contacts/view/:contactId" element={<View />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
