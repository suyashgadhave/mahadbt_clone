import React, { useState } from 'react';

const AddressInfo = () => {
  const [permanentAddress, setPermanentAddress] = useState({
    address: '',
    state: '',
    district: '',
    taluka: '',
    village: '',
    pincode: '',
    isSameAsPermanent: false,
  });

  const [correspondenceAddress, setCorrespondenceAddress] = useState({
    address: '',
    state: '',
    district: '',
    taluka: '',
    village: '',
    pincode: '',
  });

  const handlePermanentAddressChange = (e) => {
    const { name, value } = e.target;
    setPermanentAddress({
      ...permanentAddress,
      [name]: value,
    });
    if (permanentAddress.isSameAsPermanent) {
      setCorrespondenceAddress({
        ...correspondenceAddress,
        [name]: value,
      });
    }
  };

  const handleCorrespondenceAddressChange = (e) => {
    const { name, value } = e.target;
    setCorrespondenceAddress({
      ...correspondenceAddress,
      [name]: value,
    });
  };

  const handleSameAsPermanentChange = (e) => {
    const isChecked = e.target.value === 'true';
    setPermanentAddress({
      ...permanentAddress,
      isSameAsPermanent: isChecked,
    });
    if (isChecked) {
      setCorrespondenceAddress({
        ...permanentAddress,
        isSameAsPermanent: isChecked,
      });
    } else {
      setCorrespondenceAddress({
        address: '',
        state: '',
        district: '',
        taluka: '',
        village: '',
        pincode: '',
      });
    }
  };

  return (
    <div className="flex-grow p-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Permanent Address Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="permanentAddress" className="block">Address:</label>
              <input type="text" id="permanentAddress" name="address" value={permanentAddress.address} onChange={handlePermanentAddressChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="permanentState" className="block">State:</label>
              <input type="text" id="permanentState" name="state" value={permanentAddress.state} onChange={handlePermanentAddressChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="permanentDistrict" className="block">District:</label>
              <input type="text" id="permanentDistrict" name="district" value={permanentAddress.district} onChange={handlePermanentAddressChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="permanentTaluka" className="block">Taluka:</label>
              <input type="text" id="permanentTaluka" name="taluka" value={permanentAddress.taluka} onChange={handlePermanentAddressChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="permanentVillage" className="block">Village:</label>
              <input type="text" id="permanentVillage" name="village" value={permanentAddress.village} onChange={handlePermanentAddressChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="permanentPincode" className="block">Pincode:</label>
              <input type="text" id="permanentPincode" name="pincode" value={permanentAddress.pincode} onChange={handlePermanentAddressChange} className="border rounded-md p-2 w-full" />
            </div>
          </div>
          <div className="flex items-center">
            <label className="block mr-4">Is Correspondence Address same as Permanent?</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="sameAsPermanentYes"
                name="sameAsPermanent"
                value={true}
                checked={permanentAddress.isSameAsPermanent}
                onChange={handleSameAsPermanentChange}
                className="mr-2"
              />
              <label htmlFor="sameAsPermanentYes" className="mr-4">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="sameAsPermanentNo"
                name="sameAsPermanent"
                value={false}
                checked={!permanentAddress.isSameAsPermanent}
                onChange={handleSameAsPermanentChange}
                className="mr-2"
              />
              <label htmlFor="sameAsPermanentNo">No</label>
            </div>
          </div>

        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Correspondence Address Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="correspondenceAddress" className="block">Address:</label>
              <input type="text" id="correspondenceAddress" name="address" value={correspondenceAddress.address} onChange={handleCorrespondenceAddressChange} className="border rounded-md p-2 w-full" disabled={permanentAddress.isSameAsPermanent} />
            </div>
            <div>
              <label htmlFor="correspondenceState" className="block">State:</label>
              <input type="text" id="correspondenceState" name="state" value={correspondenceAddress.state} onChange={handleCorrespondenceAddressChange} className="border rounded-md p-2 w-full" disabled={permanentAddress.isSameAsPermanent} />
            </div>
            <div>
              <label htmlFor="correspondenceDistrict" className="block">District:</label>
              <input type="text" id="correspondenceDistrict" name="district" value={correspondenceAddress.district} onChange={handleCorrespondenceAddressChange} className="border rounded-md p-2 w-full" disabled={permanentAddress.isSameAsPermanent} />
            </div>
            <div>
              <label htmlFor="correspondenceTaluka" className="block">Taluka:</label>
              <input type="text" id="correspondenceTaluka" name="taluka" value={correspondenceAddress.taluka} onChange={handleCorrespondenceAddressChange} className="border rounded-md p-2 w-full" disabled={permanentAddress.isSameAsPermanent} />
            </div>
            <div>
              <label htmlFor="correspondenceVillage" className="block">Village:</label>
              <input type="text" id="correspondenceVillage" name="village" value={correspondenceAddress.village} onChange={handleCorrespondenceAddressChange} className="border rounded-md p-2 w-full" disabled={permanentAddress.isSameAsPermanent}
              />
            </div>
            <div>
              <label htmlFor="correspondencePincode" className="block">Pincode:</label>
              <input type="text" id="correspondencePincode" name="pincode" value={correspondenceAddress.pincode} onChange={handleCorrespondenceAddressChange} className="border rounded-md p-2 w-full" disabled={permanentAddress.isSameAsPermanent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
