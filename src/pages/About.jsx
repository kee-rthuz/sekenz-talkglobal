import React from "react";
import MainImage from '../assets/about.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import formImage from '../assets/form.jpg';
import { ContactForm } from "./Contact";

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
};

export default AboutPage;