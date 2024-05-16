import React, { useState } from 'react';

const PersonalInfo = () => {

  const [formData, setFormData] = useState({
    // Personal Details
    aadhaarNumber: '',
    name: '',
    email: '',
    mobileNumber: '',
    dob: '',
    age: '',
    gender: '',
    applicantFullName: '',
    guardianMobileNumber: '',
    maritalStatus: '',

    // Religion Details
    religion: '',

    // Caste Details
    casteCategory: '',
    caste: '',
    hasCasteCertificate: '',
    hasBarcodeCertificate: '',
    casteCertificateNumber: '',
    issuingDistrict: '',
    applicantName: '',
    issuingAuthority: '',
    issuingDate: '',
    casteCertificateFile: '',

    // Income Details
    familyAnnualIncome: '',
    hasIncomeCertificate: '',
    hasBarcodeIncomeCertificate: '',
    incomeCertificateNumber: '',
    incomeCertificateIssuingAuthority: '',
    incomeCertificateIssueDate: '',
    incomeCertificateFile: '',

    // Domicile Details
    domicileOfMaharashtra: '',
    hasDomicileCertificate: '',
    relationshipType: '',
    hasBarcodeDomicileCertificate: '',
    domicileCertificateNumber: '',
    domicileCertificateIssuingAuthority: '',
    domicileCertificateIssueDate: '',
    domicileCertificateFile: '',

    // Personal Eligibility Details
    isSalaried: '',
    hasDisability: '',

    // Aadhaar Bank Details
    aadhaarLinkedBankAccountType: '',
    bankAccountNumber: '',
    ifscCode: '',
    branchName: '',
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  return (
    <div className="flex-grow p-8">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="aadhaarNumber" className="block">Aadhaar Number:</label>
              <input type="text" id="aadhaarNumber" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="name" className="block">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block">Mobile Number:</label>
              <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="dob" className="block">Date of Birth:</label>
              <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="age" className="block">Age:</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="gender" className="block">Gender:</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="border rounded-md p-2 w-full">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="applicantFullName" className="block">Applicant Full Name:</label>
              <input type="text" id="applicantFullName" name="applicantFullName" value={formData.applicantFullName} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="guardianMobileNumber" className="block">Parent's/Guardian Mobile Number:</label>
              <input type="text" id="guardianMobileNumber" name="guardianMobileNumber" value={formData.guardianMobileNumber} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="maritalStatus" className="block">Marital Status:</label>
              <div className="flex mt-2">
                <label htmlFor="married" className="mr-4"><input type="radio" id="married" name="maritalStatus" value="married" onChange={handleChange} checked={formData.maritalStatus === 'married'} /> Married</label>
                <label htmlFor="unmarried" className="mr-4"><input type="radio" id="unmarried" name="maritalStatus" value="unmarried" onChange={handleChange} checked={formData.maritalStatus === 'unmarried'} /> Unmarried</label>
                <label htmlFor="divorcee"><input type="radio" id="divorcee" name="maritalStatus" value="divorcee" onChange={handleChange} checked={formData.maritalStatus === 'divorcee'} /> Divorcee</label>
              </div>
            </div>
          </div>
        </div>

        {/* Religion Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Religion Details</h3>
          <div>
            <label htmlFor="religion" className="block">Religion:</label>
            <select id="religion" name="religion" value={formData.religion} onChange={handleChange} className="border rounded-md p-2 w-full">
              <option value="">Select Religion</option>
              <option value="hindu">Hindu</option>
              <option value="muslim">Muslim</option>
              <option value="christian">Christian</option>
              <option value="sikh">Sikh</option>
            </select>
          </div>
        </div>

        {/* Caste Details */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Caste Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="casteCategory" className="block">Caste Category:</label>
              <input type="text" id="casteCategory" name="casteCategory" value={formData.casteCategory} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="caste" className="block">Caste:</label>
              <input type="text" id="caste" name="caste" value={formData.caste} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="hasCasteCertificate" className="block">Do you have Caste Certificate?</label>
              <div className="flex">
                <label htmlFor="yesCasteCertificate" className="mr-4"><input type="radio" id="yesCasteCertificate" name="hasCasteCertificate" value="yes" onChange={handleChange} checked={formData.hasCasteCertificate === 'yes'} /> Yes</label>
                <label htmlFor="noCasteCertificate"><input type="radio" id="noCasteCertificate" name="hasCasteCertificate" value="no" onChange={handleChange} checked={formData.hasCasteCertificate === 'no'} /> No</label>
              </div>
            </div>
            {formData.hasCasteCertificate === 'yes' && (
              <>
                <div>
                  <label htmlFor="hasBarcodeCertificate" className="block">Received certificate with barcode?</label>
                  <div className="flex">
                    <label htmlFor="yesBarcodeCertificate" className="mr-4"><input type="radio" id="yesBarcodeCertificate" name="hasBarcodeCertificate" value="yes" onChange={handleChange} checked={formData.hasBarcodeCertificate === 'yes'} /> Yes</label>
                    <label htmlFor="noBarcodeCertificate"><input type="radio" id="noBarcodeCertificate" name="hasBarcodeCertificate" value="no" onChange={handleChange} checked={formData.hasBarcodeCertificate === 'no'} /> No</label>
                  </div>
                </div>
                <div>
                  <label htmlFor="casteCertificateNumber" className="block">Caste Certificate Number:</label>
                  <input type="text" id="casteCertificateNumber" name="casteCertificateNumber" value={formData.casteCertificateNumber} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="issuingDistrict" className="block">Issuing District:</label>
                  <input type="text" id="issuingDistrict" name="issuingDistrict" value={formData.issuingDistrict} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="applicantName" className="block">Applicant Name:</label>
                  <input type="text" id="applicantName" name="applicantName" value={formData.applicantName} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="issuingAuthority" className="block">Issuing Authority:</label>
                  <input type="text" id="issuingAuthority" name="issuingAuthority" value={formData.issuingAuthority} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="casteCertificateFile" className="block">Upload Caste Certificate:</label>
                  <input type="file" id="casteCertificateFile" name="casteCertificateFile" onChange={handleFileChange} className="border rounded-md p-2" />
                  <span>{formData.casteCertificateFile ? formData.casteCertificateFile.name : ''}</span>
                </div>
                <div>
                  <label htmlFor="issuingDate" className="block">Issuing Date:</label>
                  <input type="date" id="issuingDate" name="issuingDate" value={formData.issuingDate} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Income Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Income Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="familyAnnualIncome" className="block">Family Annual Income:</label>
              <input type="text" id="familyAnnualIncome" name="familyAnnualIncome" value={formData.familyAnnualIncome} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="hasIncomeCertificate" className="block">Do you have Income Certificate?</label>
              <div className="flex items-center space-x-4">
                <label htmlFor="yesIncomeCertificate"><input type="radio" id="yesIncomeCertificate" name="hasIncomeCertificate" value="yes" onChange={handleChange} checked={formData.hasIncomeCertificate === 'yes'} /> Yes</label>
                <label htmlFor="noIncomeCertificate"><input type="radio" id="noIncomeCertificate" name="hasIncomeCertificate" value="no" onChange={handleChange} checked={formData.hasIncomeCertificate === 'no'} /> No</label>
              </div>
            </div>
            {formData.hasIncomeCertificate === 'yes' && (
              <>
                <div>
                  <label htmlFor="hasBarcodeIncomeCertificate" className="block">Received certificate from Aaple Sarkar Seva Kendra or Aaple Sarkar Portal with a barcode?</label>
                  <div className="flex items-center space-x-4">
                    <label htmlFor="yesBarcodeIncomeCertificate"><input type="radio" id="yesBarcodeIncomeCertificate" name="hasBarcodeIncomeCertificate" value="yes" onChange={handleChange} checked={formData.hasBarcodeIncomeCertificate === 'yes'} /> Yes</label>
                    <label htmlFor="noBarcodeIncomeCertificate"><input type="radio" id="noBarcodeIncomeCertificate" name="hasBarcodeIncomeCertificate" value="no" onChange={handleChange} checked={formData.hasBarcodeIncomeCertificate === 'no'} /> No</label>
                  </div>
                </div>
                <div>
                  <label htmlFor="incomeCertificateNumber" className="block">Income Certificate No:</label>
                  <input type="text" id="incomeCertificateNumber" name="incomeCertificateNumber" value={formData.incomeCertificateNumber} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="incomeCertificateIssuingAuthority" className="block">Issuing Authority:</label>
                  <input type="text" id="incomeCertificateIssuingAuthority" name="incomeCertificateIssuingAuthority" value={formData.incomeCertificateIssuingAuthority} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="incomeCertificateFile" className="block">Upload Income Certificate:</label>
                  <input type="file" id="incomeCertificateFile" name="incomeCertificateFile" onChange={handleFileChange} className="border rounded-md p-2" />
                  <span>{formData.incomeCertificateFile ? formData.incomeCertificateFile.name : ''}</span>
                </div>
                <div>
                  <label htmlFor="incomeCertificateIssueDate" className="block">Date of Issue:</label>
                  <input type="date" id="incomeCertificateIssueDate" name="incomeCertificateIssueDate" value={formData.incomeCertificateIssueDate} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Domicile Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Domicile Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="domicileOfMaharashtra" className="block">Are you Domicile of Maharashtra / Maharashtra-Karnataka Border?</label>
              <input type="text" id="domicileOfMaharashtra" name="domicileOfMaharashtra" value={formData.domicileOfMaharashtra} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="hasDomicileCertificate" className="block">Do you have Domicile Certificate?</label>
              <div className="flex items-center space-x-4">
                <label htmlFor="yesDomicileCertificate"><input type="radio" id="yesDomicileCertificate" name="hasDomicileCertificate" value="yes" onChange={handleChange} checked={formData.hasDomicileCertificate === 'yes'} /> Yes</label>
                <label htmlFor="noDomicileCertificate"><input type="radio" id="noDomicileCertificate" name="hasDomicileCertificate" value="no" onChange={handleChange} checked={formData.hasDomicileCertificate === 'no'} /> No</label>
              </div>
            </div>
            {formData.hasDomicileCertificate === 'yes' && (
              <>
                <div>
                  <label htmlFor="hasBarcodeDomicileCertificate" className="block">Received certificate from Aaple Sarkar Seva Kendra or Aaple Sarkar Portal and have a barcode on it?</label>
                  <div className="flex items-center space-x-4">
                    <label htmlFor="yesBarcodeDomicileCertificate"><input type="radio" id="yesBarcodeDomicileCertificate" name="hasBarcodeDomicileCertificate" value="yes" onChange={handleChange} checked={formData.hasBarcodeDomicileCertificate === 'yes'} /> Yes</label>
                    <label htmlFor="noBarcodeDomicileCertificate"><input type="radio" id="noBarcodeDomicileCertificate" name="hasBarcodeDomicileCertificate" value="no" onChange={handleChange} checked={formData.hasBarcodeDomicileCertificate === 'no'} /> No</label>
                  </div>
                </div>
                <div>
                  <label htmlFor="domicileCertificateNumber" className="block">Domicile Certificate No:</label>
                  <input type="text" id="domicileCertificateNumber" name="domicileCertificateNumber" value={formData.domicileCertificateNumber} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="domicileCertificateIssuingAuthority" className="block">Issuing Authority:</label>
                  <input type="text" id="domicileCertificateIssuingAuthority" name="domicileCertificateIssuingAuthority" value={formData.domicileCertificateIssuingAuthority} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="domicileCertificateFile" className="block">Upload Domicile Certificate:</label>
                  <input type="file" id="domicileCertificateFile" name="domicileCertificateFile" onChange={handleFileChange} className="border rounded-md p-2" />
                  <span>{formData.domicileCertificateFile ? formData.domicileCertificateFile.name : ''}</span>
                </div>
                <div>
                  <label htmlFor="domicileCertificateIssueDate" className="block">Date of Issue:</label>
                  <input type="date" id="domicileCertificateIssueDate" name="domicileCertificateIssueDate" value={formData.domicileCertificateIssueDate} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
              </>
            )}
          </div>
        </div>


        {/* Personal Eligibility Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Personal Eligibility Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="isSalaried" className="block">Are you Salaried?</label>
              <input type="text" id="isSalaried" name="isSalaried" value={formData.isSalaried} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="hasDisability" className="block">Disability of any Type?</label>
              <input type="text" id="hasDisability" name="hasDisability" value={formData.hasDisability} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
          </div>
        </div>

        {/* Aadhaar Bank Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Aadhaar Bank Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="aadhaarLinkedBankAccountType" className="block">Is your Aadhaar-linked Bank Account a Jandhan/Yuva Account, or does the account have a limit on Withdrawal or Deposit?</label>
              <input type="text" id="aadhaarLinkedBankAccountType" name="aadhaarLinkedBankAccountType" value={formData.aadhaarLinkedBankAccountType} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="bankAccountNumber" className="block">Bank Account No.:</label>
              <input type="text" id="bankAccountNumber" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="ifscCode" className="block">IFS Code:</label>
              <input type="text" id="ifscCode" name="ifscCode" value={formData.ifscCode} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="branchName" className="block">Branch Name:</label>
              <input type="text" id="branchName" name="branchName" value={formData.branchName} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>

      </form>
    </div>
  );
};

export default PersonalInfo;
