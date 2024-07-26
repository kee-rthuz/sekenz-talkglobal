import React from 'react';

import formImage from '../assets/form.jpg';
import country11Image from '../assets/country1.jpg';
import germanyImage from '../assets/germany.jpg';
import serbiaImage from '../assets/serbia.jpg';
import ukImage from '../assets/uk.jpg';
import canadaImage from '../assets/canada.jpg';

function Countries() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 bg-white mt-10 relative">
        <div className="relative mx-auto mb-8 rounded-[45px] w-full max-w-[1600px] mt-15 overflow-hidden h-[300px] sm:h-[400px] md:h-[590px]">
          <img src={country11Image} alt="Header" className="object-cover w-full h-full" />
        </div>
        <h3 className="absolute bottom-16 sm:bottom-24 md:bottom-48 left-4 md:left-20 text-xl sm:text-3xl md:text-5xl font-bold text-white bg-opacity-50 px-3 sm:px-5 py-2 sm:py-3 rounded text-left" style={{ fontFamily: 'Anton, sans-serif' }}>
          Find Study Abroad Destinations
        </h3>
        <h3 className="absolute bottom-4 sm:bottom-12 md:bottom-32 left-4 md:left-20 text-xl sm:text-3xl md:text-5xl font-bold text-white bg-opacity-50 px-3 sm:px-5 py-2 sm:py-3 rounded text-left" style={{ fontFamily: 'Anton, sans-serif' }}>
          Apply now for 2024 Intakes
        </h3>
      </div>

      <div className="mb-8 sm:mb-16">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-left">Four dream destinations</h1>
      </div>

      <div>
        <div className="grid lg:grid-cols-3 gap-5 mb-12">
          {['Germany', 'Serbia', 'UK'].map((country, index) => (
            <div key={country} className="relative flex flex-col items-center sm:mb-0">
              <img 
                src={[germanyImage, serbiaImage, ukImage][index]} 
                alt={country} 
                className="sm:h-80 w-full md:w-2/3 object-cover rounded-3xl"
              />
              <h3 className="absolute top-4 text-xl sm:text-2xl font-semibold text-white bg-opacity-50 px-4 py-2 rounded">
                {country}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-12 mb-24">
                <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
                  <img
                    src={canadaImage}
                    alt="Canada"
                    className="sm:h-80 md:ml-20 md:w-[320px] md:w-2/3  rounded-3xl"
                  />
                  <h3 className='ml-20'
                    style={{
                      position: 'absolute',
                      top: '10%',
                      left: '17%',
                      
                      fontSize: '1.25rem', // Adjust as needed
                      fontWeight: '600',
                      color: 'white',
                      
                    }}
                  >
                    Canada
                  </h3>
                </div>

                    <div className="w-full lg:w-1/2 px-4 lg:px-0 text-center lg:text-left mb-8 lg:mb-0">
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-black" style={{ fontFamily: 'Risque' }}>
                        Begin an exciting academic journey in these varied and welcoming study locations!
                      </p>
                    </div>
            </div>


      </div>

      {/* <div className="flex flex-col lg:flex-row justify-between">
        <div className="text-left bg-white p-4 sm:p-10 max-w-4xl w-full mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Talks Global can help you</h2>
          <p className="mb-4 text-lg sm:text-xl">
            Enter your details and one of our expert counsellors will reach out to you so we can connect you to the right course, country, university – and even scholarships!
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <label className="block mb-1">First Name</label>
                <input type="text" className="w-full p-2 border-2 border-orange-200 rounded" />
              </div>
              <div>
                <label className="block mb-1">Last Name</label>
                <input type="text" className="w-full p-2 border-2 border-orange-200 rounded" />
              </div>
            </div>
            <div>
              <label className="block mb-1">E-mail Address</label>
              <input type="email" className="w-full p-2 border-2 border-orange-200 rounded" />
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <div className="flex">
                <input type="text" className="w-20 sm:w-24 p-2 border-2 border-orange-200 rounded-l text-center" value="+ 91" readOnly />
                <input type="text" className="w-full p-2 border-2 border-orange-200 rounded-r" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <label className="block mb-1">Your preferred study destination</label>
                <select className="w-full p-2 border-2 border-orange-200 rounded bg-white">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">When do you plan to study</label>
                <select className="w-full p-2 border-2 border-orange-200 rounded bg-white">
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <label className="block mb-1">Preferred study level</label>
                <select className="w-full p-2 border-2 border-orange-200 rounded bg-white">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">How would you fund your education</label>
                <select className="w-full p-2 border-2 border-orange-200 rounded bg-white">
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-5 w-5 mr-3" />
              <label>I agree to Talks Global Terms and Conditions</label>
            </div>
            <button className="bg-amber-500 text-white py-3 px-10 sm:px-20 rounded-full w-full sm:w-auto">Submit</button>
          </form>
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-8 mb-6 lg:mb-0">
          <img src={formImage} alt="" className="object-cover rounded-lg w-full max-w-[440px] h-[510px] mx-auto lg:mx-0" />
        </div>
      </div> */}
    </div>
  );
}

export default Countries;