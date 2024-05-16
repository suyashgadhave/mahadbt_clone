import React from 'react';
import LeftSideComponent from '../../LeftSideComponents';
const AllScholarships = () => {
  const scholarships = [
    { id: 1, name: 'Scholarship A', description: 'This is scholarship A' },
    { id: 2, name: 'Scholarship B', description: 'This is scholarship B' },
    { id: 3, name: 'Scholarship C', description: 'This is scholarship C' },
  ];

  const handleApply = (id) => {
    alert(`Applying for scholarship with ID: ${id}`);
  };

  return (
    <div className="container  mx-auto px-4 py-8">
      <div className="flex gap-4" style={{ width: 'calc(100% - 16px)' }}> 
        <div className="w-72 border-r ml-[-120px] mt-[-30px]">
          <LeftSideComponent />
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold mb-6 text-center">All Scholarships</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map(scholarship => (
                  <tr key={scholarship.id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{scholarship.id}</td>
                    <td className="px-4 py-2">{scholarship.name}</td>
                    <td className="px-4 py-2">{scholarship.description}</td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => handleApply(scholarship.id)}
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllScholarships;
