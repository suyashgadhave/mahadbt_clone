import React, { useState } from 'react';

const PastQualification = () => {
  const [formData, setFormData] = useState({
    qualificationLevel: '',
    stream: '',
    completed: '',
    instituteState: '',
    instituteDistrict: '',
    instituteTaluka: '',
    collegeName: '',
    course: '',
    boardUniversity: '',
    mode: '',
    admissionYear: '',
    passingYear: '',
    result: '',
    percentage: '',
    attempts: '',
    marksheetFile: null,
    hasGap: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  return (
    <div className="flex-grow p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Past Qualification Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="qualificationLevel" className="block">Qualification Level:</label>
              <input type="text" id="qualificationLevel" name="qualificationLevel" value={formData.qualificationLevel} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="stream" className="block">Stream:</label>
              <input type="text" id="stream" name="stream" value={formData.stream} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="completed" className="block">Completed?</label>
              <div className="flex items-center space-x-4">
                <label htmlFor="yesCompleted"><input type="radio" id="yesCompleted" name="completed" value="yes" onChange={handleChange} checked={formData.completed === 'yes'} /> Yes</label>
                <label htmlFor="noCompleted"><input type="radio" id="noCompleted" name="completed" value="no" onChange={handleChange} checked={formData.completed === 'no'} /> No</label>
              </div>
            </div>
            <div>
              <label htmlFor="instituteState" className="block">Institute State:</label>
              <input type="text" id="instituteState" name="instituteState" value={formData.instituteState} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="instituteDistrict" className="block">Institute District:</label>
              <input type="text" id="instituteDistrict" name="instituteDistrict" value={formData.instituteDistrict} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="instituteTaluka" className="block">Institute Taluka:</label>
              <input type="text" id="instituteTaluka" name="instituteTaluka" value={formData.instituteTaluka} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="collegeName" className="block">College Name / School Name:</label>
              <input type="text" id="collegeName" name="collegeName" value={formData.collegeName} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="course" className="block">Course:</label>
              <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="boardUniversity" className="block">Board/University:</label>
              <input type="text" id="boardUniversity" name="boardUniversity" value={formData.boardUniversity} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="mode" className="block">Mode:</label>
              <input type="text" id="mode" name="mode" value={formData.mode} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="admissionYear" className="block">Admission Year:</label>
              <input type="text" id="admissionYear" name="admissionYear" value={formData.admissionYear} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="passingYear" className="block">Passing Year:</label>
              <input type="text" id="passingYear" name="passingYear" value={formData.passingYear} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="result" className="block">Result:</label>
              <input type="text" id="result" name="result" value={formData.result} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="percentage" className="block">Percentage:</label>
              <input type="text" id="percentage" name="percentage" value={formData.percentage} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="attempts" className="block">Attempts:</label>
              <input type="text" id="attempts" name="attempts" value={formData.attempts} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="marksheetFile" className="block">Upload Marksheet:</label>
              <input type="file" id="marksheetFile" name="marksheetFile" onChange={handleChange} className="border rounded-md p-2" />
              <span>{formData.marksheetFile ? formData.marksheetFile.name : ''}</span>
            </div>
            <div>
              <label htmlFor="hasGap" className="block">Was any Gap in this Qualification / Course ?</label>
              <input type="text" id="hasGap" name="hasGap" value={formData.hasGap} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default PastQualification;
