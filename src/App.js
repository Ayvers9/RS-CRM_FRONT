import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './assets/styles/global.css'

import Authorisation from './components/pages/authorisationPage';
import Registration from './components/pages/registrationPage';
import Account from './components/pages/profilePage';
import Header from './components/layout/Header';




const App = () => {
  return (
    <Router>
      <ConditionalHeader />
        <Routes>
          <Route path="/login" element={<Authorisation />} />
          <Route path="/register" element={<Registration />} />
          <Route path='/profile' element={<Account/>}/>
        </Routes>

    </Router>
  );
}
const ConditionalHeader = () => {
  const location = useLocation();
  const showHeaderPaths = ['/profile']; // Пути, для которых нужно отображать Header

  return showHeaderPaths.includes(location.pathname) ? <Header /> : null;
};


export default App;