import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, TrendingUp, Code, Award, Building2 } from 'lucide-react';
import bluelogo from '../components/icons/bluescope-logo.png'
import kaditlogo from '../components/icons/kadit-logo.jpg'

const Experience = () => {
  const experiences = [
    {
      company: "KADIT Innovations",
      role: "Full Stack Software Engineer",
      period: "Dec 2024 - Present",
      duration: "1 yr",
      location: "Kadaiyanallur, Tamil Nadu, India",
      workType: "On-site · Full-time",
      description: "Building modern, scalable web applications using Kotlin, Java, and Spring Boot. Focusing on developing microservices, implementing secure authentication flows, and integrating API gateways.",
      achievements: [
        "Built and maintained microservices using Kotlin + Spring Boot",
        "Implemented API Gateway routing, authentication, and rate-limiting",
        "Developed secure two-factor authentication (2FA) and login flows",
        "Designed workflow management modules to automate business processes",
        "Integrated backend services with React.js frontend",
        "Optimized REST APIs for performance and scalability"
      ],
      technologies: ["Kotlin", "Java", "Spring Boot", "Microservices", "API Gateway", "2FA", "React.js", "Docker", "CI/CD"],
      logo: kaditlogo,
      logoColor: "from-purple-500 to-purple-700",
      current: true
    },
    {
      company: "KADIT Innovations",
      role: "Junior Java Developer",
      period: "Dec 2023 - Dec 2024",
      duration: "1 yr 1 mo",
      location: "Kadaiyanallur, Tamil Nadu, India",
      workType: "On-site · Full-time",
      description: "Contributed to backend application development using Java and Spring Boot. Built REST APIs, implemented authentication modules, and collaborated with frontend teams for seamless integration.",
      achievements: [
        "Developed REST APIs and implemented core backend features",
        "Built JWT-based authentication & authorization workflows",
        "Designed database schemas and optimized SQL queries",
        "Used Spring Data JPA/Hibernate for ORM and CRUD operations",
        "Added global exception handling, validation, and structured logging",
        "Participated in Agile ceremonies, code reviews, and sprint planning"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "JWT", "React.js", "REST APIs", "Git", "Postman"],
      logo: kaditlogo,
      logoColor: "from-purple-500 to-purple-700"
    },
    {
      company: "Bluescope Information Technology (P) Ltd",
      role: "Intern",
      period: "Jan 2023 - Feb 2023",
      duration: "2 mos",
      location: "Tirunelveli, Tamil Nadu, India",
      workType: "On-site · Full-time",
      description: "Gained hands-on experience in software development and contributed to internal projects during the internship period.",
      achievements: [
        "Worked on real-world software development projects",
        "Learned industry best practices and development workflows",
        "Collaborated with experienced developers on team projects"
      ],
      technologies: ["Java", "Spring", "MySQL", "Git"],
      logo: bluelogo,
      logoColor: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <section id="experience" className="bg-gradient-to-br from-slate-100 to-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A journey of continuous learning, growth, and technical excellence
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-emerald-500 to-purple-500 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Dot with Logo */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 border-white shadow-lg bg-gradient-to-br ${exp.logoColor} flex items-center justify-center ${
                    exp.current ? 'animate-pulse' : ''
                  }`}>
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="w-10 h-10 object-contain" 
                    />
                    {exp.current && (
                      <div className="absolute -inset-2 bg-emerald-500 rounded-full opacity-20 animate-ping"></div>
                    )}
                  </div>
                </div>

                {/* Spacer for centering */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border-2 border-slate-200 hover:border-purple-400 relative group">
                    {/* Connecting Line to Dot - Desktop Only */}
                    <div className={`hidden md:block absolute top-12 w-12 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'right-full from-purple-300 to-transparent' 
                        : 'left-full from-transparent to-purple-300'
                    }`}></div>

                    {/* Current Badge */}
                    {exp.current && (
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-md">
                        <TrendingUp className="w-4 h-4" />
                        Current Position
                      </div>
                    )}

                    {/* Company Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.logoColor} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        {/* <span className="text-white font-bold text-sm">{exp.logo}</span> */}
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className="w-10 h-10 object-contain" 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-purple-600 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-700 font-semibold mt-1">
                          <Building2 className="w-4 h-4 text-purple-500" />
                          <span className="text-base">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-purple-600 font-semibold">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span className="text-slate-500">· {exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="text-slate-500 text-xs font-medium">
                        {exp.workType}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-5">{exp.description}</p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-purple-200 via-emerald-200 to-purple-200 mb-5"></div>

                    {/* Achievements */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Key Responsibilities</h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                            <ChevronRight className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="w-4 h-4 text-purple-600" />
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-emerald-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary Stats */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Career Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <div className="text-slate-600 text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-slate-600 text-sm font-medium">Roles Held</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-slate-600 text-sm font-medium">Technologies</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                2
              </div>
              <div className="text-slate-600 text-sm font-medium">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;