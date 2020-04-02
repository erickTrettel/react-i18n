import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next'

function App() {
  const selectedLang = localStorage.getItem('lang');
  const { t: translate, i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-fixed-bar">
          <select name="lang" id="lang" 
            onChange={e => changeLanguage(e.target.value)}>
            <option value="pt" selected={selectedLang === 'pt'}>Português</option>
            <option value="en" selected={selectedLang === 'en'}>English</option>
          </select>
        </div>

        <div className="App-container">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Trans i18nKey="edit.text">trans</Trans>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >{translate("learn")}</a>
        </div>
      </header>
    </div>
  );
}

export default App;
