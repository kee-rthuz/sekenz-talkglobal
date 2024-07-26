import React from "react";
import MainImage from '../assets/about.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import formImg from '../assets/formimg.jpeg';


const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:px-28">

      <div className="relative mb-10 mx-auto w-full max-w-[90%] lg:max-w-[80%] xl:max-w-[1580px]">
        <img
          src={MainImage}
          alt="About Talks Global"
          className="w-full h-[500px] rounded-[32px] mt-8 md:mt-12 lg:mt-14 object-cover"
        />
            <div 
              className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl md:rounded-[40px]">
            </div>
        <div className="absolute bottom-4 md:bottom-10 left-4 md:left-30 text-white p-4">
          <h1 className="text-2xl md:text-4xl font-bold">About Talks Global</h1>
          <h6 className="text-lg md:text-xl">snslnblslnbk</h6>
        </div>
      </div>
      <div className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p className="mb-4">
          Talks Global is a leader in global education services. As an Indian
          listed company, we have operations in 4 countries and our websites
          attract so many visits a year. We specialize in combining human
          expertise with our leading digital platform to help people get
          accepted into their ideal course, take an English language test or
          learn English in our schools.
        </p>
        <p className="mb-4">
          Our teams are side by side with our customers every day, at every step
          from course search through to starting their dream course or career.
          Our data insights are relied upon by organizations around the world to
          help ensure decisions are informed by the diverse needs, challenges
          and motivations of students.
        </p>
        <p className="mb-4">
          Most of all, we are proud of our people. It is our trusted people and
          processes which help our customers turn their study or English goals
          into a launchpad for their career.
        </p>
      </div>
      <div className="mt-8 md:mt-10">
        <h1 className="text-xl md:text-2xl font-bold mb-4">
          About Talks Global Student Placement
        </h1>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Our premise is simple; International education thrives when students
          are matched with the right country, with the right course, with the
          right support system. Talks Global is the only organization by
          students' sides, from their first course search, until they have found
          their feet in their new country. Our team of trusted education experts
          across the world, combined with our global digital platform, ensures
          that students can connect to life-changing study opportunities. We are
          proudly student-first. When the pandemic took hold, our counsellors
          stepped up to provide guidance to students and their families and help
          them navigate uncertainty. Our trusted human connections on a global
          scale, facilitated by our investment in technology and customer
          research, ensures the best matches for students and institutions. And
          now, our teams can use the insights from our leading digital platform
          to help students gain acceptance into the right course, faster.
        </p>
      </div>
      <div className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Learn more</h2>
        <div className="flex flex-wrap gap-4 md:gap-10 justify-between">
          {["Why Choose Talks Global", "Study Abroad Counselling", "What We Do", "Living Abroad Support"].map((text, index) => (
            <button key={index} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] h-16 flex items-center justify-between border-2 rounded-md border-gray-300 px-4 text-sm md:text-lg hover:bg-gray-100 transition-colors duration-200">
              {text}
              <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
            </button>
          ))}
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

          <div className="w-full lg:w-1/3 px-4 flex justify-center lg:justify-end">
            <div className="max-w-sm lg:max-w-full">
              <img 
                src={formImg} 
                alt="Square" 
                className="rounded-lg w-full max-w-xs lg:max-w-sm xl:max-w-md xl:ml-64"
              />
            </div>
         </div>

      </div> */}
    </div>
  );
};

export default AboutPage;