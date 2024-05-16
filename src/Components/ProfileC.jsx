import React, { useState } from 'react';
import PersonalInfo from './Profile/PersonalInfo'; 
import LeftSideComponent from './LeftSideComponents';
import AddressInfo from './Profile/AddressInfo'; 
import OtherInfo from './Profile/OtherInfo'; 
import PastQualification from './Profile/PastQualification'; 
import CurrentCourse from './Profile/CurrentCourse';
import HostelDetails from './Profile/HostelDetails'; 

const ProfileC = () => {
    const [activeButton, setActiveButton] = useState('personal'); 

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName); 
    };

    const renderComponent = () => {
        switch (activeButton) {
            case 'personal':
                return <PersonalInfo />;
            case 'address':
                return <AddressInfo />;
            case 'other':
                return <OtherInfo />;
            case 'qualification':
                return <PastQualification />;
            case 'course':
                return <CurrentCourse />;
            case 'hostel':
                return <HostelDetails />;
            default:
                return null;
        }
    };

    return (
        <div className='flex gap-4' style={{ width: 'calc(100% - 16px)' }}> 
            <div className='border-r'>
                <LeftSideComponent />
            </div>

            <div style={{ width: 'calc(100% - 240px)' }}> 
                {/* Buttons */}
                <div className="flex justify-between mt-2">
                    <button
                        className={`px-4 py-2 rounded-md ${activeButton === 'personal' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => handleButtonClick('personal')}
                        style={{ width: 'calc(100% / 6 - 8px)' }} 
                    >
                        Personal Information
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${activeButton === 'address' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => handleButtonClick('address')}
                        style={{ width: 'calc(100% / 6 - 8px)' }} 
                    >
                        Address Information
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${activeButton === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => handleButtonClick('other')}
                        style={{ width: 'calc(100% / 6 - 8px)' }} 
                    >
                        Other Information
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${activeButton === 'qualification' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => handleButtonClick('qualification')}
                        style={{ width: 'calc(100% / 6 - 8px)' }}
                    >
                        Past Qualification
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${activeButton === 'course' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => handleButtonClick('course')}
                        style={{ width: 'calc(100% / 6 - 8px)' }} 
                    >
                        Current Course
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${activeButton === 'hostel' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => handleButtonClick('hostel')}
                        style={{ width: 'calc(100% / 6 - 8px)' }} 
                    >
                        Hostel Details
                    </button>
                </div>

                {/* Render the selected component */}
                {renderComponent()}
            </div>
        </div>
    );
};

export default ProfileC;
