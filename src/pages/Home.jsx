import React from 'react';

import formImage from '../assets/form.jpg';
import country11Image from '../assets/world.jpeg';
import germanyImage from '../assets/germany.jpg';
import serbiaImage from '../assets/serbia.jpg';
import ukImage from '../assets/uk.jpg';
import canadaImage from '../assets/canada.jpg';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        </div>
      </header>

      <main className="flex-grow mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mt-10 relative">
            <div className="relative mx-auto mb-8 rounded-[45px] w-full max-w-[1600px] mt-15 overflow-hidden h-[300px] sm:h-[400px] md:h-[590px]">
              <img 
                src={country11Image} 
                alt="Header" 
                className="object-cover w-full h-full" 
              />
        
              <div className="absolute bottom-8 left-8 flex items-center justify-start">
              <div class="bg-white mb-4 rounded-full flex items-center p-2 w-full max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search Colleges, Countries etc."
                  class="flex-grow px-4 sm:px-6 py-2 outline-none text-sm w-full"
                />
                <button class="bg-yellow-400 font-semibold text-purple-600 px-3 sm:px-4 py-2 rounded-full text-sm whitespace-nowrap ml-2">
                  Search
                </button>
              </div>
              </div>
            </div>
          </div>

          </div>

          <div className="mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 text-left">Four dream destinations</h2>
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
                    className="sm:h-80 md:ml-24 md:w-[400px] md:w-2/3  rounded-3xl"
                  />
                  <h3 className='ml-20'
                    style={{
                      position: 'absolute',
                      top: '10%',
                      left: '19%',
                      
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



            {/* <div class="w-full lg:w-1/2 px-4 lg:px-0 text-center lg:text-left mb-8 lg:mb-0">
  <p class="text-3xl md:text-4xl lg:text-5xl font-bold italic text-black" >
    Begin an exciting academic journey in these varied and welcoming study locations!
  </p>
</div> */}

          </div>



          <div class="bg-gray-200 p-4 w-full min-h-[350px]">
  <div class="flex flex-col md:flex-row justify-center mt-12 space-y-6 md:space-y-0 md:space-x-6 lg:space-x-28">

    <div class="bg-white rounded-[25px] p-6 flex flex-col items-start space-y-3 w-full md:w-1/2 lg:w-1/3">
      <div class="text-purple-600">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      </div>
      <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Can't decide where to study</h2>
      <p class="text-sm text-gray-600 leading-tight">Answer 5 quick questions to get personalised content and course recommendations</p>
      <button class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full text-sm mt-2 w-full md:w-auto">Let us guide you</button>
    </div>

    <div class="bg-white rounded-[25px] p-6 flex flex-col items-start space-y-3 w-full md:w-1/2 lg:w-1/3">
      <div class="text-purple-600">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd"/>
        </svg>
      </div>
      <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Cost of living calculator</h2>
      <p class="text-sm text-gray-600 leading-tight">Estimate how much you will need to cover your expenses including cost of living comparison for various country and accommodation options.</p>
      <button class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full text-sm mt-2 w-full md:w-auto">Calculate now</button>
    </div>

  </div>
</div>







          <div className="flex flex-col lg:flex-row justify-between">
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
            <div className="mt-8 lg:mt-0 lg:ml-8 mb-6 lg:mb-0"> {/* Updated this line */}
          <img src={formImage} alt="" className="object-cover rounded-lg w-full max-w-[440px] h-[510px]" />
        </div>
          </div>
        {/* </div> */}
      </main>
    </div>
  );
}

export default Home;