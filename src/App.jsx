import React, { useState } from 'react';
import Overview from './components/Overview';
import Algorithms from './components/Algorithms';
import UsesLanguages from './components/UsesLanguages';
import Resources from './components/Resources';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="top-nav-bar" style={{ justifyContent: 'center' }}>
        <nav className="nav-center">
          <button 
            className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-link ${activeTab === 'algorithms' ? 'active' : ''}`}
            onClick={() => setActiveTab('algorithms')}
          >
            Algorithms
          </button>
          <button 
            className={`nav-link ${activeTab === 'uses-languages' ? 'active' : ''}`}
            onClick={() => setActiveTab('uses-languages')}
          >
            Uses &amp; Languages
          </button>
          <button 
            className={`nav-link ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </nav>
      </header>

      <main className="content-container">
        {activeTab === 'overview' && <Overview isDarkMode={isDarkMode} setActiveTab={setActiveTab} />}
        {activeTab === 'algorithms' && <Algorithms isDarkMode={isDarkMode} />}
        {activeTab === 'uses-languages' && <UsesLanguages isDarkMode={isDarkMode} />}
        {activeTab === 'resources' && <Resources isDarkMode={isDarkMode} />}
      </main>
    </div>
  );
}
