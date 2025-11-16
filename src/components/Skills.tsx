// import React from 'react';
// import { Code, Database, Shield, Wrench, TestTube, Cloud, Star, Award, Bot, Monitor, Layers} from 'lucide-react';

// const Skills = () => {
//     const skillCategories = [
//       {
//         category: 'Backend Development',
//         icon: Code,
//         skills: [
//           { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
//           { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
//           { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
//           { name: 'Microservices', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
//         ]
//       },
//       {
//         category: 'Frontend & Full Stack',
//         icon: Monitor,
//         skills: [
//           { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//           { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
//           { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
//         ]
//       },
//       {
//         category: 'Testing & Quality Assurance',
//         icon: TestTube,
//         skills: [
//           { name: 'JUnit 5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
//           { name: 'Mockito', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
//           { name: 'Integration Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
//           { name: 'Test Containers', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
//         ]
//       },
//       {
//         category: 'Database Technologies',
//         icon: Database,
//         skills: [
//           { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
//           { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
//           { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//           { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
//         ]
//       },
//       {
//         category: 'Data Management & API Layer',
//         icon: Layers,
//         skills: [
//           { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
//         ]
//       },
//       {
//         category: 'Artificial Intelligence & Machine Learning',
//         icon: Bot,
//         skills: [
//           { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
//           { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg' },
//           { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
//           { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' }
//         ]
//       },
//       {
//         category: 'Data Science & Analytics',
//         icon: Star,
//         skills: [
//           { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
//           { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
//           { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
//           { name: 'Seaborn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/seaborn/seaborn-original.svg' }
//         ]
//       },
//       {
//         category: 'DevOps & Cloud Infrastructure',
//         icon: Cloud,
//         skills: [
//           { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
//           { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
//           { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
//           { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
//         ]
//       },
//       {
//         category: 'API Development & Security',
//         icon: Shield,
//         skills: [
//           { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
//           { name: 'OAuth/JWT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg' },
//           { name: 'Swagger', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
//           { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
//         ]
//       },
//       {
//         category: 'Tools & Version Control',
//         icon: Wrench,
//         skills: [
//           { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
//           { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
//           { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
//           { name: 'Gradle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg' }
//         ]
//       }
//     ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center mb-4">
//             <Award className="w-8 h-8 text-purple-600 mr-3" />
//             <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
//               Skills
//             </h2>
//           </div>
//           <div className="w-40 h-1.5 bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Here are some of my skills on which I have been working in real-time projects, 
//             delivering scalable and production-ready solutions
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {skillCategories.map((category, index) => (
//             <div 
//               key={index} 
//               className="w-full md:w-[45%] lg:w-[30%] group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300 overflow-hidden"
//             >
//               {/* Card Header */}
//               {/* <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6"> */}
//               <div className="bg-gradient-to-r from-purple-900 to-purple-900 p-6">
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
//                     <category.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white leading-tight">
//                     {category.category}
//                   </h3>
//                 </div>
//               </div>

//               {/* Skills Grid */}
//               <div className="p-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div 
//                       key={skillIndex} 
//                       className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-purple-50/50 rounded-xl border border-slate-200 hover:border-purple-800 hover:shadow-md transition-all duration-300 group/item"
//                     >
//                       <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
//                         <img 
//                           src={skill.logo} 
//                           alt={skill.name}
//                           className="w-full h-full object-contain"
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                           }}
//                         />
//                       </div>
//                       <span className="text-sm font-semibold text-slate-700 text-center leading-tight">
//                         {skill.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Note */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-lg border border-slate-200">
//             <Star className="w-[1em] h-[1em] sm:w-[1.25em] sm:h-[1.25em] md:w-[1.5em] md:h-[1.5em] text-yellow-500 mr-2"  />
//             <p className="text-slate-700 font-medium">
//               Passionate about continuous learning and solving real-world engineering challenges.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { Code, Database, Shield, Wrench, Cloud, Award, Brain, BarChart3, Bell, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      icon: Code,
      skills: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Microservices', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
      ]
    },
    {
      category: 'Frontend & Full Stack',
      icon: Layers,
      skills: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ]
    },
    {
      category: 'Database Technologies',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'Hibernate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' }
      ]
    },
    {
      category: 'Data Science & Analytics',
      icon: BarChart3,
      skills: [
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
        { name: 'Data Visualization', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ]
    },
    {
      category: 'API Development & Security',
      icon: Shield,
      skills: [
        { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'OAuth 2.0', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg' },
        { name: 'JWT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg' },
        { name: 'Swagger', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
        { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
      ]
    },
    {
      category: 'Logging & Monitoring',
      icon: Bell,
      skills: [
        { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
        { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
        { name: 'ELK Stack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
        { name: 'CloudWatch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
      ]
    },
    {
      category: 'Tools & Version Control',
      icon: Wrench,
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'IntelliJ IDEA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
        { name: 'Gradle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg' },
        { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' }
      ]
    }
  ];

  const additionalSkills = [
    'Unit & Integration Testing (JUnit, Mockito, Pytest)',
    'Test Containers & Test-Driven Development',
    'Secure Coding Practices (OWASP Top 10)',
    'Code Debugging & Performance Profiling',
    'Agile & Scrum Methodologies',
    'Cross-functional Team Collaboration',
    'Application Performance Monitoring (APM)',
    'API Gateway (Kong, AWS API Gateway)'
  ];

  return (
    <section id="skills" className="py-20 min-h-screen bg-gradient-to-br from-slate-100 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Skills
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Here are some of my skills on which I have been working in real-time projects, 
            delivering scalable and production-ready solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-500 overflow-hidden hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-slate-900 via-purple-700 to-slate-800 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
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
                      className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-purple-50/50 rounded-xl border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all duration-300 group/item"
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

        {/* Additional Skills Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Additional Professional Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 bg-gradient-to-br from-slate-50 to-purple-50/50 rounded-xl border border-slate-200 hover:border-purple-400 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700 font-medium leading-relaxed">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-lg border border-slate-200">
            <Award className="w-5 h-5 text-yellow-500 mr-2" />
            <p className="text-slate-700 font-medium">
              Continuously learning and exploring new technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;