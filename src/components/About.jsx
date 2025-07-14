import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: <Palette className="text-purple-400" size={24} />,
      title: "Design-Focused",
      description: "Creating beautiful user interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user satisfaction."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              As a passionate fresher in Full Stack Development, I specialize in creating
              modern, responsive applications using cutting-edge technologies. My journey
              began with a Computer Science degree and continues to evolve through
              personal projects and continuous learning.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in the power of clean, semantic code and user-centered design.
              Whether it's building a complex web application or crafting a simple landing
              page, I approach every project with attention to detail and a commitment to excellence.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Html', 'Css', 'JavaScript', 'React.js', 'Java', 'Sql'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-600/50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;