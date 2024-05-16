import React from 'react';
import Navbar from './Components/Navbar';
import ProfileC from './Components/ProfileC';
import LoginPage from './Components/LoginPage';
import { Routes, Route } from 'react-router-dom';
import InstituteProfile from './Components/InstituteProfile';
import AllScholarships from './Components/Profile/LeftSideComponents/AllScholarships';
import Application from './Components/Institute/Application';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/profile' element={<ProfileC />} />
        <Route path='/institute' element={<InstituteProfile />} />
        <Route path='/profile/all-scholarships' element={<AllScholarships />} />
        {/* <Route path="/applicant-form/:id" element={<Application />} /> */}
        <Route path="/application" element={<Application />} />
      </Routes>
    </div>
  );
}

export default App;
