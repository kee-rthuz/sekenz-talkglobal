import React from 'react';

import formImage from '../assets/form.jpg';
import country11Image from '../assets/country1.jpg';
import germanyImage from '../assets/germany.jpg';
import serbiaImage from '../assets/serbia.jpg';
import ukImage from '../assets/uk.jpg';
import canadaImage from '../assets/canada.jpg';
import { ContactForm} from './Contact';

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

      <div className="bg-white px-4 sm:px-6 py-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start">
          <ContactForm />
          <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/2">
            <img src={formImage} alt="" className="object-cover rounded-lg w-full max-w-[440px] h-[510px] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countries;