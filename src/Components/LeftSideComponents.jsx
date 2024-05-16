import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideComponent = () => {
  return (
    <div className="w-72 flex flex-col items-start mt-2">
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">Aadhaar Bank Link</a>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">Home</a>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <Link to="/profile" className="py-2 px-4 block text-blue-500 hover:text-blue-700">Profile</Link>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <Link to="/profile/all-scholarships" className="py-2 px-4 block text-blue-500 hover:text-blue-700">All Schemes</Link>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">My Applied Scheme</a>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">My Cancelled Scheme</a>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">Right To Give Up</a>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">Grievance/Suggestion Dashboard</a>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">Declaration Forms</a>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">Notification</a>
      </div>
      <div className="border border-gray-300 h-12 w-full">
        <a href="#" className="py-2 px-4 block text-blue-500 hover:text-blue-700">My Applied Scheme History</a>
      </div>
    </div>
  );
};

export default LeftSideComponent;
