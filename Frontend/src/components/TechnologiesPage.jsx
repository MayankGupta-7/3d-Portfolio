
import { useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const technologies = [
  { name: 'HTML5', icon: 'bxl-html5', color: 'text-orange-500', description: 'Markup language for structuring web content.' },
  { name: 'CSS3', icon: 'bxl-css3', color: 'text-blue-500', description: 'Style sheet language for designing web pages.' },
  { name: 'JavaScript', icon: 'bxl-javascript', color: 'text-yellow-300', description: 'Programming language for the web.' },
  { name: 'React', icon: 'bxl-react', color: 'text-cyan-400', description: 'JavaScript library for building user interfaces.' },
  { name: 'Tailwind CSS', icon: 'bxl-tailwind-css', color: 'text-sky-400', description: 'Utility-first CSS framework for rapid UI building.' },
  { name: 'Node.js', icon: 'bxl-nodejs', color: 'text-green-500', description: 'JavaScript runtime for building fast backends.' },
  { name: 'Express.js', icon: 'bx-server', color: 'text-gray-300', description: 'Minimal Node.js backend framework.' },
  { name: 'Spring Boot', icon: 'bx-leaf', color: 'text-green-400', description: 'Java-based backend framework for rapid development.' },
  { name: 'MySQL', icon: 'bx-data', color: 'text-blue-400', description: 'Relational database management system.' },
  { name: 'MongoDB', icon: 'bx-leaf', color: 'text-green-500', description: 'NoSQL document-oriented database.' },
  { name: 'Git', icon: 'bxl-git', color: 'text-orange-400', description: 'Version control system for tracking code changes.' },
  { name: 'C++', icon: 'bxl-c-plus-plus', color: 'text-purple-500', description: 'High-performance system programming language.' },
  { name: 'C', icon: 'bxl-c-plus-plus', color: 'text-blue-400', description: 'Procedural low-level programming language.' },
  { name: 'Java', icon: 'bxl-java', color: 'text-red-600', description: 'Robust object-oriented programming language.' },
];

const TechnologiesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12" data-aos="fade-down">
        Technologies I Work With
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {technologies.map((tech, idx) => (
          <div
            key={tech.name}
            className="group relative bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg 
              transform transition-transform duration-500 hover:scale-110
              hover:shadow-purple-600/40 opacity-0 group-hover:opacity-100"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <i className={`bx ${tech.icon} text-6xl ${tech.color} mb-3 transition-opacity duration-300 group-hover:opacity-100`}></i>
            <h3 className="text-xl font-semibold mb-1">{tech.name}</h3>
            <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesPage;
