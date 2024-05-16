import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ApplicantLogin from './Login/ApplicantLogin';
import InstituteLogin from './Login/InstituteLogin';
import NewApplicantRegistration from './Login/NewApplicantRegistration';
import MahaDBT_home from '../Pics/MahaDBT_home.jpg';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [showImage, setShowImage] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowImage(false);
  };

  const handleSignIn = () => {
    setShowImage(false);
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gray-100">
      {showImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute ml-[150px] left-5 top-20"
        >
          <img src={MahaDBT_home} alt="MahaDBT Home Image" className="w-250 h-auto rounded-lg shadow-lg" />
        </motion.div>
      )}
      <div className="absolute mr-[150px] right-5 top-20 flex flex-col items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline`}
          onClick={() => handleTabClick('applicant')}
        >
          Applicant Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline`}
          onClick={() => handleTabClick('institute')}
        >
          Institute Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline`}
          onClick={() => handleTabClick('registration')}
        >
          New Applicant Registration
        </motion.button>
      </div>
      <div className="flex justify-center items-center">
        {activeTab === 'applicant' && <ApplicantLogin onSignIn={handleSignIn} />}
        {activeTab === 'institute' && <InstituteLogin onSignIn={handleSignIn} />}
        {activeTab === 'registration' && <NewApplicantRegistration onSignIn={handleSignIn} />}
      </div>
    </div>
  );
};

export default LoginPage;
