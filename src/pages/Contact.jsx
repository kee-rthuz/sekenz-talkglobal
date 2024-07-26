

// import React from 'react';
// import ContactImg from '../assets/contact.jpg';
// import Call from '../assets/call.png';
// import Locat from '../assets/location.png';
// import Email from '../assets/email.png';

// const Contact = () => {
//   return (
//     <div className="bg-white">
//       {/* Background Image */}
//       <div className="relative mb-10">
//         <img src={ContactImg} alt="Contact" className="w-full h-auto object-cover" />
//       </div>

//       {/* Main Content */}
//       <div className="min-h-screen flex items-center justify-center px-4 py-8">
//         <div className="container mx-auto">
//           <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
//             {/* Left Column (Contact Info) */}
//             <div className="md:w-1/2 p-8 bg-gray-50">
//               <h1 className="text-4xl font-bold mb-6">Stay Tuned & Let's Get In Touch With Us</h1>
//               <div className="space-y-4">
//                 <ContactItem 
//                   icon={Locat} 
//                   text="Hash360 Technologies 18/26 Ground Floor, MJV Mall, Pada South, Karunagapally, Kollam, Kerala 690518" 
//                 />
//                 <ContactItem 
//                   icon={Email} 
//                   text="info@hash360tech.com" 
//                 />
//                 <ContactItem 
//                   icon={Call} 
//                   text="+91 8086665500" 
//                 />
//               </div>
//             </div>

//             {/* Right Column (Contact Form) */}
//       <div className="text-left  max-w-4xl w-full mt-16">
//         <h2 className="text-4xl font-bold mb-6">Talks Global can help you</h2>
//         <p className="mb-8 text-xl">
//           Enter your details and one of our expert counsellors will reach out to you so we can connect
//           you to the right course, country, university – and even scholarships!
//         </p>
//         <form className="space-y-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             <div>
//               <label className="block mb-2 text-base font-medium">First Name</label>
//               <input type="text" className="w-full p-3 border-2 border-orange-200 rounded-lg text-lg" />
//             </div>
//             <div>
//               <label className="block mb-2 text-base font-medium">Last Name</label>
//               <input type="text" className="w-full p-3 border-2 border-orange-200 rounded-lg text-lg" />
//             </div>
//           </div>
//           <div>
//             <label className="block mb-2 text-base font-medium">E-mail Address</label>
//             <input type="email" className="w-full p-3 border-2 border-orange-200 rounded-lg text-lg" />
//           </div>
//           <div>
//             <label className="block mb-2 text-base font-medium">Phone Number</label>
//             <div className="flex">
//               <input type="text" className="w-20 p-3 border-2 border-orange-200 rounded-l-lg text-center text-lg" value="+91" readOnly />
//               <input type="text" className="w-full p-3 border-2 border-orange-200 rounded-r-lg border-l-0 text-lg" />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             <div>
//               <label className="block mb-2 text-base font-medium">Your preferred study destination</label>
//               <select className="w-full p-3 border-2 border-orange-200 rounded-lg bg-white text-lg">
//                 <option>Select</option>
//               </select>
//             </div>
//             <div>
//               <label className="block mb-2 text-base font-medium">When do you plan to study</label>
//               <select className="w-full p-3 border-2 border-orange-200 rounded-lg bg-white text-lg">
//                 <option>Select</option>
//               </select>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             <div>
//               <label className="block mb-2 text-base font-medium">Preferred study level</label>
//               <select className="w-full p-3 border-2 border-orange-200 rounded-lg bg-white text-lg">
//                 <option>Select</option>
//               </select>
//             </div>
//             <div>
//               <label className="block mb-2 text-base font-medium">How would you fund your education</label>
//               <select className="w-full p-3 border-2 border-orange-200 rounded-lg bg-white text-lg">
//                 <option>Select</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <input type="checkbox" className="mr-3 h-5 w-5" />
//             <label className="text-base">I agree to Talks Global Terms and Conditions</label>
//           </div>
//           <button className="bg-amber-500 text-white py-3 px-12 rounded-full text-xl font-medium">Submit</button>
//         </form>
//       </div>
//           </div>

//           {/* Google Maps Embed */}
//           <div className="mt-8">
//             <iframe
//               className="w-full h-96 md:h-screen rounded-lg shadow-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.111941395182!2d76.52887527376132!3d9.053552991008788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06032501487217%3A0xba344649163709f9!2sHash360%20Technologies!5e0!3m2!1sen!2sin!4v1720540647976!5m2!1sen!2sin"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const ContactItem = ({ icon, text }) => (
//   <div className="flex items-center">
//     <img src={icon} alt="" className="bg-blue-500 rounded-full p-2 mr-4 h-12 w-12 object-contain" />
//     <span className="text-gray-700">{text}</span>
//   </div>
// );

// const InputField = ({ label, id, type, placeholder }) => (
//   <div>
//     <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
//     <input
//       id={id}
//       type={type}
//       placeholder={placeholder}
//       className="shadow appearance-none border rounded-full w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
//     />
//   </div>
// );

// export default Contact;







import React from 'react';
import ContactImg from '../assets/contact.jpeg';
import Call from '../assets/call.png';
import Locat from '../assets/location.png';
import Email from '../assets/email.png';
const Contact = () => {
  return (
    <div className="bg-white">

<div className="relative mb-10 mx-auto w-full max-w-[90%] lg:max-w-[80%] xl:max-w-[1580px]">
  <img 
    src={ContactImg} 
    alt="Contact" 
    className="w-full h-[500px] rounded-[32px] mt-8 md:mt-12 lg:mt-14 object-cover "
  />
</div>
      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left Column (Contact Info) */}
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
      <p className="text-gray-700">kerala,india</p>
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

            {/* Right Column (Contact Form) */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-4xl font-bold mb-6">Talks Global can help you</h2>
              <p className="mb-8 text-lg">
                Enter your details and one of our expert counsellors will reach out to you so we can connect you to the right course, country, university – and even scholarships!
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField label="First Name" id="firstName" type="text" />
                  <InputField label="Last Name" id="lastName" type="text" />
                </div>
                <InputField label="E-mail Address" id="email" type="email" />
                <div>
                  <label className="block mb-2 text-base font-medium">Phone Number</label>
                  <div className="flex">
                    <input type="text" className="w-20 p-3 border-2 border-orange-200 rounded-l-lg text-center text-lg" value="+91" readOnly />
                    <input type="text" className="w-full p-3 border-2 border-orange-200 rounded-r-lg border-l-0 text-lg" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputSelect label="Your preferred study destination" />
                  <InputSelect label="When do you plan to study" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputSelect label="Preferred study level" />
                  <InputSelect label="How would you fund your education" />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5" />
                  <label className="text-base">I agree to Talks Global Terms and Conditions</label>
                </div>
                <button className="bg-amber-500 text-white py-3 px-12 rounded-full text-xl font-medium">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactItem = ({ icon, text }) => (
    <div className="flex items-start">
      <img src={icon} alt="" className="w-6 h-6 text-purple-600 mr-3 mt-1" />
      <div>{text}</div>
    </div>
  );

const InputField = ({ label, id, type }) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-base font-medium">{label}</label>
    <input
      id={id}
      type={type}
      className="w-full p-3 border-2 border-orange-200 rounded-lg text-lg"
    />
  </div>
);

const InputSelect = ({ label }) => (
  <div>
    <label className="block mb-2 text-base font-medium">{label}</label>
    <select className="w-full p-3 border-2 border-orange-200 rounded-lg bg-white text-lg">
      <option>Select</option>
    </select>
  </div>
);

export default Contact;