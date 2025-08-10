import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          About Me
        </h1>

        <p className="text-lg text-gray-300 leading-8">
          Hello! I’m <span className="text-yellow-300 font-semibold">Mayank Gupta</span>,
          a passionate <strong>Fullstack Web Developer</strong> with a knack for building fast,
          modern, and scalable applications. My journey began with curiosity for code and has grown
          into a commitment to craft seamless user experiences using the MERN stack, Three.js, and
          more.
        </p>

        <p className="text-lg text-gray-300 mt-6 leading-8">
          I specialize in developing dynamic frontends with React and robust backends using Node.js.
          Whether it's a sleek 3D website or a complex REST API, I focus on clean code, performance,
          and responsiveness. I'm always exploring new tools, frameworks, and animations to stay ahead.
        </p>

        <p className="text-lg text-gray-300 mt-6 leading-8">
          When I'm not coding, you'll find me learning new tech trends, refining my portfolio, or
          experimenting with creative web animations. I'm currently open to freelance work and full-time
          opportunities — let’s build something amazing together.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="mailto:work.mayank11@gmail.com"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
          >
            Contact Me
          </a>
          <a
            href="/public/Mayank_resume_updated.pdf"
            download
            className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
