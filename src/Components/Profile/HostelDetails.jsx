import React, { useState } from 'react';

const HostelDetails = () => {
  const [formData, setFormData] = useState({
    beneficiaryCategory: '', // Added field for Beneficiary Category
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex-grow p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Hostel Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block">Beneficiary Category:</label>
              <div className="flex items-center space-x-4">
                <label htmlFor="hosteller"><input type="radio" id="hosteller" name="beneficiaryCategory" value="hosteller" onChange={handleChange} checked={formData.beneficiaryCategory === 'hosteller'} /> Hosteller</label>
                <label htmlFor="dayScholar"><input type="radio" id="dayScholar" name="beneficiaryCategory" value="day_scholar" onChange={handleChange} checked={formData.beneficiaryCategory === 'day_scholar'} /> Day Scholar</label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default HostelDetails;
