import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "A full-stack system built with PHP, Bootstrap, and MySQL. Features include book borrowing and return, fine calculation for late returns, and user management.",
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Sadhiq0745/Library-Management-System",
      //liveUrl: "#"
    },
    {
       title: "Village Mart Android App",
      description: "An Android application designed to connect rural vendors with customers. Features include product listing, order placement, delivery tracking, and multilingual support. Built for enhancing local commerce.",
      image: "https://images.pexels.com/photos/5529588/pexels-photo-5529588.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Java", "XML", "Firebase", "Android Studio"],
      githubUrl: "https://github.com/Sadhiq0745/VMart-android-app",
      liveUrl: "/qr-code.png"
    },
    {
      title: "Realtime Attendance System",
      description: "A face recognition-based attendance system that captures real-time student presence using webcam. Features include student registration with image upload, live face detection, attendance marking with timestamp, and low attendance alerts. Integrated with Firebase for database and storage.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python","Machine learning", "OpenCV", "face_recognition", "Firebase", "Flask"],
      githubUrl: "https://github.com/Sadhiq0745/VMart-android-app",
      //liveUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills. Built with modern design principles and optimized for performance and accessibility.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
      githubUrl: "https://github.com/Sadhiq0745/myPortfolio",
      liveUrl: "https://my-portfolio-sadhiq.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-slate-500 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;