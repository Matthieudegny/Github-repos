import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import SearchRepos from '../SearchRepos/SearchRepos';
import Faq from '../Faq/Faq';
import Github from '../Github/Github';
import './app.scss'

// == Composant
function App() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={(<SearchRepos />)}
          />
          <Route
            path="/faq"
            element={(<Faq />)}
          />
          <Route
            path="/github"
            element={(<Github />)}
          />
          {/* 404 page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    );
  }
  
  // == Export
  export default React.memo(App);