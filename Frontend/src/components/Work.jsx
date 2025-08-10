
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Project One :- Personal Portfolio',
    description: 'This is a responsive and interactive personal portfolio website designed to showcase my skills, projects, and experiences. Built using ReactJS for component-based architecture and React Router for smooth navigation across different pages like Home, About ,Work Thoery, and Contact. Key Features:Responsive Design using TailwindCSSSingle Page Application (SPA) experience with React Router ,3D Visuals using Three.js for interactive or animated elements ,Projects Showcase with images, descriptions, and live/demo links ,Smooth Navigation and scroll-based effects ,This project demonstrates modern front-end development practices and creative UI/UX skills, perfect for employers, collaborators, or clients to explore my work and get in touch. ',
    image: '/portfolio.png',
  },
  {
    title: 'Project Two',
    description: 'The frontend of the AI Dietician Chatbot is developed using ReactJS, providing a responsive, interactive, and user-friendly interface. It allows users to seamlessly interact with the chatbot, input their dietary details, and receive personalized nutrition guidance in real time.Key Features:Chat Interface: Clean and intuitive UI for user-chatbot conversations using React components. Dynamic Forms: Users can enter health data like age, weight, dietary goals, and restrictions. Real-Time Responses: Asynchronous communication with backend/AI API for instant replies. React Router: Smooth navigation between chatbot, profile, and progress tracking pages. TailwindCSS Integration: Modern and responsive styling for a polished UI. State Management: Uses React hooks (useState, useEffect) to manage chat state and user data. This frontend acts as the interactive layer between the user and the AI model, focusing on a seamless, responsive, and engaging user experience.',
    image: '/AI_DIET.png',
  },
  {
    title: 'Project Three',
    description: 'This is a simple and responsive weather web application that allows users to check real-time weather information for any city or location. Built using HTML for structure, CSS for styling, and JavaScript for dynamic functionality, it integrates with a weather API (such as OpenWeatherMap) to fetch live data.Key Features: Search Functionality: Users can enter a city name to get current weather.Live Weather Data: Fetches temperature, humidity, weather condition, wind speed, and more using a weather API. Responsive Design: Mobile-friendly layout with clean, minimal UI using CSS. Dynamic Updates: JavaScript handles API calls and dynamically updates the DOM with real-time data. Error Handling: Displays messages for invalid city names or network issues. How It Works: User inputs a city name. JavaScript sends a request to the weather API. API responds with weather data. Data is displayed on the page with icons and readable format.',
    image: '/weather.png',
  },
];

const WorkTheory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // 🔁 this allows animations to loop on every scroll
      mirror: true, // 🔄 animation will trigger on scroll up as well
    });
  }, []);

  return (
    <section className="relative min-h-screen px-5 py-20 bg-black text-white overflow-hidden">
      <h1
        className="text-4xl font-semibold mb-16 text-center text-yellow-400"
        data-aos="zoom-in"
      >
        Work Theory
      </h1>

      <div className="space-y-28">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const imgAnim = isEven ? 'fade-right' : 'fade-left';
          const textAnim = isEven ? 'fade-left' : 'fade-right';

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                !isEven ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-lg shadow-lg"
                data-aos={imgAnim}
              />
              <div className="md:w-1/2" data-aos={textAnim}>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">{project.title}</h2>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkTheory;


