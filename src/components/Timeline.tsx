import React from 'react';
import { GraduationCap, Award, Briefcase, TestTube, Zap, Target, LaptopIcon, BookOpen } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    // {
    //   year: '2018-2021',
    //   title: 'Educational Foundation',
    //   subtitle: 'Computer Science Foundation',
    //   description: 'Established strong fundamentals in algorithms, data structures, and software engineering principles.',
    //   icon: GraduationCap,
    //   color: 'from-purple-500 to-purple-600',
    //   achievements: ['Advanced Algorithm Design', 'Object-Oriented Programming', 'Database Systems']
    // },
    // {
    //   year: '2020-2021',
    //   title: 'Backend Specialization',
    //   subtitle: 'Java & Kotlin Mastery',
    //   description: 'Developed expertise in enterprise Java development and modern Kotlin programming.',
    //   icon: Award,
    //   color: 'from-blue-500 to-blue-600',
    //   achievements: ['Spring Boot Mastery', 'Microservices Architecture', 'API Design Patterns']
    // },
    // {
    //   year: '2021-2022',
    //   title: 'Sevilai Leadership',
    //   subtitle: 'Advanced Logistics Platform',
    //   description: 'Architected and delivered comprehensive logistics automation with workflow orchestration.',
    //   icon: Briefcase,
    //   color: 'from-emerald-500 to-emerald-600',
    //   achievements: ['Temporal Workflow Automation', 'OIDC/JWT Security', 'PostgreSQL Optimization']
    // },
    // {
    //   year: '2022-2023',
    //   title: 'Quality Engineering Excellence',
    //   subtitle: 'Test-Driven Development Leadership',
    //   description: 'Pioneered comprehensive testing strategies across microservices and workflow automation.',
    //   icon: TestTube,
    //   color: 'from-teal-500 to-teal-600',
    //   achievements: ['CI/CD Quality Gates', 'Contract Testing', 'Observability Integration']
    // },
    // {
    //   year: '2023-2024',
    //   title: 'INHLTH Innovation',
    //   subtitle: 'Modern Healthcare Automation',
    //   description: 'Designed healthcare platform with Kotlin-first architecture and strict compliance requirements.',
    //   icon: Zap,
    //   color: 'from-orange-500 to-orange-600',
    //   achievements: ['Kotlin DSL Architecture', 'GraphQL Integration', 'Healthcare Compliance']
    // },
    // {
    //   year: '2024-Present',
    //   title: 'Technical Leadership',
    //   subtitle: 'Backend Architecture & Mentorship',
    //   description: 'Leading engineering excellence initiatives while mentoring teams in modern development practices.',
    //   icon: Target,
    //   color: 'from-red-500 to-red-600',
    //   achievements: ['Cross-Project Expertise', 'Team Mentorship', 'Knowledge Sharing']
    // }
    {
      year: '2018-2021',
      title: 'BCA Completed',
      subtitle: 'Sri Parasakthi College, Courtallam',
      description: 'Built a solid foundation in computer science, covering programming, data structures, and basic software development.',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600',
      achievements: ['Graduated with BCA', 'Core Java & C Programming', 'Database Concepts']
    },
    {
      year: '2021-2023',
      title: 'MCA Completed',
      subtitle: 'Manonmaniam Sundaranar University, Tirunelveli',
      description: 'Advanced studies in computer applications with emphasis on software engineering, web development, and project work.',
      icon: GraduationCap,
      color: 'from-purple-600 to-purple-700',
      achievements: ['Graduated with MCA', 'Web Technologies', 'Mini & Major Projects']
    },
    {
      year: 'Jan 2023 - Feb 2023',
      title: 'Intern',
      subtitle: 'Bluescope Information Technology (P) Ltd',
      description: 'Completed internship as a Full Stack Developer, gaining practical experience in both frontend and backend development.',
      icon: Briefcase,
      color: 'from-green-500 to-green-600',
      achievements: ['Worked on live projects', 'Frontend & Backend Exposure', 'Agile Practice']
    },
    {
      year: 'Dec 2023 - Present',
      title: 'Full Stack Developer',
      subtitle: 'KADIT Innovations',
      description: 'Working as a Full Stack Developer on enterprise applications using Java, Spring Boot, PostgreSQL, and React.js.',
      icon: LaptopIcon,
      color: 'from-blue-500 to-blue-600',
      achievements: ['REST API Development', 'UI Collaboration', 'Database Design']
    },
    {
      year: '2025',
      title: 'STEM Training',
      subtitle: 'Chitti Training Program',
      description: 'Completed hands-on STEM training focused on real-world programming and problem-solving techniques.',
      icon: BookOpen,
      color: 'from-yellow-500 to-yellow-600',
      achievements: ['Hands-on Coding', 'Team Projects', 'STEM Certification']
    }

  ];

  return (
    <section id="timeline" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Career Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From foundational education to senior backend architect - a journey marked by testing excellence and continuous innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full"></div>

          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-slate-200 flex items-center justify-center shadow-lg z-10">
                <div className={`w-10 h-10 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center`}>
                  <milestone.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                  {/* Year Badge */}
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${milestone.color} text-white text-sm font-semibold rounded-full mb-3`}>
                    {milestone.year}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{milestone.subtitle}</p>
                  <p className="text-slate-600 mb-4 leading-relaxed">{milestone.description}</p>
                  
                  {/* Achievements */}
                  <div className="space-y-2">
                    {milestone.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-sm text-slate-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${milestone.color} rounded-full mr-3`}></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;