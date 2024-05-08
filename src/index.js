import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './Components/TermsConditions/TermsConditions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path={'/'} element={<App />} />
    <Route path={'/privacy-policy'} element={<PrivacyPolicy />} />
    <Route path={'/terms-conditions'} element={<TermsConditions />} />
    </Routes>
  </BrowserRouter>

);

