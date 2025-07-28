import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle, Database, Shield, Zap, TestTube } from 'lucide-react';
import sevilaiImage from '../components/image/sevilai.jpg';
import inhlthImage from '../components/image/inhlth.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'sevilai',
      title: 'Sevilai',
      subtitle: 'Advanced Logistics Platform',
      language: 'Java',
      description: 'Architected and delivered a logistics platform defined by automation, reliability, and strict API security.',
      longDescription: 'As the lead Java backend developer, I architected and delivered Sevilai—a logistics and booking platform defined by its automation, reliability, and strict API security. The platform consistently scaled to meet expanding usage while minimizing operational issues.',
      image: sevilaiImage,
      stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Prometheus','Junit', 'Mockito'],
      testingPractices: [
        'Comprehensive unit, integration, and contract testing with JUnit & Mockito',
        'Database validation with Testcontainers for schema migrations',
        'Prometheus-driven monitoring with proactive workflow event tracking'
      ],
      achievements: [
        'RESTful interfaces with OIDC/JWT authentication',
        'Advanced PostgreSQL schemas with enum and JSONB usage',
        'Set new standards for backend testability and maintainability'
      ],
      // github: '#',
      demo: 'http://www.sevilaitransport.com/'
    },
    {
      id: 'inhlth',
      title: 'INHLTH',
      subtitle: 'Modern Healthcare Automation Suite',
      language: 'Kotlin',
      description: 'Designed and executed a healthcare platform emphasizing automation, security, and observability.',
      longDescription: 'As principal Kotlin backend engineer, I designed and executed INHLTH, a healthcare platform emphasizing automation, security, and observability. The platform represents modern backend craftsmanship—fusing rapid delivery cycles with mission-critical quality.',
      // image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: inhlthImage,
      stack: ['Kotlin DSL', 'Spring Boot', 'Temporal', 'PostgreSQL', 'GraphQL', 'Hasura'],
      testingPractices: [
        'MockK and property-based testing for business rule validation',
        'Temporal workflow mocks for asynchronous event testing',
        'Both REST and GraphQL API development and testing',
        'Testcontainer suites for flexible clinical data models'
      ],
      achievements: [
        'Kotlin-first architecture with Spring Boot DSL for code clarity',
        'Healthcare workflow automation (appointments, notifications, compliance)',
        'PostgreSQL with custom enums and nested JSONB for clinical data',
        'CI pipeline integration ensuring strict reliability and compliance'
      ],
      // github: '#',
      demo: 'https://inhlth.com/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Production-ready platforms built with test-driven development and enterprise-grade reliability
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

                {/* Coverage Badge */}
                {/* <div className="absolute top-4 right-4 flex items-center space-x-1 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  <TestTube className="w-4 h-4" />
                  <span>{project.id === 'sevilai' ? '95%' : '98%'} Coverage</span>
                </div> */}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    {/* <a 
                      href={project.github}
                      className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a> */}
                    <a 
                      href={project.demo}
                      target = "_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-blue-600 font-medium mb-3">{project.subtitle}</p>
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
                        <Shield className="w-4 h-4 mr-2 text-blue-500" />
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
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
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