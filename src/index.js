import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './css/global.css';
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";  
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';


i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
