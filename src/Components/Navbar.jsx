import React from 'react';
import AapleSarkarPic from '../Pics/AapleSarkarPic.png';
import Mahagov from '../Pics/mahagov.jpg';
import Mahadbt from '../Pics/mahadbt.png';

const HowToApply = () => <div className='bg-red-500 p-3'>How to Apply Online ?</div>;
const PostMatricScholarship = () => <div>Post Matric Scholarship</div>;
const PreMatricScholarship = () => <div>Pre Matric Scholarship</div>;
const PensionSchemes = () => <div>Pension Schemes</div>;
const FarmerSchemes = () => <div>Farmer Schemes</div>;
const LabourSchemes = () => <div>Labour Schemes</div>;
const SpecialAssistanceSchemes = () => <div>Special Assistance Schemes</div>;

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center border px-8">
        <div className="flex-initial">
          <div className="flex">
            <img src={AapleSarkarPic} alt="Aaple Sarkar" className="h-16 w-auto" />
            <img src={Mahagov} alt="Mahagov" className="h-16 w-auto ml-4" />
          </div>
        </div>
        <div className="flex-auto text-center">
          <img src={Mahadbt} alt="Mahadbt" className="h-26 w-auto mx-auto" />
        </div>
      </div>
      <ul className="flex justify-around items-center border-t py-3 px-8 bg-blue-950 text-white">
        <li><HowToApply /></li>
        <div className='flex justify-around gap-10 items-center border py-3 px-8 bg-blue-950 text-white'>
        <li><PostMatricScholarship /></li>
        <li><PreMatricScholarship /></li>
        <li><PensionSchemes /></li>
        <li><FarmerSchemes /></li>
        <li><LabourSchemes /></li>
        <li><SpecialAssistanceSchemes /></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
