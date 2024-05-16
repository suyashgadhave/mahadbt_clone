import React from 'react';

const Application = () => {
    return (
        <div className="h-full w-2/3 mt-7 container mx-auto px-4 py-8 bg-blue-50">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-800">Applicant Details</h2>
            <hr className="my-4 border-b-2 border-blue-800 col-span-3" />

            {/* Applicant Details */}
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">ApplicationID:<br />
                        <span id="applicationId" className="text-red-800">12345</span>
                    </p>
                    <p className="mb-2 font-semibold">Scheme Name:<br />
                        <span id="schemeName" className="text-red-800">Scholarship A</span>
                    </p>
                    <p className="mb-2 font-semibold">Department Name:<br />
                        <span id="departmentName" className="text-red-800">Department A</span>
                    </p>
                    <p className="font-semibold">Applied Date:<br />
                        <span id="appliedDate" className="text-red-800">January 1, 2024</span>
                    </p>
                </div>
            </div>

            {/* Personal Details */}
            <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Full Name:<br />
                        <span id="fullName" className="text-red-800">John Doe</span>
                    </p>
                    <p className="mb-2 font-semibold">Mobile Number:<br />
                        <span id="mobileNumber" className="text-red-800">1234567890</span>
                    </p>
                    <p className="mb-2 font-semibold">Email ID:<br />
                        <span id="email" className="text-red-800">john@example.com</span>
                    </p>
                    <p className="mb-2 font-semibold">Date Of Birth:<br />
                        <span id="dob" className="text-red-800">January 1, 2000</span>
                    </p>
                    <p className="mb-2 font-semibold">Gender:<br />
                        <span id="gender" className="text-red-800">Male</span>
                    </p>
                    <p className="mb-2 font-semibold">Age:<br />
                        <span id="age" className="text-red-800">24</span>
                    </p>
                    <p className="mb-2 font-semibold">Religion:<br />
                        <span id="religion" className="text-red-800">Christianity</span>
                    </p>
                    <p className="mb-2 font-semibold">Marital Status:<br />
                        <span id="maritalStatus" className="text-red-800">Single</span>
                    </p>
                    <p className="mb-2 font-semibold">Applicant Full Name (As Per SSC Marksheet/ L.C.):<br />
                        <span id="sscName" className="text-red-800">John Doe</span>
                    </p>
                    <p className="mb-2 font-semibold">Parent's/Guardian Mobile No:<br />
                        <span id="parentMobile" className="text-red-800">9876543210</span>
                    </p>
                    <p className="mb-2 font-semibold">Dependent Type:<br />
                        <span id="parentMobile" className="text-red-800">-</span>
                    </p>
                </div>
            </div>

            {/* Permanent Address Details */}
            <h2 className="text-xl font-semibold mb-2">Permanent Address Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Address:<br />
                        <span id="permanentAddress" className="text-red-800">123 Main St</span>
                    </p>
                    <p className="mb-2 font-semibold">State:<br />
                        <span id="permanentState" className="text-red-800">Example State</span>
                    </p>
                    <p className="mb-2 font-semibold">District:<br />
                        <span id="permanentDistrict" className="text-red-800">Example District</span>
                    </p>
                    <p className="mb-2 font-semibold">Taluka:<br />
                        <span id="permanentTaluka" className="text-red-800">Example Taluka</span>
                    </p>
                    <p className="mb-2 font-semibold">Village:<br />
                        <span id="permanentVillage" className="text-red-800">Example Village</span>
                    </p>
                    <p className="font-semibold">Pincode:<br />
                        <span id="permanentPincode" className="text-red-800">123456</span>
                    </p>
                    <p className="font-semibold">IsCorrespondence Address same as Permanent?<br />
                        <span id="permanentPincode" className="text-red-800">No</span>
                    </p>
                </div>
            </div>

            {/* Correspondence Address Details */}
            <h2 className="text-xl font-semibold mb-2">Correspondence Address Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Address:<br />
                        <span id="correspondenceAddress" className="text-red-800">456 Main St</span>
                    </p>
                    <p className="mb-2 font-semibold">State:<br />
                        <span id="correspondenceState" className="text-red-800">Example State</span>
                    </p>
                    <p className="mb-2 font-semibold">District:<br />
                        <span id="correspondenceDistrict" className="text-red-800">Example District</span>
                    </p>
                    <p className="mb-2 font-semibold">Taluka:<br />
                        <span id="correspondenceTaluka" className="text-red-800">Example Taluka</span>
                    </p>
                    <p className="mb-2 font-semibold">Village:<br />
                        <span id="correspondenceVillage" className="text-red-800">Example Village</span>
                    </p>
                    <p className="font-semibold">Pincode:<br />
                        <span id="correspondencePincode" className="text-red-800">789012</span>
                    </p>
                    <p className="font-semibold">IsCorrespondence Address same as Permanent?<br />
                        <span id="permanentPincode" className="text-red-800">No</span>
                    </p>
                </div>
            </div>

            {/* Income Details */}
            <h2 className="text-xl font-semibold mb-2">Income Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Do you have Income Certificate?:<br />
                        <span id="incomeCertificate" className="text-red-800">Yes</span>
                    </p>
                    <p className="mb-2 font-semibold">Does your Certificate have a Barcode?:<br />
                        <span id="incomeCertificateBarcode" className="text-red-800">No</span>
                    </p>
                    <p className="mb-2 font-semibold">Family Annual Income:<br />
                        <span id="familyAnnualIncome" className="text-red-800">$50,000</span>
                    </p>
                    <p className="mb-2 font-semibold">Income Certificate No:<br />
                        <span id="incomeCertificateNo" className="text-red-800">123ABC</span>
                    </p>
                    <p className="font-semibold">Issuing Authority:<br />
                        <span id="issuingAuthority" className="text-red-800">Example Authority</span>
                    </p>
                    <p className="font-semibold">Date of Issue:<br />
                        <span id="dateOfIssue" className="text-red-800">January 1, 2024</span>
                    </p>
                </div>
            </div>

            {/* Domicile Details */}
            <h2 className="text-xl font-semibold mb-2">Domicile Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Are you Domicile of Maharashtra?:<br />
                        <span id="domicileMaharashtra" className="text-red-800">Yes</span>
                    </p>
                    <p className="mb-2 font-semibold">Do you have Domicile Certificate?:<br />
                        <span id="domicileCertificate" className="text-red-800">Yes</span>
                    </p>
                    <p className="mb-2 font-semibold">Relationship Type:<br />
                        <span id="relationshipType" className="text-red-800">Son/Daughter</span>
                    </p>
                    <p className="mb-2 font-semibold">Domicile Certificate No:<br />
                        <span id="domicileCertificateNo" className="text-red-800">456DEF</span>
                    </p>
                    <p className="mb-2 font-semibold">Does your Certificate have a Barcode?:<br />
                        <span id="domicileCertificateBarcode" className="text-red-800">Yes</span>
                    </p>
                    <p className="mb-2 font-semibold">Applicant Name:<br />
                        <span id="applicantName" className="text-red-800">John Doe</span>
                    </p>
                    <p className="mb-2 font-semibold">Issuing Authority:<br />
                        <span id="domicileIssuingAuthority" className="text-red-800">Example Authority</span>
                    </p>
                    <p className="font-semibold">Date of Issue:<br />
                        <span id="domicileDateOfIssue" className="text-red-800">January 2, 2024</span>
                    </p>
                </div>
            </div>

            {/* Caste Details */}
            <h2 className="text-xl font-semibold mb-2">Caste Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Do you have Caste Certificate?:<br />
                        <span id="casteCertificate" className="text-red-800">Yes</span>
                    </p>
                    <p className="mb-2 font-semibold">Caste Category:<br />
                        <span id="casteCategory" className="text-red-800">General</span>
                    </p>
                    <p className="mb-2 font-semibold">Does your Certificate have a Barcode?:<br />
                        <span id="casteCertificateBarcode" className="text-red-800">No</span>
                    </p>
                    <p className="mb-2 font-semibold">Caste Certificate Number:<br />
                        <span id="casteCertificateNo" className="text-red-800">789GHI</span>
                    </p>
                    <p className="mb-2 font-semibold">Issuing District:<br />
                        <span id="casteIssuingDistrict" className="text-red-800">Example District</span>
                    </p>
                    <p className="mb-2 font-semibold">Applicant Name:<br />
                        <span id="casteApplicantName" className="text-red-800">John Doe</span>
                    </p>
                    <p className="font-semibold">Issuing Authority:<br />
                        <span id="casteIssuingAuthority" className="text-red-800">Example Authority</span>
                    </p>
                </div>
            </div>

            {/* Personal Eligibility Details */}
            <h2 className="text-xl font-semibold mb-2">Personal Eligibility Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Are you Salaried?:<br />
                        <span id="salaried" className="text-red-800">Yes</span>
                    </p>
                    <p className="font-semibold">Disability of any Type?:<br />
                        <span id="disability" className="text-red-800">No</span>
                    </p>
                </div>
            </div>

            {/* Parent's/Guardian's Details */}
            <h2 className="text-xl font-semibold mb-2">Parent's/Guardian's Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Is Father Alive?:<br />
                        <span id="fatherAlive" className="text-red-800">Yes</span>
                    </p>
                    <p className="mb-2 font-semibold">Father Name:<br />
                        <span id="fatherName" className="text-red-800">Father Doe</span>
                    </p>
                    <p className="mb-2 font-semibold">Is Father Salaried?:<br />
                        <span id="fatherSalaried" className="text-red-800">Yes</span>
                    </p>
                    <p className="mb-2 font-semibold">Is Mother Alive?:<br />
                        <span id="motherAlive" className="text-red-800">Yes</span>
                    </p>
                    <p className="mb-2 font-semibold">Mother Name:<br />
                        <span id="motherName" className="text-red-800">Mother Doe</span>
                    </p>
                    <p className="font-semibold">Is Mother Salaried?:<br />
                        <span id="motherSalaried" className="text-red-800">Yes</span>
                    </p>
                </div>
            </div>

            {/* Past Qualification Details */}
            <h2 className="text-xl font-semibold mb-2">Past Qualification Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Qualification Level:<br />
                        <span id="qualificationLevel" className="text-red-800">High School</span>
                    </p>
                    <p className="mb-2 font-semibold">Stream:<br />
                        <span id="stream" className="text-red-800">Science</span>
                    </p>
                    <p className="font-semibold">Completed:<br />
                        <span id="completed" className="text-red-800">Yes</span>
                    </p>
                    <p className="font-semibold">Institute State:<br />
                        <span id="instituteState" className="text-red-800">Example State</span>
                    </p>
                    <p className="font-semibold">Institute District:<br />
                        <span id="instituteDistrict" className="text-red-800">Example District</span>
                    </p>
                    <p className="font-semibold">Institute Taluka:<br />
                        <span id="instituteTaluka" className="text-red-800">Example Taluka</span>
                    </p>
                    <p className="font-semibold">College Name / School Name:<br />
                        <span id="collegeName" className="text-red-800">Example College</span>
                    </p>
                    <p className="font-semibold">Course Name:<br />
                        <span id="courseName" className="text-red-800">Example Course</span>
                    </p>
                    <p className="font-semibold">Board/University:<br />
                        <span id="boardUniversity" className="text-red-800">Example Board/University</span>
                    </p>
                    <p className="font-semibold">Mode:<br />
                        <span id="mode" className="text-red-800">Example Mode</span>
                    </p>
                    <p className="font-semibold">Admission Year:<br />
                        <span id="admissionYear" className="text-red-800">2020</span>
                    </p>
                    <p className="font-semibold">Passing Year:<br />
                        <span id="passingYear" className="text-red-800">2022</span>
                    </p>
                    <p className="font-semibold">Result:<br />
                        <span id="result" className="text-red-800">Pass</span>
                    </p>
                    <p className="font-semibold">Percentage:<br />
                        <span id="percentage" className="text-red-800">85%</span>
                    </p>
                    <p className="font-semibold">Attempts:<br />
                        <span id="attempts" className="text-red-800">1</span>
                    </p>
                    <p className="font-semibold">Is Gap?:<br />
                        <span id="isGap" className="text-red-800">No</span>
                    </p>
                </div>
            </div>

            {/* Current Course Details */}
            <h2 className="text-xl font-semibold mb-2">Current Course Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">Admission Year In Current Course:<br />
                        <span id="admissionYearInCourse" className="text-red-800">2022</span>
                    </p>
                    <p className="mb-2 font-semibold">Institute State:<br />
                        <span id="instituteState" className="text-red-800">Example State</span>
                    </p>
                    <p className="mb-2 font-semibold">Institute District:<br />
                        <span id="instituteDistrict" className="text-red-800">Example District</span>
                    </p>
                    <p className="mb-2 font-semibold">Institute Taluka:<br />
                        <span id="instituteTaluka" className="text-red-800">Example Taluka</span>
                    </p>
                    <p className="mb-2 font-semibold">Qualification Level:<br />
                        <span id="qualificationLevel" className="text-red-800">High School</span>
                    </p>
                    <p className="mb-2 font-semibold">Stream:<br />
                        <span id="stream" className="text-red-800">Science</span>
                    </p>
                    <p className="mb-2 font-semibold">College Name / School Name:<br />
                        <span id="collegeName" className="text-red-800">Example College</span>
                    </p>
                    <p className="mb-2 font-semibold">Course Name:<br />
                        <span id="courseName" className="text-red-800">Example Course</span>
                    </p>
                    <p className="mb-2 font-semibold">Admission Type:<br />
                        <span id="admissionType" className="text-red-800">Direct</span>
                    </p>
                    <p className="mb-2 font-semibold">Application Admission ID/CAP ID/CLAT Admit Card No:<br />
                        <span id="admissionID" className="text-red-800">123456</span>
                    </p>
                    <p className="mb-2 font-semibold">Year Of Study:<br />
                        <span id="yearOfStudy" className="text-red-800">3</span>
                    </p>
                    <p className="mb-2 font-semibold">Completed Or Continue:<br />
                        <span id="completedOrContinue" className="text-red-800">Continue</span>
                    </p>
                    <p className="mb-2 font-semibold">Admission Date:<br />
                        <span id="admissionDate" className="text-red-800">August 15, 2022</span>
                    </p>
                    <p className="mb-2 font-semibold">Admission Year in College/Institute:<br />
                        <span id="admissionYearInCollege" className="text-red-800">2022</span>
                    </p>
                    <p className="mb-2 font-semibold">Percentage:<br />
                        <span id="percentage" className="text-red-800">90%</span>
                    </p>
                    <p className="mb-2 font-semibold">Result:<br />
                        <span id="result" className="text-red-800">Pass</span>
                    </p>
                    <p className="mb-2 font-semibold">Fees Paid:<br />
                        <span id="feesPaid" className="text-red-800">$5000</span>
                    </p>
                    <p className="mb-2 font-semibold">Course Type:<br />
                        <span id="courseType" className="text-red-800">Full-time</span>
                    </p>
                    <p className="mb-2 font-semibold">Admission Through Open Or Reserved Category?:<br />
                        <span id="admissionCategory" className="text-red-800">Open</span>
                    </p>
                    <p className="mb-2 font-semibold">Gap Year:<br />
                        <span id="gapYear" className="text-red-800">No</span>
                    </p>
                    <p className="mb-2 font-semibold">Mode:<br />
                        <span id="mode" className="text-red-800">Regular</span>
                    </p>
                    <p className="mb-2 font-semibold">Gap Reason:<br />
                        <span id="gapReason" className="text-red-800">N/A</span>
                    </p>
                    <p className="mb-2 font-semibold">CET / Merit Percentage / CLAT Score:<br />
                        <span id="cetMeritPercentage" className="text-red-800">90%</span>
                    </p>
                </div>
            </div>

            {/* Hostel Details */}
            <h2 className="text-xl font-semibold mb-2">Hostel Details</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-300 p-4 text-black">
                    <p className="font-semibold">Hosteller / Day Scholar Type:<br />
                        <span id="hostelType" className="text-red-800">Hosteller</span>
                    </p>
                </div>
            </div>

            {/* Additional Questions */}
            <h2 className="text-xl font-semibold mb-2">Additional Questions</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">How many boys child (including you) in your family of the same parents?<br />
                        <span id="boysCount" className="text-red-800">2</span>
                    </p>
                    <p className="mb-2 font-semibold">Enter your last year MahaEschol Application ID:<br />
                        <span id="applicationId" className="text-red-800">2223VJV1001334337</span>
                    </p>
                    <p className="mb-2 font-semibold">Caste Validity:<br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Caste Validity
                        </button>
                    </p>
                    <p className="mb-2 font-semibold">Declaration certificate of parents/guardians about number of children beneficiaries:<br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Declaration
                        </button>
                    </p>
                    <p className="mb-2 font-semibold">Leaving Certificate:<br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Leaving Certificate
                        </button>
                    </p>
                    <p className="mb-2 font-semibold">Have you applied for any other scholarship?<br />
                        <span id="otherScholarship" className="text-red-800">No</span>
                    </p>
                    <p className="mb-2 font-semibold">Ration Card for identify number of children in family:<br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Ration Card
                        </button>
                    </p>
                    <p className="mb-2 font-semibold">Is this a Renewal Application?<br />
                        <span id="renewalApplication" className="text-red-800">Yes</span>
                    </p>
                </div>
            </div>

            {/* Documents Uploaded */}
            <h2 className="text-xl font-semibold mb-2">Documents Uploaded</h2>
            <div className="mb-8 bg-blue-100 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-300 p-4 text-black">
                    <p className="mb-2 font-semibold">CAP ID:<br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View CAP id
                        </button>
                    </p>
                    <p className="mb-2 font-semibold">Aadhar Card: <br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Aadhar Card
                        </button>
                    </p>
                    <p className="mb-2 font-semibold">SSC certificate:<br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View SSC Certificate
                        </button>
                    </p>
                    <p className="mb-2 font-semibold">HSC certificate:<br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View HSC Certificate
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Application;
