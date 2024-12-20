import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Authorisation from './components/pages/authorisation/authorisationPage';
import Registration from './components/pages/registration/registrationPage';
import Account from './components/pages/profile/profilePage';
import Leads from './components/pages/leads/leads';
import Students from './components/pages/students/students';

import Header from './components/layout/Header';
import ProtectedRoute from './components/common/protectedRoute/protectedRoute';

import '../src/styles/global.css'

const App = () => {
  return (
    <div className='appContainer'>
      <ConditionalHeader />
      <div className='mainContent'>
        <Routes>
          <Route path="/login" element={<Authorisation />} />
          
          <Route element={<ProtectedRoute/>}>
            <Route path="/register" element={<Registration />} />
            <Route path="/profile" element={<Account />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/students" element={<Students/>}/>
            {/* <Route path="/payment" element={<Payment/>}/> */}
          </Route>
          
        </Routes>
      </div>
    </div>
  );
}

const ConditionalHeader = () => {
  const location = useLocation();
  const showHeaderPaths = ['/profile', '/payment'];

  return showHeaderPaths.includes(location.pathname) ? <Header /> : null;
};

export default App;
