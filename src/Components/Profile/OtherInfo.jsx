import React, { useState } from 'react';

const OtherInfo = () => {
    const [parentDetails, setParentDetails] = useState({
        isFatherAlive: true,
        fatherName: '',
        fatherOccupation: '',
        isFatherSalaried: 'no',
        isMotherAlive: true,
        motherName: '',
        motherOccupation: '',
        isMotherSalaried: 'no',
    });

    const handleParentDetailsChange = (e) => {
        const { name, value, type } = e.target;
        setParentDetails(prevState => ({
            ...prevState,
            [name]: type === 'radio' ? value === 'true' : value
        }));
    };

    return (
        <div className="flex-grow p-8">
            <div className="space-y-6">
                <h3 className="text-lg font-bold">Parent's/Guardian's Details</h3>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <label htmlFor="isFatherAlive" className="block mr-4">Is Father Alive?</label>
                        <input
                            type="radio"
                            id="fatherAliveYes"
                            name="isFatherAlive"
                            value="true"
                            checked={parentDetails.isFatherAlive}
                            onChange={handleParentDetailsChange}
                            className="mr-2"
                        />
                        <label htmlFor="fatherAliveYes" className="mr-4">Yes</label>
                        <input
                            type="radio"
                            id="fatherAliveNo"
                            name="isFatherAlive"
                            value="false"
                            checked={!parentDetails.isFatherAlive}
                            onChange={handleParentDetailsChange}
                            className="mr-2"
                        />
                        <label htmlFor="fatherAliveNo">No</label>
                    </div>
                    {parentDetails.isFatherAlive && (
                        <div className="flex items-center gap-6">
                            <label htmlFor="fatherName" className="block">Father Name:</label>
                            <input
                                type="text"
                                id="fatherName"
                                name="fatherName"
                                value={parentDetails.fatherName}
                                onChange={handleParentDetailsChange}
                                className="border rounded-md p-2 mr-4 w-64"
                            />
                            <label htmlFor="fatherOccupation" className="block">Occupation:</label>
                            <select
                                id="fatherOccupation"
                                name="fatherOccupation"
                                value={parentDetails.fatherOccupation}
                                onChange={handleParentDetailsChange}
                                className="border rounded-md p-2 mr-4"
                            >
                                <option value="">Select Occupation</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Business">Business</option>
                                <option value="Defence Service">Defence Service</option>
                                <option value="Government Servant">Government Servant</option>
                                <option value="Service">Service</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Others">Others</option>
                            </select>
                            <label htmlFor="isFatherSalaried" className="block">Is Salaried?</label>
                            <select
                                id="isFatherSalaried"
                                name="isFatherSalaried"
                                value={parentDetails.isFatherSalaried}
                                onChange={handleParentDetailsChange}
                                className="border rounded-md p-2"
                            >
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                        </div>
                    )}
                </div>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <label htmlFor="isMotherAlive" className="block mr-4">Is Mother Alive?</label>
                        <input
                            type="radio"
                            id="motherAliveYes"
                            name="isMotherAlive"
                            value="true"
                            checked={parentDetails.isMotherAlive}
                            onChange={handleParentDetailsChange}
                            className="mr-2"
                        />
                        <label htmlFor="motherAliveYes" className="mr-4">Yes</label>
                        <input
                            type="radio"
                            id="motherAliveNo"
                            name="isMotherAlive"
                            value="false"
                            checked={!parentDetails.isMotherAlive}
                            onChange={handleParentDetailsChange}
                            className="mr-2"
                        />
                        <label htmlFor="motherAliveNo">No</label>
                    </div>
                    {parentDetails.isMotherAlive && (
                        <div className="flex items-center gap-6">
                            <label htmlFor="motherName" className="block">Mother Name:</label>
                            <input
                                type="text"
                                id="motherName"
                                name="motherName"
                                value={parentDetails.motherName}
                                onChange={handleParentDetailsChange}
                                className="border rounded-md p-2 mr-4 w-64"
                            />
                            <label htmlFor="motherOccupation" className="block">Occupation:</label>
                            <select
                                id="motherOccupation"
                                name="motherOccupation"
                                value={parentDetails.motherOccupation}
                                onChange={handleParentDetailsChange}
                                className="border rounded-md p-2 mr-4"
                            >
                                <option value="">Select Occupation</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Business">Business</option>
                                <option value="Defence Service">Defence Service</option>
                                <option value="Government Servant">Government Servant</option>
                                <option value="Service">Service</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Housewife">Housewife</option>
                                <option value="Others">Others</option>
                            </select>

                            <label htmlFor="isMotherSalaried" className="block">Is Salaried?</label>
                            <select
                                id="isMotherSalaried"
                                name="isMotherSalaried"
                                value={parentDetails.isMotherSalaried}
                                onChange={handleParentDetailsChange}
                                className="border rounded-md p-2"
                            >
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
        </div>

);
};

export default OtherInfo;
