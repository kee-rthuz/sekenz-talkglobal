import React, { useState } from 'react';
import ContactImg from '../assets/contact.jpeg';
import handleSubmit from '../components/FormSubmitHandler';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    studyTime: '',
    studyLevel: '',
    funding: '',
    agreeTerms: false
  });
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required.';
    if (!formData.lastName) errors.lastName = 'Last Name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    if (!formData.phone) errors.phone = 'Phone number is required.';
    if (!formData.agreeTerms) errors.agreeTerms = 'You must agree to the terms and conditions.';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setError('');
    try {
      await handleSubmit(e, formData, setError);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        destination: '',
        studyTime: '',
        studyLevel: '',
        funding: '',
        agreeTerms: false
      });
      alert('Thanks for contacting us, we will be in touch with you soon');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="md:w-1/2 p-8">
      <h2 className="text-4xl font-bold mb-6">Talks Global can help you</h2>
      <p className="mb-8 text-lg">
        Enter your details and one of our expert counsellors will reach out to you so we can connect you to the right course, country, university – and even scholarships!
      </p>
      <form className="space-y-6" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField label="First Name" id="firstName" type="text" value={formData.firstName} onChange={handleChange} error={validationErrors.firstName} />
          <InputField label="Last Name" id="lastName" type="text" value={formData.lastName} onChange={handleChange} error={validationErrors.lastName} />
        </div>
        <InputField label="E-mail Address" id="email" type="email" value={formData.email} onChange={handleChange} error={validationErrors.email} />
        <div>
          <label className="block mb-2 text-base font-medium">Phone Number</label>
          <div className="flex">
            <input type="text" className="w-20 p-3 border-2 border-orange-200 rounded-l-lg text-center text-lg" value="+91" readOnly />
            <input type="text" id="phone" className="w-full p-3 border-2 border-orange-200 rounded-r-lg border-l-0 text-lg" value={formData.phone} onChange={handleChange} />
          </div>
          {validationErrors.phone && <p className="text-red-500 text-sm">{validationErrors.phone}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputSelect label="Your preferred study destination" id="destination" value={formData.destination} onChange={handleChange} />
          <InputSelect label="When do you plan to study" id="studyTime" value={formData.studyTime} onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputSelect label="Preferred study level" id="studyLevel" value={formData.studyLevel} onChange={handleChange} />
          <InputSelect label="How would you fund your education" id="funding" value={formData.funding} onChange={handleChange} />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeTerms"
            className="mr-3 h-5 w-5"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />
          <label htmlFor="agreeTerms" className="text-base">I agree to Talks Global Terms and Conditions</label>
        </div>
        {validationErrors.agreeTerms && <p className="text-red-500 text-sm">{validationErrors.agreeTerms}</p>}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-amber-500 text-white py-3 px-12 rounded-full text-xl font-medium">Submit</button>
      </form>
    </div>
  );
};

const InputField = ({ label, id, type, value, onChange, error }) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-base font-medium">{label}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full p-3 border-2 border-orange-200 rounded-lg text-lg ${error ? 'border-red-500' : ''}`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const InputSelect = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-base font-medium">{label}</label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full p-3 border-2 border-orange-200 rounded-lg bg-white text-lg"
    >
      <option value="">Select</option>
    </select>
  </div>
);

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="relative mb-10 mx-auto w-full max-w-[90%] lg:max-w-[80%] xl:max-w-[1580px]">
        <img 
          src={ContactImg} 
          alt="Contact" 
          className="w-full h-[500px] rounded-[32px] mt-8 md:mt-12 lg:mt-14 object-cover"
        />
      </div>
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold mb-6">Have Questions?<br/>Don't Hesitate to Contact Us</h1>
              <p className="mb-6 text-lg">
                Our team is here to help! Whether you need more information or have specific questions, feel free to reach out to us anytime.
              </p>
              <div className="space-y-4 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-purple-600 font-semibold">Location</span>
                    <p className="text-gray-700">kerala, india</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-purple-600 font-semibold">Quick Contact</span>
                    <p className="text-gray-700">Phone: +91 1234567890</p>
                    <p className="text-gray-700">E-mail: talksglobal@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
