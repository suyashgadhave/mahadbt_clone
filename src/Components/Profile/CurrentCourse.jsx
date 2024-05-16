import React, { useState } from 'react';

const CurrentCourse = () => {
  const [qualificationDetails, setQualificationDetails] = useState({
    admissionYear: '',
    instituteState: '',
    instituteDistrict: '',
    instituteTaluka: '',
    qualificationLevel: '',
    stream: '',
    collegeName: '',
    courseName: '',
    admissionType: '',
    cetMeritPercentageClatScore: '',
    applicationAdmissionIDCapIDClatAdmitCardNo: '',
    yearOfStudy: '',
    completedOrPursuing: '',
    isProfessional: '',
    isAdmissionThroughOpenOrReservedCategory: '',
    gapYears: '',
    capIdCertificate: '',
  });

  const handleQualificationDetailsChange = (e) => {
    const { name, value } = e.target;
    setQualificationDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCapIdCertificateUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setQualificationDetails(prevState => ({
        ...prevState,
        capIdCertificate: file.name
      }));
    }
  };

  return (
    <div className="flex-grow p-8">
      <div className="space-y-6">
        <h3 className="text-lg font-bold">Current Course Details</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="admissionYear" className="block">Admission Year In Current Course:</label>
              <input
                type="text"
                id="admissionYear"
                name="admissionYear"
                value={qualificationDetails.admissionYear}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="instituteState" className="block">Institute State:</label>
              <input
                type="text"
                id="instituteState"
                name="instituteState"
                value={qualificationDetails.instituteState}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="instituteDistrict" className="block">Institute District:</label>
              <input
                type="text"
                id="instituteDistrict"
                name="instituteDistrict"
                value={qualificationDetails.instituteDistrict}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="instituteTaluka" className="block">Institute Taluka:</label>
              <input
                type="text"
                id="instituteTaluka"
                name="instituteTaluka"
                value={qualificationDetails.instituteTaluka}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="qualificationLevel" className="block">Qualification Level:</label>
              <select
                id="qualificationLevel"
                name="qualificationLevel"
                value={qualificationDetails.qualificationLevel}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Qualification Level</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Diploma">Diploma</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div>
              <label htmlFor="stream" className="block">Stream:</label>
              <input
                type="text"
                id="stream"
                name="stream"
                value={qualificationDetails.stream}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="collegeName" className="block">College Name / School Name:</label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={qualificationDetails.collegeName}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="courseName" className="block">Course Name:</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={qualificationDetails.courseName}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="admissionType" className="block">Admission Type:</label>
              <select
                id="admissionType"
                name="admissionType"
                value={qualificationDetails.admissionType}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Admission Type</option>
                <option value="Gov. quota">Through Gov. quota</option>
                <option value="Management">Management</option>
              </select>
            </div>
            <div>
              <label htmlFor="cetMeritPercentageClatScore" className="block">CET / Merit Percentage / CLAT Score:</label>
              <input
                type="text"
                id="cetMeritPercentageClatScore"
                name="cetMeritPercentageClatScore"
                value={qualificationDetails.cetMeritPercentageClatScore}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="applicationAdmissionIDCapIDClatAdmitCardNo" className="block">Application Admission ID/CAP ID/CLAT Admit Card No:</label>
              <input
                type="text"
                id="applicationAdmissionIDCapIDClatAdmitCardNo"
                name="applicationAdmissionIDCapIDClatAdmitCardNo"
                value={qualificationDetails.applicationAdmissionIDCapIDClatAdmitCardNo}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>

            <div>
            <label htmlFor="capIdCertificate" className="block">Upload CAP ID Certificate:</label>
            <input
              type="file"
              id="capIdCertificate"
              name="capIdCertificate"
              onChange={handleCapIdCertificateUpload}
              className="border rounded-md p-2"
            />
            <span>{qualificationDetails.capIdCertificate}</span>
          </div>

            <div>
              <label htmlFor="yearOfStudy" className="block">Year Of Study:</label>
              <input
                type="text"
                id="yearOfStudy"
                name="yearOfStudy"
                value={qualificationDetails.yearOfStudy}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="completedOrPursuing" className="block">Completed Or Pursuing:</label>
              <select
                id="completedOrPursuing"
                name="completedOrPursuing"
                value={qualificationDetails.completedOrPursuing}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select</option>
                <option value="Completed">Completed</option>
                <option value="Pursuing">Pursuing</option>
              </select>
            </div>
            <div>
              <label htmlFor="isProfessional" className="block">Is Professional?</label>
              <select
                id="isProfessional"
                name="isProfessional"
                value={qualificationDetails.isProfessional}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="isAdmissionThroughOpenOrReservedCategory" className="block">Is Admission Through Open Or Reserved Category?</label>
              <select
                id="isAdmissionThroughOpenOrReservedCategory"
                name="isAdmissionThroughOpenOrReservedCategory"
                value={qualificationDetails.isAdmissionThroughOpenOrReservedCategory}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select</option>
                <option value="Open">Open</option>
                <option value="Reserved">Reserved</option>
              </select>
            </div>
            <div>
              <label htmlFor="gapYears" className="block">Gap Years:</label>
              <input
                type="text"
                id="gapYears"
                name="gapYears"
                value={qualificationDetails.gapYears}
                onChange={handleQualificationDetailsChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourse;
