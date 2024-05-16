import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InstituteProfile = () => {
    const [applications, setApplications] = useState([]);
    const [activeTab, setActiveTab] = useState('under-scrutiny');
    const navigate = useNavigate(); 

    const fetchApplications = () => {
        const mockApplications = [
            { id: 1, name: 'Rushikesh Biradar', status: 'Under Scrutiny', scholarshipName: 'Scholarship A', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus quis massa tincidunt aliquam vel in odio.' },
            { id: 2, name: 'Suyash Gadhave', status: 'Approved', scholarshipName: 'Scholarship B', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus quis massa tincidunt aliquam vel in odio.' },
            { id: 3, name: 'Shailesh Kaliya', status: 'Under Scrutiny', scholarshipName: 'Scholarship B', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus quis massa tincidunt aliquam vel in odio.' },
            { id: 4, name: 'Koustubh Kulkarni', status: 'Approved', scholarshipName: 'Scholarship A', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus quis massa tincidunt aliquam vel in odio.' },
        ];
        setApplications(mockApplications);
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const filteredApplications = applications.filter(application => {
        if (activeTab === 'under-scrutiny') {
            return application.status === 'Under Scrutiny';
        } else if (activeTab === 'approved') {
            return application.status === 'Approved';
        }
        return false;
    });

    const handleViewApplication = (application) => {
        navigate('/application');
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="w-2/3">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-center text-2xl font-semibold mb-4">Institute Profile</h2>
                    <div className="mb-6 flex justify-center items-center">
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4 ${activeTab === 'under-scrutiny' ? 'bg-blue-700' : ''}`}
                            onClick={() => setActiveTab('under-scrutiny')} 
                        >
                            Under Scrutiny Applications
                        </button>
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === 'approved' ? 'bg-blue-700' : ''}`}
                            onClick={() => setActiveTab('approved')}
                        >
                            Approved Applications
                        </button>
                    </div>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Scholarship Name</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredApplications.map(application => (
                                <tr key={application.id}>
                                    <td className="border border-gray-300 px-4 py-2">{application.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{application.scholarshipName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{application.status}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleViewApplication(application)}
                                        >
                                            View Application
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InstituteProfile;
