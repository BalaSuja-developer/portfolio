import React from 'react';
import { Code, Database, Shield, Wrench, TestTube, Cloud, Check, Star, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      icon: Code,
      skills: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Microservices', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
      ]
    },
    {
      category: 'Testing & Quality Assurance',
      icon: TestTube,
      skills: [
        { name: 'JUnit 5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Mockito', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Integration Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
        { name: 'Test Containers', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ]
    },
    {
      category: 'Database & Data Management',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
      ]
    },
    {
      category: 'DevOps & Infrastructure',
      icon: Cloud,
      skills: [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
      ]
    },
    {
      category: 'API Development & Security',
      icon: Shield,
      skills: [
        { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'OAuth/JWT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg' },
        { name: 'Swagger', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
        { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
      ]
    },
    {
      category: 'Tools & Version Control',
      icon: Wrench,
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'IntelliJ IDEA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
        { name: 'Gradle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Skills
            </h2>
          </div>
          <div className="w-40 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Here are some of my skills on which I have been working in real-time projects, 
            delivering scalable and production-ready solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 overflow-hidden"
            >
              {/* Card Header */}
              {/* <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6"> */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-900 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl border border-slate-200 hover:border-blue-800 hover:shadow-md transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-lg border border-slate-200">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <p className="text-slate-700 font-medium">
              Passionate about continuous learning and solving real-world engineering challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;