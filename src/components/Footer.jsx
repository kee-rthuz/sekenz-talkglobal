import React from 'react';
import phoneIcon from '../assets/928412_call_communication_contact_phone_service_icon.png';
import emailIcon from '../assets/8665305_envelope_email_icon.png';
import locationIcon from '../assets/352521_location_on_icon.png';
import instagramIcon from '../assets/8679433_instagram_fill_icon.png';
import linkedinIcon from '../assets/216394_linkedin_social_icon.png';
import facebookIcon from '../assets/facebook_icon.png';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-500 flex flex-col px-4 sm:px-6 lg:px-10 py-6">
      <div className="mb-6">
      <img src={logo} alt="Talks Global Logo" className="h-20 w-auto sm:h-24 lg:h-32" />      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">About Talks Global</h2>
          <ul className="text-white space-y-2">
            <li>Why choose Talks Global</li>
            <li>Study abroad counselling</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">Useful links</h2>
          <ul className="text-white space-y-2">
            <li>How to find a course</li>
            <li>Study abroad courses</li>
            <li>Cost of living</li>
          </ul>
        </div>
        <div className="space-y-6 lg:border-l lg:border-white lg:pl-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={phoneIcon} alt="Phone Icon" className="h-5 w-5" />
              <span className="text-white font-bold">+91 1234567890</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={emailIcon} alt="Email Icon" className="h-5 w-5" />
              <span className="text-white font-bold">talksglobal@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={locationIcon} alt="Location Icon" className="h-5 w-5" />
              <span className="text-white font-bold">Kerala, India</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://instagram.com" aria-label="Instagram" className="text-white">
              <img src={instagramIcon} alt="Instagram Icon" className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white">
              <img src={linkedinIcon} alt="LinkedIn Icon" className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="text-white">
              <img src={facebookIcon} alt="Facebook Icon" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;