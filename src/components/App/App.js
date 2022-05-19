import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import SearchRepos from '../SearchRepos/SearchRepos';
import Faq from '../Faq/Faq';

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
          {/* La route pour le 404 ("*"), qui redirige (Navigate) l'utilisateur vers la route "/" */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    );
  }
  
  // == Export
  export default App;