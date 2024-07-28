import React from 'react';

import academicCap from '../assets/academic-cap.png';
import calendar from '../assets/calendar.png';
import chartBar from '../assets/chart-bar.png';
import checkCircle from '../assets/check-circle.png';
import locationMarker from '../assets/location-marker.png';
import headerImage from '../assets/courses.jpg';
import formImage from '../assets/form.jpg';
import { ContactForm } from './Contact';

const iconMap = {
  "academic-cap": academicCap,
  "calendar": calendar,
  "chart-bar": chartBar,
  "check-circle": checkCircle,
  "location-marker": locationMarker,
};

function CourseCard({ course }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col w-full max-w-[350px] h-[400px] justify-between">
      <div>
        <h2 className="text-xl font-bold mb-1 text-left">{course.title}</h2>
        <h3 className="text-lg mb-6 text-gray-600 text-left">{course.university}</h3>
        <ul className="space-y-4">
          {course.details.map((detail, index) => (
            <li key={index} className="flex items-center text-gray-700 text-base">
              <img src={iconMap[detail.icon]} alt={detail.icon} className="w-5 h-5 mr-4" />
              {detail.text}
            </li>
          ))}
        </ul>
      </div>
      <button className="mt-6 bg-amber-400 text-white py-3 px-6 rounded-full text-base font-semibold hover:bg-amber-500 transition-colors">
        Find out more
      </button>
    </div>
  );
}

function Courses() {
  const courses = [
    {
      title: "MBBS",
      university: "University of Birmingham",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 101" },
        { icon: "academic-cap", text: "Bachelors Degree" },
        { icon: "location-marker", text: "Birmingham, United Kingdom" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
    {
      title: "BSc Nursing",
      university: "University of Birmingham",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 101" },
        { icon: "academic-cap", text: "Bachelors Degree" },
        { icon: "location-marker", text: "Birmingham, United Kingdom" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
    {
      title: "Bachelor of Business Administration",
      university: "University of Birmingham",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 101" },
        { icon: "academic-cap", text: "Bachelors Degree" },
        { icon: "location-marker", text: "Birmingham, United Kingdom" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
    {
      title: "Master of Business Administration",
      university: "University of Birmingham",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 101" },
        { icon: "academic-cap", text: "Masters Degree" },
        { icon: "location-marker", text: "Birmingham, United Kingdom" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
    {
      title: "MBBS",
      university: "Heidelberg University",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 54" },
        { icon: "academic-cap", text: "Bachelors Degree" },
        { icon: "location-marker", text: "Heidelberg, Germany" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
    {
      title: "BSc Nursing",
      university: "Heidelberg University",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 54" },
        { icon: "academic-cap", text: "Bachelors Degree" },
        { icon: "location-marker", text: "Heidelberg, Germany" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
    {
      title: "Bachelor of Business Administration",
      university: "Heidelberg University",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 54" },
        { icon: "academic-cap", text: "Bachelors Degree" },
        { icon: "location-marker", text: "Heidelberg, Germany" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
    {
      title: "Master of Business Administration",
      university: "Heidelberg University",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 54" },
        { icon: "academic-cap", text: "Bachelors Degree" },
        { icon: "location-marker", text: "Heidelberg, Germany" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
    {
      title: "MBBS",
      university: "University of Belgrade",
      details: [
        { icon: "chart-bar", text: "The World Ranking : 54" },
        { icon: "academic-cap", text: "Bachelors Degree" },
        { icon: "location-marker", text: "Heidelberg, Germany" },
        { icon: "calendar", text: "01.08.2024" },
        { icon: "check-circle", text: "Entry Score : IELTS 6.5" },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="text-center mb-8 sm:mb-12">
        <img 
          src={headerImage} 
          alt="Header" 
          className="mx-auto mb-8 sm:mb-20 object-cover w-full max-w-[1374px] h-[300px] sm:h-[522px] sm:mt-10" 
        />
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-left sm:pl-44">
          Find courses to study abroad!
        </h1>
      </div>

      <main className="w-full bg-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 py-8 lg:ml-56">        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>  

          <div className="flex justify-center items-center mt-6 space-x-2">
            <button className="mx-1 px-3 py-1 bg-white rounded text-sm sm:text-base sm:px-4 sm:py-2">1</button>
            <button className="mx-1 px-3 py-1 rounded text-sm sm:text-base sm:px-4 sm:py-2">2</button>
            <button className="mx-1 px-3 py-1 rounded text-sm sm:text-base sm:px-4 sm:py-2">3</button>
          </div>
        </div>
      </main>

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

export default Courses;