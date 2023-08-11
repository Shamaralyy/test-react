/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { lazy, Suspense, useState } from 'react';
// import { NavLink, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//本地化
import './i18n/config'
import { useTranslation } from 'react-i18next';
import './App.css';
import Button from './components/button'
import A from './components/A'
const About = lazy(() => import('./pages/about'))

function update(c: string) {
  return (
    <span>{c}</span>
  )
}

function App() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState('light')
  const [language, setLanguage] = useState('en')
  const [msg] = useState('hhhh');
  const getContext = (a: string) => {
    console.log(a)
  }
  function toPage(url: string): any {
    navigate(`${url}`, {
      replace: false
    })
  }
  function toggleTheme() {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }
  function toggleLanguage() {
      setLanguage(prevLanguage => {
        const newLanguage = prevLanguage === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(newLanguage);
        return newLanguage;
      });
  }

  return (
    <div className="App" color-mode={mode}>
      <button onClick={toggleTheme}>点我切换白天/暗黑模式</button>
      <button onClick={toggleLanguage}>点我切换中文/英文</button>
      <div>{t(`mode.theme.${mode}`)}</div>
      <div>{t('section.depth',{num:1})}</div>
      <span>{msg}</span>
      <div>{update('ada')}</div>
      <A />
      <Button a={1} getContext={getContext} />
      <a href="#" onClick={() => toPage('d3')}>点我跳转到d3</a>
    </div>
  );
}

export default App;
