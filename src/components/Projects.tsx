import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle, Database, Shield, Zap, TestTube } from 'lucide-react';
import sevilaiImage from '../components/image/sevilai.jpg';
import inhlthImage from '../components/image/inhlth.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'credit-card-default',
      title: 'Credit Card Default Prediction',
      subtitle: 'Machine Learning',
      language: 'Python',
      category: 'Academic',
      description: 'A predictive analytics project that identifies whether a customer is likely to default on their credit card payment.',
      longDescription: 'Built a comprehensive machine learning system for credit risk assessment, implementing end-to-end data science workflow from data cleaning to model deployment. The project demonstrates practical application of classification algorithms and model evaluation techniques.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      stack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Jupyter'],
      testingPractices: [
        'Performed extensive EDA and feature engineering',
        'Implemented multiple classification models for comparison',
        'Cross-validation and hyperparameter tuning',
        'Model performance visualization and reporting'
      ],
      achievements: [
        'Data cleaning and preprocessing pipeline',
        'Logistic Regression, Random Forest, and SVM implementations',
        'Comprehensive model accuracy comparison',
        'Interactive visualization of customer risk trends'
      ]
    },
    {
      id: 'epost-office',
      title: 'Smart E-Post Office System',
      subtitle: 'Java Desktop Application',
      language: 'Java',
      category: 'Academic',
      description: 'A desktop-based application that automates basic postal operations and customer services.',
      longDescription: 'Developed a comprehensive postal management system with user authentication, parcel tracking, and automated cost calculation. The application demonstrates proficiency in Java desktop development and database integration.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      stack: ['Java', 'JDBC', 'MySQL', 'Swing/JavaFX'],
      testingPractices: [
        'User management for customers and postal staff',
        'Real-time parcel tracking and delivery updates',
        'Automated postage cost calculations',
        'Database-backed transaction history'
      ],
      achievements: [
        'Full-featured user authentication system',
        'Parcel booking and tracking functionality',
        'Admin dashboard for record management',
        'Lightweight and efficient desktop interface'
      ]
    },
    {
      id: 'techcompare',
      title: 'TechCompare',
      subtitle: 'Product Comparison Web Application',
      language: 'TypeScript',
      category: 'Personal',
      description: 'A modern web app that allows users to compare software tools, tech stacks, or gadgets across multiple attributes.',
      longDescription: 'Created a responsive product comparison platform with dynamic filtering, sorting, and API integration. The application showcases modern React development practices and clean UI/UX design principles.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      testingPractices: [
        'Dynamic comparison table with filters',
        'API-based data loading for products',
        'Local state management for performance',
        'Responsive and mobile-friendly design'
      ],
      achievements: [
        'Clean, modern comparison interface',
        'Efficient rendering with React optimization',
        'API integration for product details',
        'Cross-device compatibility'
      ]
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      subtitle: 'Personal Project',
      language: 'TypeScript',
      category: 'Personal',
      description: 'A fully responsive and interactive developer portfolio showcasing skills, projects, and experience.',
      longDescription: 'Designed and developed a modern portfolio website featuring custom animations, particle effects, and smooth interactions. The site demonstrates expertise in frontend development and modern web technologies.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      testingPractices: [
        'Custom animations and interactive UI',
        'Particle background effects',
        'Smooth scrolling and transitions',
        'Performance-optimized build process'
      ],
      achievements: [
        'Fully mobile-responsive layout',
        'Modern design with engaging animations',
        'Optimized build with Vite',
        'Deployed on GitHub Pages'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 min-h-screen bg-gradient-to-br from-slate-100 to-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I have worked on a variety of projects across backend, full-stack, and web development. 
            My work includes building microservices, developing web applications, and delivering practical 
            solutions used in real environments. Here are some of my key projects, and you can find more on my GitHub.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Language Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
                    project.language === 'Java' ? 'bg-orange-500' : 'bg-purple-500'
                  }`}>
                    {project.language}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                </div>

                <p className="text-purple-600 font-medium mb-3">{project.subtitle}</p>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  activeProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-slate-200 space-y-4">
                    <p className="text-slate-700 leading-relaxed">{project.longDescription}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-purple-500" />
                        Testing Practices
                      </h4>
                      <ul className="space-y-1">
                        {project.testingPractices.map((practice, index) => (
                          <li key={index} className="flex items-start text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            {practice}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-emerald-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  {activeProject === project.id ? 'Show Less' : 'Read More'}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;