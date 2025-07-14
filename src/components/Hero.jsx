import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform rotate-12 scale-150"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sadhiq
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer, passionate about creating
            beautiful, functional web experiences that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              View My Work
            </button> */}
            <a href="/abdul_sadhiq_basha_resume.pdf" download>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-300 hover:border-white hover:text-white font-semibold rounded-lg transition-all duration-300">
                Download Resume
              </button>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/Sadhiq0745"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/b-abdul-sadhiq-basha/"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:applysadhiq@gmail.com"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;