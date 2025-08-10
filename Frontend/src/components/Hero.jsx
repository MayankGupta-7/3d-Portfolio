import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const navigate = useNavigate();

  const toggleContactOptions = () => {
    setShowContactOptions(!showContactOptions);
  };

  const goToTechnologies = () => {
    navigate('/technologies');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] relative">
      {/* Left Side */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* Badge */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#99b663] shadow-[0_0_15px_rgba(255,255,25,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white px-4">
            <i className="bx bx-diamond"></i>
            Introducing
          </div>
        </div>

        {/* Name & Role */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-4">
          Mayank Gupta
        </h1>
        <h1 className="text-3xl font-semibold text-yellow-300">
          Fullstack Developer & Web Developer
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mt-4">
          <li>
            Passionate Fullstack Developer crafting scalable and user-focused web applications.
          </li>
          <li>
            Software developer with a strong foundation in problem-solving and clean code practices.
          </li>
          <li>
            Clean code, component-driven architecture, and performance optimization are my core strengths.
          </li>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 relative">
          <div className="relative">
            <button
              onClick={toggleContactOptions}
              className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            >
              Hire Me <i className="bx bx-link-external"></i>
            </button>

            {/* Contact Dropdown */}
            {showContactOptions && (
              <div className="absolute top-full left-0 mt-2 bg-black text-white border border-gray-700 rounded-lg shadow-md p-4 space-y-2 z-50 min-w-[220px] animate-fade-in">
                <a
                  href="mailto:work.mayank11@gmail.com"
                  className="block hover:text-yellow-400 transition"
                >
                  📧 Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/mayankgupta007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-yellow-400 transition"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="tel:+91-8302895481"
                  className="block hover:text-yellow-400 transition"
                >
                  📞 Call Me
                </a>
              </div>
            )}
          </div>

          {!isLoggedIn && (
            <Link
              to="/signup"
              className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            >
              Get Started <i className="bx bx-link-external"></i>
            </Link>
          )}

          <button
            onClick={goToTechnologies}
            className="bg-yellow-600 text-white px-6 py-3 rounded-full sm:text-lg text-sm font-semibold tracking-wider hover:bg-indigo-700 transition"
          >
            Technologies
          </button>
        </div>
      </div>

      {/* 3D Robot */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/NnkMVGUkiqTtz7J2/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
